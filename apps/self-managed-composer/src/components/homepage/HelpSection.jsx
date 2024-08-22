import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-8">
      <div
          className={clsx(
              'mx-auto max-w-8xl p-4 py-2 text-black dark:text-white',
              className
          )}
      >
        <h2 className="mb-12 text-center lg:text-3xl text-white">
          The support you need, the way you want it...
        </h2>
        <div className="text-center mb-12 text-white">Elastic Path is here to support you ever step of the way. From
          launch to business-as-usual, we are here to help.
        </div>
        <div className="max-w-4xl center lg:min-h-[200px]">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-lg p-6 bg-gray-950/50 text-white hover:bg-gray-950/80">
              <h3 className="my-3">Free Trial</h3>
              <p className="text-white">
                Don't have a store yet? Would you like a free trial?
              </p>
              <Link
                  href="https://demo.elasticpath.com/?site=Pure+Plants&action=Home"
                  className="text-primary dark:text-primary-100"
              >
                <button
                    className="bg-primary-100 hover:bg-primary-200 text-black border-0 font-semibold hover:text-white py-3 px-4 cursor-pointer rounded-full"> Get
                  Started &rarr;</button>
              </Link>
            </div>

            <div className="rounded-lg bg-gray-950/50 hover:bg-gray-950/80 p-6">
              <h3 className="my-3 text-white">Support</h3>
              <p className="text-white">
                Have an account? Our support team is here for you.
              </p>
              <Link
                  href="https://support.elasticpath.com"
                  className="text-primary dark:text-primary-200"
              >
                <button
                    className="bg-primary-100 hover:bg-primary-200 text-black border-0 font-semibold hover:text-white py-3 px-4 cursor-pointer rounded-full">Contact
                  Us &rarr;</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
