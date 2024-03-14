import { Link, Outlet } from "react-router-dom";
import SvgIcon from "../utils/SvgIcon";

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 w-full h-16 bg-slate-800 z-[1000]">
        <div className="flex h-full w-full justify-between items-center px-6">
          <span className="text-white text-lg">Movie Finder</span>
          <Link
            to={"/bookmarks"}
            className="bg-white hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-md text-black"
          >
            <SvgIcon name="bookmark" weight={2} size={22} color="black" />
            Bookmarks
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
