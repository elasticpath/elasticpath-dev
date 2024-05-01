import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';

export default function Integrations() {
    return (
        <section className="no-underline-links px-4 pt-16 lg:py-0 flex flex-row max-w-6xl">
                <div>
                    <ThemedImage
                        sources={{
                            light: '/icons/homepage/integrations.svg',
                            dark: '/icons/homepage/integrations.svg',
                        }}
                        alt="Over 30+ Pre-Built Integrations"
                        loading="lazy"
                    />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl dark:text-black pb-6">
                        Get Started Today
                    </h1>
                    <h1 className="text-4xl dark:text-black pb-6">
                        Get Started Today
                    </h1>
                    <Link
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-black hover:bg-primary-100 px-6 py-3 text-white lg:w-auto"
                        href="https://demo.elasticpath.com/"
                    >Start Free Trial</Link>
                </div>
        </section>
    );
}
