'use client';

import React, { useMemo, useState } from 'react';

type ToolKey = 'base64' | 'aes' | 'formatter' | 'password' | 'cron';
type FormatterMode = 'json' | 'sql' | 'xml';

const toolTabs: Array<{ key: ToolKey; title: string; description: string }> = [
  { key: 'base64', title: 'Base64 Encode / Decode', description: 'Convert plain text to Base64 and decode it back.' },
  { key: 'aes', title: 'AES Encrypt / Decrypt', description: 'Encrypt and decrypt text with passphrase, plain salt, IV, and iterations.' },
  { key: 'formatter', title: 'Formatter', description: 'Format JSON, SQL, and XML snippets quickly.' },
  { key: 'password', title: 'Random Password Generator', description: 'Generate strong passwords with full character controls.' },
  { key: 'cron', title: 'Cron Expression Tool', description: 'Validate a cron expression and preview its next occurrences.' },
];

const sqlKeywords = [
  'select',
  'from',
  'where',
  'insert into',
  'values',
  'update',
  'set',
  'delete',
  'inner join',
  'left join',
  'right join',
  'join',
  'on',
  'order by',
  'group by',
  'having',
  'limit',
  'offset',
  'case',
  'when',
  'then',
  'else',
  'end',
  'and',
  'or',
];

