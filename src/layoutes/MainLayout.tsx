import { Link, Outlet, useLocation } from "react-router-dom";
import SvgIcon from "../utils/SvgIcon";
import { BOOKMARKS_CONTENT } from "../content/bookmarksPage";
import { SEARCH_PAGE_CONTENT } from "../content/searchPage";
import { GENERAL_COTENT } from "../content/general";

const MainLayout = () => {
  const router = useLocation();
  return (
    <>
      <div className="fixed top-0 w-full h-16 bg-slate-800 z-[1000]">
        <div className="flex h-full w-full justify-between items-center container">
          <span className="text-white md:text-[30px]">
            {GENERAL_COTENT.MAIN_TITLE}
          </span>
          <div className="flex gap-2">
            {/* if the page is not search page  */}
            {router.pathname.length > 1 && (
              <Link
                to={"/"}
                className="bg-white hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-md text-black text-xs md:text-md"
              >
                <SvgIcon name="chevron-left" size={20} weight={3} />
                {SEARCH_PAGE_CONTENT.SEARCH_BTN}
              </Link>
            )}
             {/* if the page is not bookmark page  */}
            {!router.pathname.includes("bookmarks") && (
              <Link
                to={"/bookmarks"}
                className="bg-white hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-md text-black text-xs md:text-md"
              >
                <SvgIcon name="bookmark" weight={2} size={22} color="black" />
                {BOOKMARKS_CONTENT.TITLE}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="container pt-2"></div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
