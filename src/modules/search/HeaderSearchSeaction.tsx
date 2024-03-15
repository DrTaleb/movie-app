import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox";
import RandomBackground from "@/components/RandomBackground";
import { SEARCH_PAGE_CONTENT } from "@/content/searchPage";
const HeaderSearchSeaction = () => {

  const { isSearched } = useSelector((state: any) => state.search);

  return (
    <div
      className={`relative ${
        isSearched ? "h-[400px]" : "h-screen"
      } w-full bottom-inner-shadow duration-700	ease-in-out	`}
    >
      <RandomBackground />
      <div className="absolute w-full h-full z-1 flex flex-col items-start pt-28 md:pt-0 md:justify-center px-4 lg:ps-12 duration-700">
        <div className="w-full md:w-9/12 lg:w-7/12 2xl:w-5/12 flex flex-col duration-700">
          <h1 className="text-white text-[25px] md:text-[34px] mb-0 ">
            {SEARCH_PAGE_CONTENT.TITLE}
          </h1>
          <p
            className={`text-white text-[20px] duration-700	ease-in-out overflow-hidden max-h-full ${
              isSearched && "!max-h-0"
            }`}
          >
            {SEARCH_PAGE_CONTENT.DESCRIPTION}
          </p>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchSeaction;
