import { IoIosArrowForward } from "react-icons/io";

interface Category {
  name: string;
  icon: string;
  href: string;
  countProducts: number;
  bgColor: string;
}

const categories: Category[] = [
  {
    name: "category 1",
    icon: "GA",
    href: "#",
    countProducts: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "category 2",
    icon: "CD",
    href: "#",
    countProducts: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "category 3",
    icon: "T",
    href: "#",
    countProducts: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "category 4",
    icon: "RC",
    href: "#",
    countProducts: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Categories() {
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
              {category.icon}
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
                  {category.countProducts} Products
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
