import React from 'react';
import Link from '@docusaurus/Link';

import { Linkedin, Twitter } from 'react-feather';
import { DiscordIcon } from '@site/src/icons';

const githubUsernames = [
  'cheeryfella',
  'steve-r-west',
  'rostyk-kanafotskyy',
  'jbrockmeyer',
  'long-wan-ep',
  'samblacklock',
  'yasiloghmani',
  'cjmarkham',
  'mwan-ep',
  'dazadep',
  'madhugb',
  'gdenning',
  'field123',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links pt-16">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gray-900 px-4 py-16 text-white">
        <h2 className="text-3xl">
          Join the <span className="text-primary-100">Elastic Path</span> community
        </h2>
        <p className="mb-10 text-zinc-500">
          Engage with our ever-growing community to get the latest updates,
          product support, and more.
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=60`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://twitter.com/elasticpath"
          >
            <Twitter className="h-5 w-5" /> Twitter &rarr;
          </Link>
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://www.linkedin.com/company/elastic-path"
          >
            <Linkedin className="h-5 w-5" /> LinkedIn &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
