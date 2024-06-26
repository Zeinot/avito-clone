import { IoIosArrowForward } from "react-icons/io";
import { Category, Listing } from "@prisma/client"; 
import { Prisma } from "@prisma/client"; 
type CategoryWithListings = Prisma.CategoryGetPayload<{ include: { listings: true }; }>;
// interface Category {
//   name: string;
//   icon: string | null;
//   href: string;
//   countProducts: number;
//   bgColor: string | null;
// }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}


export default async function Categories({ categories } : {categories:any}) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">Categories</h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {categories.map((category) => (
          <li
            key={category.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div
              className={classNames(
                category.bgColor,
                "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
              )}
            >
              <img className="w-1/2" src={category.icon} />
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={category.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {category.name}
                </a>
                <p className="text-gray-500">
                  {category.Listing.length} Products
                </p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <IoIosArrowForward className="text-gray-500" />
                {/* <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
