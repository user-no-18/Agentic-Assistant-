export const siteConfig = {
  name: 'JARVIS 0.5',
  description: 'Intelligent AI assistant powered by LangChain and Groq. Upload PDFs, search the web, check weather, convert currencies, and get instant AI-powered answers.',
  url: 'https://custom-agent-ai-next-js-version.vercel.app',
  ogImage: 'https://custom-agent-ai-next-js-version.vercel.app/og-image.png',
  keywords: [
    'AI chatbot',
    'Custom AI agent',
    'LangChain',
    'Groq AI',
    'PDF analysis',
    'weather API',
    'currency converter',
    'web search AI',
    'intelligent assistant',
    'document analysis',
    'AI tools'
  ],
  creator: '@yourusername',
}

export const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'PDF Document Analysis',
    'Real-time Weather Information',
    'Currency Conversion',
    'Web Search Integration',
    'Wikipedia Knowledge Base',
    'News Search',
  ],
}