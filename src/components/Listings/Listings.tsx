import { Category } from "@prisma/client";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Listings({ category }) {
  let count = 0;
  let listings = category.Listing.map((listing) => {
    count++;
    if (count <= 4) return listing;
  });

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {category.name}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {listings.map(
          (listing) =>
            listing && (
              <div key={listing.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={listing.imageSrc}
                    alt={listing.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={listing.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {listing.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {listing.price}
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
