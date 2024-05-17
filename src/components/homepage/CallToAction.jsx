import React from 'react';
import Link from '@docusaurus/Link';

export default function CallToAction() {
    return (
        <section className="no-underline-links">
            <div className="mx-auto flex w-full flex-col items-center justify-center bg-gray-950/60 px-4 py-16">
                <h1 className="text-4xl text-white pb-6">
                    Get Started Today
                </h1>
                <Link
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-100 hover:bg-primary-200 px-6 py-3 text-black lg:w-auto"
                    href="https://demo.elasticpath.com/"
                >Start Free Trial</Link>
            </div>
        </section>
    );
}
