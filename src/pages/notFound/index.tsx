import { Link } from "react-router-dom";
import SvgIcon from "@/utils/SvgIcon";
import { SEARCH_PAGE_CONTENT } from "@/content/searchPage";
import { GENERAL_COTENT } from "@/content/general";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3">
      <span className="text-[30px] text-white">{GENERAL_COTENT.NOT_FOUND}</span>
      <Link
        to={"/"}
        className="bg-white hover:bg-gray-300 duration-300 cursor-pointer flex items-center justify-center gap-2 px-3 py-2 rounded-md text-black text-xs md:text-md"
      >
        <SvgIcon name="chevron-left" size={20} weight={3} />
        {SEARCH_PAGE_CONTENT.SEARCH_BTN}
      </Link>
    </div>
  );
};

export default NotFoundPage;
