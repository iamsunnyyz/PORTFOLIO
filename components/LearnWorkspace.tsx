'use client';

import React, { useEffect, useMemo, useState } from 'react';

type LearnNote = {
  id: string;
  category: string;
  title: string;
  question: string;
  answer: string;
  createdAt: string;
};

const defaultCategories = [
  'System Design',
  'Java / Spring Boot',
  'Behavioral',
  'DSA / Patterns',
  'Roadmap',
  'General',
];

const notesStorageKey = 'learn-notes-v2';
const categoriesStorageKey = 'learn-categories-v2';

function inputClassName() {
  return 'w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent';
}

export default function LearnWorkspace() {
  const [categories, setCategories] = useState<string[]>(defaultCategories);
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategories[0]);
  const [notes, setNotes] = useState<LearnNote[]>([]);
  const [categoryPickerOpen, setCategoryPickerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formQuestion, setFormQuestion] = useState('');
  const [formAnswer, setFormAnswer] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const savedCategories = window.localStorage.getItem(categoriesStorageKey);
      const parsedCategories = savedCategories ? (JSON.parse(savedCategories) as string[]) : defaultCategories;
      const uniqueCategories = Array.from(new Set([...defaultCategories, ...parsedCategories.filter(Boolean)]));
      setCategories(uniqueCategories);
      setSelectedCategory(uniqueCategories[0] || defaultCategories[0]);

      const savedNotes = window.localStorage.getItem(notesStorageKey);
      if (savedNotes) {
        setNotes(JSON.parse(savedNotes) as LearnNote[]);
      }
    } catch {
      window.localStorage.removeItem(categoriesStorageKey);
      window.localStorage.removeItem(notesStorageKey);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(categoriesStorageKey, JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    window.localStorage.setItem(notesStorageKey, JSON.stringify(notes));
  }, [notes]);

  const selectedNotes = useMemo(() => {
    return notes
      .filter((note) => note.category === selectedCategory)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [notes, selectedCategory]);

  const totalQuestions = notes.length;
  const totalCategories = categories.length;

  const resetForm = () => {
    setFormTitle('');
    setFormQuestion('');
    setFormAnswer('');
    setNewCategory('');
    setShowNewCategoryInput(false);
    setError('');
  };

  const handleAddNote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resolvedCategory = showNewCategoryInput ? newCategory.trim() : selectedCategory;

    if (!resolvedCategory) {
      setError('Select a category or create a new one.');
      return;
    }

    if (!formQuestion.trim() || !formAnswer.trim()) {
      setError('Question and answer are required.');
      return;
    }

    let finalCategory = resolvedCategory;
    if (!categories.some((category) => category.toLowerCase() === resolvedCategory.toLowerCase())) {
      finalCategory = resolvedCategory;
      setCategories((current) => [...current, finalCategory]);
    }

    const generatedTitle = formTitle.trim() || formQuestion.trim().split('\n')[0].slice(0, 72) || 'Untitled Note';

    const nextNote: LearnNote = {
      id: crypto.randomUUID(),
      category: finalCategory,
      title: generatedTitle,
      question: formQuestion.trim(),
      answer: formAnswer.trim(),
      createdAt: new Date().toISOString(),
    };

    setNotes((current) => [nextNote, ...current]);
    setSelectedCategory(finalCategory);
    setModalOpen(false);
    resetForm();
  };

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="mb-10 rounded-[32px] border border-white/10 bg-slate-950/75 p-8 shadow-[0_30px_80px_rgba(2,12,27,0.55)] backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">Learn Workspace</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: 'var(--text-color)' }}>
              Build your own category-wise question bank.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">
              Add questions and answers manually, organize them into categories, create new categories whenever you need,
              and keep the reading experience focused on one collection at a time.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setCategoryPickerOpen((current) => !current)}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
            >
              {categoryPickerOpen ? 'Hide Categories' : 'Open Categories'}
            </button>
            <button
              type="button"
              onClick={() => {
                resetForm();
                setModalOpen(true);
              }}
              className="rounded-full border border-accent px-5 py-2.5 text-sm text-accent transition hover:bg-accent-light"
            >
              Add To {selectedCategory}
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-3xl font-semibold text-white">{String(totalQuestions).padStart(2, '0')}</div>
            <div className="mt-2 text-sm text-slate-400">Saved Questions</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-3xl font-semibold text-white">{String(totalCategories).padStart(2, '0')}</div>
            <div className="mt-2 text-sm text-slate-400">Available Categories</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-3xl font-semibold text-white">{String(selectedNotes.length).padStart(2, '0')}</div>
            <div className="mt-2 text-sm text-slate-400">Visible In Current Category</div>
          </div>
        </div>
      </div>

      {categoryPickerOpen && (
        <div className="mb-6 rounded-[28px] border border-white/10 bg-slate-950/85 p-4 shadow-[0_30px_80px_rgba(2,12,27,0.45)] backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-sm text-accent">Categories</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Browse collection</h2>
            </div>
            <button
              type="button"
              onClick={() => setCategoryPickerOpen(false)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
            >
              Hide
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => {
              const count = notes.filter((note) => note.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setCategoryPickerOpen(false);
                  }}
                  className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                    selectedCategory === category
                      ? 'border-accent bg-accent-light text-white'
                      : 'border-white/10 bg-transparent text-slate-300 hover:border-accent/60 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold">{category}</span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-slate-300">{count}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="rounded-[28px] border border-white/10 bg-slate-950/75 p-6 shadow-[0_30px_80px_rgba(2,12,27,0.45)] backdrop-blur-xl md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm text-accent">Reading View</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{selectedCategory}</h2>
          </div>
          {notes.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setNotes([]);
                setExpandedAnswers({});
              }}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-rose-400/40 hover:bg-rose-500/10"
            >
              Clear All Notes
            </button>
          )}
        </div>

        {selectedNotes.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-white/10 bg-white/[0.03] p-8 text-sm leading-7 text-slate-400">
            No entries yet in this category. Use the add button to create the first question and answer for this collection.
          </div>
        ) : (
          <div className="space-y-4">
            {selectedNotes.map((note) => {
              const isExpanded = expandedAnswers[note.id] || false;
              return (
                <article key={note.id} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{note.title}</h3>
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-300">{note.question}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setNotes((current) => current.filter((entry) => entry.id !== note.id))}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 transition hover:border-rose-400/40 hover:bg-rose-500/10"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedAnswers((current) => ({
                          ...current,
                          [note.id]: !current[note.id],
                        }))
                      }
                      className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent transition hover:bg-accent-light"
                    >
                      {isExpanded ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    <span className="text-xs text-slate-400">Saved {new Date(note.createdAt).toLocaleString()}</span>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 rounded-2xl border border-emerald-400/15 bg-emerald-500/10 p-4">
                      <p className="mb-2 text-sm font-semibold text-white">Answer</p>
                      <div className="whitespace-pre-wrap text-sm leading-7 text-slate-100">{note.answer}</div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 px-4 py-8 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 bg-slate-950/95 p-6 shadow-[0_30px_80px_rgba(2,12,27,0.55)] md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono text-sm text-accent">Add Question</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Add to {selectedCategory}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewCategoryInput((current) => !current)}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
                >
                  {showNewCategoryInput ? 'Use Selected Category' : 'Add New Category'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setModalOpen(false);
                    resetForm();
                  }}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
                >
                  Close
                </button>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleAddNote}>
              <input
                type="text"
                value={formTitle}
                onChange={(event) => setFormTitle(event.target.value)}
                placeholder="Optional short title"
                className={inputClassName()}
              />

              {showNewCategoryInput && (
                <input
                  type="text"
                  value={newCategory}
                  onChange={(event) => setNewCategory(event.target.value)}
                  placeholder="Create new category"
                  className={inputClassName()}
                />
              )}

              <textarea
                value={formQuestion}
                onChange={(event) => setFormQuestion(event.target.value)}
                placeholder="Question"
                className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent"
              />

              <textarea
                value={formAnswer}
                onChange={(event) => setFormAnswer(event.target.value)}
                placeholder="Answer"
                className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent"
              />

              {error && <p className="text-sm text-rose-400">{error}</p>}

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full border border-accent px-5 py-2 text-sm text-accent transition hover:bg-accent-light"
                >
                  Add To Collection
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-white/15 px-5 py-2 text-sm text-slate-200 transition hover:border-accent/60 hover:bg-white/5"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
