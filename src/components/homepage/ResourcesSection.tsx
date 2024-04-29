import Link from '@docusaurus/Link';
import React, { useState } from 'react';
import clsx from 'clsx';
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from '@fluentui/react-icons';

interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

const ALL_RESOURCES: Resource[] = [
  {
    url: 'https://www.elasticpath.com/blog/composable-commerce-power-unplatform',
    type: 'blog',
    title: 'How Composable Commerce Can Power Your Unplatform',
    description:
      'The commerce landscape is undergoing a significant transformation from complex, comprehensive, multi-year replatforming projects , to modular, initiative-specific projects that focus on achieving business objectives iteratively.',
    image:
      'https://elastic-path.transforms.svdcdn.com/production/images/Blog-Hero-Meta-Images/How-Composable-Commerce-Can-Power-Your-Unplatform.png?w=1950&h=1098&q=90&fm=webp&fit=crop&dm=1695705436&s=531fee1f0e74bdae6cde9075525be534',
    duration: '3 min',
  },
  {
    url: 'https://www.elasticpath.com/blog/holiday-merchandising',
    type: 'blog',
    title: 'Deliver your best-performing holiday season with smart merchandising tactics from Elastic Path',
    description:
      "Record-setting online sales over Thanksgiving weekend indicate that this holiday season holds promise for merchandisers. But success with digital holiday sales is far from guaranteed, as capturing consumers’ attention in a crowded market is more difficult than ever before.",
    image:
      'https://elastic-path.transforms.svdcdn.com/production/images/Blog-Hero-Meta-Images/DALL%C2%B7E-2023-12-01-16.26.13-A-festive-e-commerce-storefront-design-for-the-Christmas-holiday-season-using-the-green-and-black-color-scheme-of-Elastic-Path.-The-storefront-should.png?w=1950&h=1098&q=90&fm=webp&fit=crop&dm=1701467097&s=1bd9e013ad40674f025c85a7d1a3733a',
    duration: '5 min',
  },
  {
    url: 'https://www.youtube.com/watch?v=ChemHx85d3E',
    type: 'video',
    title: 'What is Composable Commerce?',
    description:
      'Composable Commerce is a modern approach to ecommerce where teams are empowered to assemble best-of-breed commerce solution to fit their exact business requirements.',
    image: 'https://img.youtube.com/vi/ChemHx85d3E/hqdefault.jpg',
    duration: '5 min',
  },
];

function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link
      className="fade-in group flex flex-col justify-between"
      key={title}
      href={url}
    >
      <div>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
          {title}
        </h3>
        <p className="leading-snug text-text-400">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-text-400">
          {`${duration} ${type === 'Video' ? 'watch' : 'read'}`}
        </div>
      </div>
    </Link>
  );
}

export default function ResourcesSection() {
  const [page, setPage] = useState(1);
  const [activeType, setActiveType] = useState<'all' | 'blog' | 'video'>('all');

  const resources =
    activeType === 'all'
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  const currentResources = resources.slice((page - 1) * 3, page * 3);

  const pages = Math.ceil(resources.length / 3);

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="no-underline-links my-20 px-6 bg-gradient-to-tr from-emerald-800  via-primary/30 to-purple-950">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <span className="docs-badge">RESOURCES</span>
            <h2 className="mb-6 text-4xl">Want to know more?</h2>
          </div>
          <Link
            to="https://www.elasticpath.com/blog"
            className="font-jakarta text-sm font-semibold text-primary"
          >
            All Blogs <ArrowRightFilled className="ml-1" />
          </Link>
        </div>

        <div className="mb-6 inline-flex gap-1 rounded-lg bg-secondary-700 p-2 font-jakarta text-sm font-semibold dark:bg-secondary-700">
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'all' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('all')}
          >
            All
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'blog' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('blog')}
          >
            Blogs
          </button>
          <button
            className={clsx(
              'rounded-lg px-4 py-2 transition-colors',
              activeType === 'video' &&
                'bg-zinc-700 text-white dark:bg-zinc-200 dark:text-black'
            )}
            onClick={() => setActiveType('video')}
          >
            Videos
          </button>
        </div>

        <div className="relative flex flex-col">
          <div className="no-underline-links grid grid-cols-3 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          <div className="my-10 ml-auto flex items-center justify-center md:my-0">
            <button
              onClick={prevPage}
              className="top-1/2 -left-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronLeftRegular className="h-6 w-6" />
            </button>

            <button
              onClick={nextPage}
              className="top-1/2 -right-14 rounded-lg bg-transparent p-1 hover:bg-secondary-800 md:absolute md:-translate-y-1/2"
            >
              <ChevronRightRegular className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