function toBase64(value: string) {
  const bytes = new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function fromBase64(value: string) {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function bytesToBase64(bytes: Uint8Array) {
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToBytes(value: string) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

function createRandomPlainString(length: number) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function formatXml(value: string) {
  const normalized = value.replace(/>\s*</g, '><').replace(/</g, '\n<').trim();
  const lines = normalized.split('\n').filter(Boolean);
  let indentLevel = 0;

  return lines
    .map((line) => {
      if (line.startsWith('</')) {
        indentLevel = Math.max(indentLevel - 1, 0);
      }

      const formattedLine = `${'  '.repeat(indentLevel)}${line}`;
      const isOpeningTag = /^<[^!?/][^>]*[^/]?>$/.test(line) && !line.includes('</');

      if (isOpeningTag) {
        indentLevel += 1;
      }

      return formattedLine;
    })
    .join('\n');
}

function formatSql(value: string) {
  let formatted = value.replace(/\s+/g, ' ').trim();

  sqlKeywords
    .sort((a, b) => b.length - a.length)
    .forEach((keyword) => {
      const pattern = new RegExp(`\\b${keyword.replace(/\s+/g, '\\s+')}\\b`, 'gi');
      formatted = formatted.replace(pattern, keyword.toUpperCase());
    });

  formatted = formatted
    .replace(/\b(FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|VALUES|SET|INNER JOIN|LEFT JOIN|RIGHT JOIN|JOIN)\b/g, '\n$1')
    .replace(/\b(AND|OR|WHEN|ELSE)\b/g, '\n  $1')
    .replace(/\b(SELECT)\b/g, '$1\n  ')
    .replace(/\n{2,}/g, '\n');

  return formatted.trim();
}

function createPassword(options: {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  symbols: boolean;
  seedWord: string;
}) {
  const sets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    digits: '0123456789',
    symbols: '!@#$%^&*()-_=+[]{};:,.<>?',
  };
  const substitutions: Record<string, { digit?: string; symbol?: string }> = {
    a: { digit: '4', symbol: '@' },
    b: { digit: '8' },
    e: { digit: '3' },
    g: { digit: '9' },
    i: { digit: '1', symbol: '!' },
    l: { digit: '1', symbol: '|' },
    o: { digit: '0' },
    s: { digit: '5', symbol: '$' },
    t: { digit: '7', symbol: '+' },
    z: { digit: '2' },
  };

  const chosenSets = Object.entries(options)
    .filter(([key, enabled]) => ['uppercase', 'lowercase', 'digits', 'symbols'].includes(key) && enabled)
    .map(([key]) => sets[key as keyof typeof sets]);

  if (!chosenSets.length) {
    throw new Error('Select at least one character set.');
  }

  const allCharacters = chosenSets.join('');
  const passwordChars: string[] = [];
  const normalizedSeed = options.seedWord.trim();

  if (normalizedSeed) {
    const transformedSeed = normalizedSeed
      .split('')
      .map((character, index) => {
        const lower = character.toLowerCase();
        const substitution = substitutions[lower];
        const availableMutations = [
          options.digits ? substitution?.digit : undefined,
          options.symbols ? substitution?.symbol : undefined,
        ].filter(Boolean) as string[];

        if (availableMutations.length) {
          return availableMutations[Math.floor(Math.random() * availableMutations.length)];
        }

        if (/[a-z]/i.test(character)) {
          if (options.uppercase && options.lowercase) {
            return index % 2 === 0 ? lower.toUpperCase() : lower;
          }

          if (options.uppercase) {
            return lower.toUpperCase();
          }

          return lower;
        }

        return character;
      })
      .join('');

    passwordChars.push(...transformedSeed.slice(0, options.length).split(''));
  }

  chosenSets.forEach((set) => {
    if (passwordChars.length < options.length) {
      passwordChars.push(set[Math.floor(Math.random() * set.length)]);
    }
  });

  while (passwordChars.length < options.length) {
    passwordChars.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
  }

  for (let index = passwordChars.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [passwordChars[index], passwordChars[swapIndex]] = [passwordChars[swapIndex], passwordChars[index]];
  }

  return passwordChars.join('');
}

function parseCronField(field: string, min: number, max: number) {
  const values = new Set<number>();
  const segments = field.split(',');

  const addRange = (start: number, end: number, step: number) => {
    if (start < min || end > max || start > end || step < 1) {
      throw new Error(`Invalid cron field segment "${field}".`);
    }

    for (let value = start; value <= end; value += step) {
      values.add(value);
    }
  };

  segments.forEach((segment) => {
    const trimmed = segment.trim();
    if (!trimmed) {
      throw new Error(`Invalid cron field segment "${field}".`);
    }

    if (trimmed === '*') {
      addRange(min, max, 1);
      return;
    }

    const [base, stepPart] = trimmed.split('/');
    const step = stepPart ? Number(stepPart) : 1;

    if (Number.isNaN(step) || step < 1) {
      throw new Error(`Invalid cron step "${trimmed}".`);
    }

    if (base === '*') {
      addRange(min, max, step);
      return;
    }

    if (base.includes('-')) {
      const [start, end] = base.split('-').map(Number);
      if (Number.isNaN(start) || Number.isNaN(end)) {
        throw new Error(`Invalid cron range "${trimmed}".`);
      }
      addRange(start, end, step);
      return;
    }

    const single = Number(base);
    if (Number.isNaN(single) || single < min || single > max) {
      throw new Error(`Invalid cron value "${trimmed}".`);
    }
    values.add(single);
  });

  return values;
}

function getNextCronOccurrences(expression: string, count: number) {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) {
    throw new Error('Cron expression must have 5 fields: minute hour day month weekday.');
  }

  const [minuteField, hourField, dayField, monthField, weekDayField] = parts;
  const minutes = parseCronField(minuteField, 0, 59);
  const hours = parseCronField(hourField, 0, 23);
  const days = parseCronField(dayField, 1, 31);
  const months = parseCronField(monthField, 1, 12);
  const weekDays = parseCronField(weekDayField, 0, 6);

  const now = new Date();
  const cursor = new Date(now);
  cursor.setSeconds(0, 0);
  cursor.setMinutes(cursor.getMinutes() + 1);

  const matches: Date[] = [];

  while (matches.length < count) {
    if (
      minutes.has(cursor.getMinutes()) &&
      hours.has(cursor.getHours()) &&
      days.has(cursor.getDate()) &&
      months.has(cursor.getMonth() + 1) &&
      weekDays.has(cursor.getDay())
    ) {
      matches.push(new Date(cursor));
    }

    cursor.setMinutes(cursor.getMinutes() + 1);

    if (cursor.getFullYear() - now.getFullYear() > 5) {
      break;
    }
  }

  return matches;
}

function describeFieldValue(field: string, singular: string, plural: string) {
  if (field === '*') {
    return `every ${singular}`;
  }

  if (/^\*\/\d+$/.test(field)) {
    return `every ${field.split('/')[1]}th ${singular}`;
  }

  if (/^\d+$/.test(field)) {
    return `${singular} ${field}`;
  }

  if (/^\d+-\d+$/.test(field)) {
    const [start, end] = field.split('-');
    return `${singular}s ${start} through ${end}`;
  }

  if (/^\d+(,\d+)+$/.test(field)) {
    return `${plural} ${field.split(',').join(', ')}`;
  }

  return `${singular} ${field}`;
}

function describeCronExpression(expression: string) {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) {
    throw new Error('Cron expression must have 5 fields: minute hour day month weekday.');
  }

  const [minute, hour, day, month, weekday] = parts;

  if (minute === '*' && hour === '*' && day === '*' && month === '*' && weekday === '*') {
    return 'Runs every minute.';
  }

  if (/^\*\/\d+$/.test(minute) && hour === '*' && day === '*' && month === '*' && weekday === '*') {
    return `Runs every ${minute.split('/')[1]} minutes.`;
  }

  if (/^\d+$/.test(minute) && hour === '*' && day === '*' && month === '*' && weekday === '*') {
    return `Runs at minute ${minute} of every hour.`;
  }

  if (/^\d+$/.test(minute) && /^\d+$/.test(hour) && day === '*' && month === '*' && weekday === '*') {
    return `Runs every day at ${hour.padStart(2, '0')}:${minute.padStart(2, '0')}.`;
  }

  const timePart = (() => {
    if (minute === '*' && /^\*\/\d+$/.test(hour)) {
      return `At every minute past ${describeFieldValue(hour, 'hour', 'hours')}.`;
    }

    if (minute === '*' && /^\d+$/.test(hour)) {
      return `At every minute during hour ${hour}.`;
    }

    if (/^\*\/\d+$/.test(minute) && /^\*\/\d+$/.test(hour)) {
      return `Every ${minute.split('/')[1]} minutes past ${describeFieldValue(hour, 'hour', 'hours')}.`;
    }

    if (/^\d+$/.test(minute) && /^\*\/\d+$/.test(hour)) {
      return `At minute ${minute} past ${describeFieldValue(hour, 'hour', 'hours')}.`;
    }

    return `At ${describeFieldValue(minute, 'minute', 'minutes')} past ${describeFieldValue(hour, 'hour', 'hours')}.`;
  })();

  const dateParts: string[] = [];

  if (day !== '*') {
    dateParts.push(`on ${describeFieldValue(day, 'day', 'days')}`);
  }

  if (month !== '*') {
    dateParts.push(`in ${describeFieldValue(month, 'month', 'months')}`);
  }

  if (weekday !== '*') {
    dateParts.push(`on ${describeFieldValue(weekday, 'weekday', 'weekdays')}`);
  }

  if (!dateParts.length) {
    return `${timePart} Every day.`;
  }

  return `${timePart} ${dateParts.join(', ')}.`;
}

