import { Metadata } from 'next';
import { siteConfig } from '../lib/seo.config';

export const metadata: Metadata = {
  title: 'Chat Interface',
  description: 'Interact with JARVIS AI assistant. Upload PDFs, ask questions, get weather updates, convert currencies, and search the web - all in one intelligent conversation.',
  openGraph: {
    title: 'Chat with JARVIS 0.5',
    description: 'AI-powered chatbot with document analysis and real-time tools',
    url: `${siteConfig.url}/chat`,
    images: [siteConfig.ogImage],
  },
};