import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import LearnWorkspace from '@/components/LearnWorkspace';
import Navbar from '@/components/Navbar';
import SpotlightEffect from '@/components/SpotlightEffect';

export const metadata: Metadata = {
  title: 'Learn | Sunny Chauhan',
  description: 'Capture LinkedIn learnings, classify them with AI, and keep smart notes without a database.',
};

export default function LearnPage() {
  return (
    <>
      <SpotlightEffect />
      <Navbar />
      <LearnWorkspace />
      <Footer />
    </>
  );
}
