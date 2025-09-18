
import { Page } from './types';

export const NAV_LINKS = [
  { name: Page.Home, path: '#' },
  { name: Page.Partners, path: '#' },
  { name: Page.Customers, path: '#' },
  { name: Page.About, path: '#' },
  { name: Page.Contact, path: '#' },
];

export const SEO_DATA = {
  [Page.Home]: {
    title: 'Jiffy: 5-Minute Grocery Delivery & Kirana Empowerment',
    description: 'Jiffy revolutionizes your local Kirana store with full operational support and offers customers ultra-fast 5-minute grocery delivery.',
  },
  [Page.Partners]: {
    title: 'Partner with Jiffy | Digitize Your Kirana Store',
    description: 'Empower your Kirana shop with Jiffy\'s technology, supply chain, and delivery network. Focus on selling while we handle the rest.',
  },
  [Page.Customers]: {
    title: '5-Minute Grocery Delivery | Jiffy for Customers',
    description: 'Get your daily groceries from your trusted local Kirana store, delivered in just 5 minutes with Jiffy.',
  },
  [Page.About]: {
    title: 'About Jiffy | Empowering India\'s Retail Backbone',
    description: 'Learn about Jiffy\'s mission to merge the trust of local Kirana stores with the technology of tomorrow.',
  },
  [Page.Contact]: {
    title: 'Contact Jiffy | Get in Touch',
    description: 'Contact Jiffy for partnership inquiries or general questions. We\'re ready to help.',
  },
};
