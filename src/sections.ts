import type { ComponentProps, ReactNode } from 'react';
import {
  ReactIcon,
  JSIcon,
} from './icons';

export type Section = { docId: string } & (
  | {
    section: false;
  }
  | {
    section: string;
    icon: (props: ComponentProps<'svg'>) => ReactNode;
    name: string;
  }
);

const SECTIONS: Section[] = [
  {
    name: 'Getting Started',
    docId: 'getting-started',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'API Overview',
    docId: 'api-overview',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Authentication',
    docId: 'authentication',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Organizations',
    docId: 'organizations',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Team Management',
    docId: 'team-management',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Account Management',
    docId: 'accounts',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Addresses',
    docId: 'addresses',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Customer Management',
    docId: 'customer-management',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Product Experience Manager',
    docId: 'pxm',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Carts',
    docId: 'carts',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Checkout',
    docId: 'checkout',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Orders',
    docId: 'orders',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Payments',
    docId: 'payment',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Promotions',
    docId: 'promotions',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Shipping Groups',
    docId: 'shipping-groups',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Personal Data',
    docId: 'personal-data',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Custom Data',
    docId: 'custom-data',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Integrations',
    docId: 'integrations',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Composer',
    docId: 'composer',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Store Settings',
    docId: 'global-project-settings',
    icon: null,
    section: 'commerce-cloud',
  },
  {
    name: 'Analytics',
    docId: 'analytics',
    icon: null,
    section: 'commerce-cloud',
  },
];

export type SectionsGroup = {
  name: string;
  section: string;
  description?: string;
  className?: string;
};

const SECTION_GROUPS: SectionsGroup[][] = [
  [
    {
      name: 'Composable Commerce',
      section: 'commerce-cloud',
      description: 'Build your e-commerce experience',
    },
    {
      name: 'Self Managed Commerce',
      section: 'selfmanaged',
      description:
        'Self Hosted Commerce',
    },
  ],
];

export { SECTIONS, SECTION_GROUPS };