function fieldClassName() {
  return 'min-h-[180px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent';
}

export default function ToolsWorkspace() {
  const [activeTool, setActiveTool] = useState<ToolKey>('base64');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [base64Input, setBase64Input] = useState('');
  const [base64Output, setBase64Output] = useState('');
  const [base64Error, setBase64Error] = useState('');

  const [aesInput, setAesInput] = useState('');
  const [aesPassphrase, setAesPassphrase] = useState('');
  const [aesSalt, setAesSalt] = useState('');
  const [aesIv, setAesIv] = useState('');
  const [aesIterations, setAesIterations] = useState('2000');
  const [aesOutput, setAesOutput] = useState('');
  const [aesError, setAesError] = useState('');

  const [formatterMode, setFormatterMode] = useState<FormatterMode>('json');
  const [formatterInput, setFormatterInput] = useState('');
  const [formatterOutput, setFormatterOutput] = useState('');
  const [formatterError, setFormatterError] = useState('');

  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeDigits, setIncludeDigits] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordSeedWord, setPasswordSeedWord] = useState('');
  const [passwordOutput, setPasswordOutput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [cronInput, setCronInput] = useState('*/15 * * * *');
  const cronPreview = useMemo(() => {
    try {
      return {
        error: '',
        description: describeCronExpression(cronInput),
        occurrences: getNextCronOccurrences(cronInput, 10),
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Invalid cron expression.',
        description: '',
        occurrences: [] as Date[],
      };
    }
  }, [cronInput]);

  const activeToolMeta = toolTabs.find((tool) => tool.key === activeTool)!;

  const handleBase64Encode = () => {
    try {
      setBase64Error('');
      setBase64Output(toBase64(base64Input));
    } catch (error) {
      setBase64Error(error instanceof Error ? error.message : 'Failed to encode text.');
    }
  };

  const handleBase64Decode = () => {
    try {
      setBase64Error('');
      setBase64Output(fromBase64(base64Input));
    } catch {
      setBase64Error('Input is not valid Base64.');
    }
  };

  const handleAesEncrypt = async () => {
    try {
      if (!aesPassphrase.trim()) {
        throw new Error('Passphrase is required.');
      }

      const iterations = Number(aesIterations);
      if (!Number.isInteger(iterations) || iterations < 1000) {
        throw new Error('Iterations must be an integer greater than or equal to 1000.');
      }

      const encoder = new TextEncoder();
      const saltText = aesSalt.trim() || createRandomPlainString(16);
      const ivText = aesIv.trim() || createRandomPlainString(16);
      const salt = encoder.encode(saltText);
      const iv = encoder.encode(ivText);

      if (salt.length < 8) {
        throw new Error('Salt must be at least 8 characters long.');
      }

      if (iv.length < 12) {
        throw new Error('IV must be at least 12 characters long.');
      }

      const baseKey = await crypto.subtle.importKey('raw', encoder.encode(aesPassphrase), 'PBKDF2', false, ['deriveKey']);
      const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt']
      );

      const cipherBuffer = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoder.encode(aesInput));

      const payload = JSON.stringify(
        {
          salt: saltText,
          iv: ivText,
          iterations,
          ciphertext: bytesToBase64(new Uint8Array(cipherBuffer)),
        },
        null,
        2
      );

      setAesError('');
      setAesSalt(saltText);
      setAesIv(ivText);
      setAesOutput(payload);
    } catch (error) {
      setAesError(error instanceof Error ? error.message : 'Encryption failed.');
    }
  };

  const handleAesDecrypt = async () => {
    try {
      if (!aesPassphrase.trim()) {
        throw new Error('Passphrase is required.');
      }

      const payload = JSON.parse(aesInput) as {
        salt?: string;
        iv?: string;
        iterations?: number;
        ciphertext: string;
      };

      const saltText = payload.salt ?? aesSalt.trim();
      const ivText = payload.iv ?? aesIv.trim();
      const iterations = Number(payload.iterations ?? aesIterations);

      if (!saltText || !ivText) {
        throw new Error('Salt and IV are required to decrypt.');
      }

      if (!Number.isInteger(iterations) || iterations < 1000) {
        throw new Error('Iterations must be an integer greater than or equal to 1000.');
      }

      const encoder = new TextEncoder();
      const salt = encoder.encode(saltText);
      const iv = encoder.encode(ivText);
      const ciphertext = base64ToBytes(payload.ciphertext);

      const baseKey = await crypto.subtle.importKey('raw', encoder.encode(aesPassphrase), 'PBKDF2', false, ['deriveKey']);
      const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );

      const plainBuffer = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);

      setAesError('');
      setAesSalt(saltText);
      setAesIv(ivText);
      setAesIterations(String(iterations));
      setAesOutput(new TextDecoder().decode(plainBuffer));
    } catch (error) {
      setAesError(error instanceof Error ? error.message : 'Decryption failed.');
    }
  };

  const handleFormat = () => {
    try {
      let formatted = formatterInput;

      if (formatterMode === 'json') {
        formatted = JSON.stringify(JSON.parse(formatterInput), null, 2);
      } else if (formatterMode === 'xml') {
        formatted = formatXml(formatterInput);
      } else {
        formatted = formatSql(formatterInput);
      }

      setFormatterError('');
      setFormatterOutput(formatted);
    } catch (error) {
      setFormatterError(error instanceof Error ? error.message : 'Formatting failed.');
    }
  };

  const handleGeneratePassword = () => {
    try {
      setPasswordError('');
      setPasswordOutput(
        createPassword({
          length: passwordLength,
          uppercase: includeUppercase,
          lowercase: includeLowercase,
          digits: includeDigits,
          symbols: includeSymbols,
          seedWord: passwordSeedWord,
        })
      );
    } catch (error) {
      setPasswordError(error instanceof Error ? error.message : 'Password generation failed.');
    }
  };

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="mb-10 rounded-[32px] border border-white/10 bg-slate-950/75 p-8 shadow-[0_30px_80px_rgba(2,12,27,0.55)] backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">Utility Workspace</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: 'var(--text-color)' }}>
              Quick tools on a dedicated page.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
              This page keeps the main portfolio clean while giving you fast access to practical developer tools for
              encoding, encryption, formatting, password generation, and cron inspection.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSidebarOpen((current) => !current)}
            className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
          >
            {sidebarOpen ? 'Close Tools' : 'Open Tools'}
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <div className="mb-6 rounded-[28px] border border-white/10 bg-slate-950/85 p-4 shadow-[0_30px_80px_rgba(2,12,27,0.45)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-sm text-accent">Tools</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Choose a workspace</h2>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
            >
              Hide
            </button>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {toolTabs.map((tool) => (
              <button
                key={tool.key}
                type="button"
                onClick={() => {
                  setActiveTool(tool.key);
                  setSidebarOpen(false);
                }}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                  activeTool === tool.key
                    ? 'border-accent bg-accent-light text-white'
                    : 'border-white/10 bg-transparent text-slate-300 hover:border-accent/60 hover:bg-white/5'
                }`}
              >
                <div className="text-sm font-semibold">{tool.title}</div>
                <div className="mt-2 text-xs leading-5 text-slate-400">{tool.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-[28px] border border-white/10 bg-slate-950/75 p-6 shadow-[0_30px_80px_rgba(2,12,27,0.45)] backdrop-blur-xl md:p-8">
          <div className="mb-8">
            <p className="font-mono text-sm text-accent">{activeToolMeta.title}</p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">{activeToolMeta.description}</p>
          </div>

          {activeTool === 'base64' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-color)' }}>Base64 Encode / Decode</h2>
                <p className="mt-2 text-sm text-slate-400">Paste text or a Base64 string and convert it in either direction.</p>
              </div>
              <textarea className={fieldClassName()} value={base64Input} onChange={(event) => setBase64Input(event.target.value)} placeholder="Enter text or Base64 here..." />
              <div className="flex flex-wrap gap-3">
                <button onClick={handleBase64Encode} className="rounded-full border border-accent px-5 py-2 text-sm text-accent hover:bg-accent-light">Encode</button>
                <button onClick={handleBase64Decode} className="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-200 hover:border-accent/60 hover:bg-white/5">Decode</button>
              </div>
              {base64Error && <p className="text-sm text-rose-400">{base64Error}</p>}
              <textarea className={fieldClassName()} value={base64Output} readOnly placeholder="Result..." />
            </div>
          )}

          {activeTool === 'aes' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-color)' }}>AES Encrypt / Decrypt</h2>
                <p className="mt-2 text-sm text-slate-400">Encrypt or decrypt with explicit passphrase, salt, IV, and iteration settings. Salt and IV are plain strings now.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="password"
                  value={aesPassphrase}
                  onChange={(event) => setAesPassphrase(event.target.value)}
                  placeholder="Passphrase"
                  className={inputClassName()}
                />
                <input
                  type="text"
                  value={aesIterations}
                  onChange={(event) => setAesIterations(event.target.value)}
                  placeholder="PBKDF2 iterations"
                  className={inputClassName()}
                />
                <input
                  type="text"
                  value={aesSalt}
                  onChange={(event) => setAesSalt(event.target.value)}
                  placeholder="Salt as plain string"
                  className={inputClassName()}
                />
                <input
                  type="text"
                  value={aesIv}
                  onChange={(event) => setAesIv(event.target.value)}
                  placeholder="IV as plain string"
                  className={inputClassName()}
                />
              </div>
              <textarea className={fieldClassName()} value={aesInput} onChange={(event) => setAesInput(event.target.value)} placeholder="Enter plain text to encrypt or an AES payload JSON to decrypt..." />
              <div className="flex flex-wrap gap-3">
                <button onClick={handleAesEncrypt} className="rounded-full border border-accent px-5 py-2 text-sm text-accent hover:bg-accent-light">Encrypt</button>
                <button onClick={handleAesDecrypt} className="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-200 hover:border-accent/60 hover:bg-white/5">Decrypt</button>
                <button
                  onClick={() => {
                    setAesSalt(createRandomPlainString(16));
                    setAesIv(createRandomPlainString(16));
                  }}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-200 hover:border-accent/60 hover:bg-white/5"
                >
                  Generate Salt / IV
                </button>
              </div>
              {aesError && <p className="text-sm text-rose-400">{aesError}</p>}
              <textarea className={fieldClassName()} value={aesOutput} readOnly placeholder="Encrypted payload or decrypted text..." />
            </div>
          )}

          {activeTool === 'formatter' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-color)' }}>Formatter</h2>
                <p className="mt-2 text-sm text-slate-400">Quick formatting for JSON, SQL, and XML without leaving the page.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {(['json', 'sql', 'xml'] as FormatterMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setFormatterMode(mode)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      formatterMode === mode ? 'border-accent text-accent bg-accent-light' : 'border-white/15 text-slate-200 hover:border-accent/60 hover:bg-white/5'
                    }`}
                  >
                    {mode.toUpperCase()}
                  </button>
                ))}
              </div>
              <textarea className={fieldClassName()} value={formatterInput} onChange={(event) => setFormatterInput(event.target.value)} placeholder={`Paste ${formatterMode.toUpperCase()} here...`} />
              <button onClick={handleFormat} className="rounded-full border border-accent px-5 py-2 text-sm text-accent hover:bg-accent-light">Format</button>
              {formatterError && <p className="text-sm text-rose-400">{formatterError}</p>}
              <textarea className={fieldClassName()} value={formatterOutput} readOnly placeholder="Formatted output..." />
            </div>
          )}

          {activeTool === 'password' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-color)' }}>Random Password Generator</h2>
                <p className="mt-2 text-sm text-slate-400">Control exactly what the password includes, and optionally seed it with a word that gets mutated into password-style text like d3v!l.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <input
                  type="text"
                  value={passwordSeedWord}
                  onChange={(event) => setPasswordSeedWord(event.target.value)}
                  placeholder="Optional seed word, for example: devil"
                  className="mb-5 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent"
                />
                <label className="mb-3 block text-sm text-slate-300">
                  Length: <span className="font-semibold text-white">{passwordLength}</span>
                </label>
                <input
                  type="range"
                  min={8}
                  max={64}
                  value={passwordLength}
                  onChange={(event) => setPasswordLength(Number(event.target.value))}
                  className="w-full accent-[#38bdf8]"
                />
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Uppercase', includeUppercase, setIncludeUppercase],
                    ['Lowercase', includeLowercase, setIncludeLowercase],
                    ['Digits', includeDigits, setIncludeDigits],
                    ['Symbols', includeSymbols, setIncludeSymbols],
                  ].map(([label, checked, setter]) => (
                    <label key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200">
                      <input
                        type="checkbox"
                        checked={checked as boolean}
                        onChange={(event) => (setter as React.Dispatch<React.SetStateAction<boolean>>)(event.target.checked)}
                        className="h-4 w-4 accent-[#38bdf8]"
                      />
                      {label as string}
                    </label>
                  ))}
                </div>
              </div>
              <button onClick={handleGeneratePassword} className="rounded-full border border-accent px-5 py-2 text-sm text-accent hover:bg-accent-light">Generate Password</button>
              {passwordError && <p className="text-sm text-rose-400">{passwordError}</p>}
              <textarea className={fieldClassName()} value={passwordOutput} readOnly placeholder="Generated password..." />
            </div>
          )}

          {activeTool === 'cron' && (
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold" style={{ color: 'var(--text-color)' }}>Cron Expression Tool</h2>
                <p className="mt-2 text-sm text-slate-400">Use a 5-field cron expression and preview the next 10 local execution times.</p>
              </div>
              <input
                type="text"
                value={cronInput}
                onChange={(event) => setCronInput(event.target.value)}
                className={inputClassName()}
                placeholder="*/15 * * * *"
              />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Fields: minute hour day month weekday</p>
                {cronPreview.error ? (
                  <p className="mt-4 text-sm text-rose-400">{cronPreview.error}</p>
                ) : (
                  <>
                    <div className="mt-4 rounded-2xl border border-accent/30 bg-accent-light px-4 py-3 text-sm text-slate-100">
                      {cronPreview.description}
                    </div>
                    <div className="mt-4 space-y-3">
                      {cronPreview.occurrences.map((occurrence, index) => (
                        <div key={`${occurrence.toISOString()}-${index}`} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-200">
                          {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          }).format(occurrence)}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
      </div>
    </section>
  );
}

function inputClassName() {
  return 'w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent';
}
