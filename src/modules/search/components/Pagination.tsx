import { useState } from "react";
import { GENERAL_COTENT } from "../../../content/general";
interface propTypes {
  total: number;
  size: number;
  page: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  page,
  total,
  size,
  onPageChange,
}: propTypes) {
  const [lastPage] = useState(Math.ceil(total / size));
  const [currentPage, setCurrentPage] = useState(page || 1);

  const changeHandler = (event: any) => {
    if (Number(event.target.innerHTML) == event.target.innerHTML) {
      setCurrentPage(Number(event.target.innerHTML));
      onPageChange && onPageChange(Number(event.target.innerHTML));
    } else {
      if (event.target.ariaLabel === "prev") {
        setCurrentPage(currentPage - 1);
        onPageChange && onPageChange(currentPage - 1);
      } else if (event.target.ariaLabel === "next") {
        setCurrentPage(currentPage + 1);
        onPageChange && onPageChange(currentPage + 1);
      }
    }
  };
  return (
    <div className="flex flex-row justify-center align-center my-5">
      <nav aria-label="Page navigation blog-pagianation">
        <ul className="list-style-none flex gap-2" onClick={changeHandler}>
          {currentPage != 1 && (
            <li>
              <span
                aria-label="prev"
                className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-md text-neutral-500 transition-all duration-300 hover:bg-neutral-200"
              >
                {GENERAL_COTENT.PREV}
              </span>
            </li>
          )}
          {currentPage >= 3 && (
            <li>
              <span className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 h-[30px] w-[30px] text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                1
              </span>
            </li>
          )}
          {currentPage - 3 >= 1 && (
            <li className="text-gray-400 text-sm mt-1">...</li>
          )}
          {currentPage > 1 && (
            <li>
              <span className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 h-[30px] w-[30px] text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                {currentPage - 1}
              </span>
            </li>
          )}
          <li>
            <span className="cursor-pointer relative block rounded-full bg-orange-600 text-white h-[30px] w-[30px] text-sm font-medium transition-all duration-300 flex flex-row items-center justify-center">
              {currentPage}
            </span>
          </li>
          {currentPage < lastPage && (
            <li>
              <span className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 h-[30px] w-[30px] text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                {currentPage + 1}
              </span>
            </li>
          )}
          {currentPage + 1 < lastPage && (
            <li className="text-gray-400 text-md mt-1">...</li>
          )}
          {currentPage != lastPage && (
            <li>
              <span className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 h-[30px] w-[30px] text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-200  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                {lastPage}
              </span>
            </li>
          )}
          {currentPage != lastPage && (
            <li>
              <span
                aria-label="next"
                className="cursor-pointer relative block rounded-full bg-transparent px-3 py-1.5 text-md text-neutral-500 transition-all hover:bg-neutral-200 duration-300 dark:text-neutral-400"
              >
                 {GENERAL_COTENT.NEXT}
              </span>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
