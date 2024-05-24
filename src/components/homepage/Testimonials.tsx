import React from "react";

const testimonials = [
  [
    [
      {
        body: "With Elastic Path, we’re able to make product configurations that can withstand the volume of permutations needed, and that’s integral to our business.",
        author: {
          name: "Cat Stineman",
          handle: "VP, eCommerce",
        },
      },
      {
        body: "Elastic Path empowered us to explore new revenue opportunities with their simple yet flexible commerce platform.",
        author: {
          name: "Kody Meyers",
          handle: "CTO",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Product Experience Manager has made it more seamless for our team to launch new products, make changes, and update our merchandising strategy.",
        author: {
          name: "Donna Quinlan Felix",
          handle: "Head of Product",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "When it came to choosing a composable commerce partner, Elastic Path stood out. It felt like Elastic Path wanted to walk the journey with us to create experiences that delight our customers and drive revenue.",
        author: {
          name: "Velinda Cox",
          handle: "VP, eCommerce",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "We selected Elastic Path because we believe in the same thing: innovating our business together. Having a partner who truly believes in what you are looking to create is the best partner out there.",
        author: {
          name: "Rebecca Hicks",
          handle: "Product Manager",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Our merchandising and marketing teams feel more in control of their destiny and the company’s performance. We no longer have to rely on IT for many aspects of what we want to optimize and improve with our sites.",
        author: {
          name: "Gord Elder",
          handle: "Vice President",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Never have I come across a company that so thoughtfully, consistently, and gracefully delivers on the intention behind the concept of ‘client success’ as Elastic Path.",
        author: {
          name: "Frank Ricciardi",
          handle: "CEO",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "We wanted a more modern architecture that would allow us to be more nimble as a team, both from a development standpoint and a site merchandiser perspective. We feel confident that Elastic Path helps us reach that goal.",
        author: {
          name: "Cat Stineman",
          handle: "VP, eCommerce",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          <h2 className="text-[3rem] font-semibold leading-12 tracking-tight text-left text-white">
            What our customers <br /> are saying...
          </h2>
          <button className="bg-transparent tracking-tight rounded-full ring-2 ring-gray-300 py-2 px-4 hover:ring-green-500 transition-all border-0 text-xs font-semibold">
            View case studies
          </button>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8 flex flex-col justify-end",
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 m-0"
                    >
                      <blockquote className="text-gray-900 border-none p-0">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        {testimonial.author.imageUrl && (
                          <img
                            className="h-10 w-10 rounded-full bg-gray-50"
                            src={testimonial.author.imageUrl}
                            alt=""
                          />
                        )}

                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
