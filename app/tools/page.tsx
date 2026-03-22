import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SpotlightEffect from '@/components/SpotlightEffect';
import ToolsWorkspace from '@/components/ToolsWorkspace';

export const metadata: Metadata = {
  title: 'Tools | Sunny Chauhan',
  description: 'Quick developer tools for encoding, encryption, formatting, password generation, and cron previews.',
};

export default function ToolsPage() {
  return (
    <>
      <SpotlightEffect />
      <Navbar />
      <ToolsWorkspace />
      <Footer />
    </>
  );
}
