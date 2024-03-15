import { useDeferredValue, useEffect, useState } from "react";
import Input from "@/components/Input";
import Select from "@/components/Select";
import SvgIcon from "@/utils/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIsSearched,
  updateTitle,
  updateType,
} from "@/redux/searchSlice";
import { SEARCH_PAGE_CONTENT } from "@/content/searchPage";

const SearchBox = () => {
  const options = ["movie", "series", "episode"];

  const { term, searchResult } = useSelector((state: any) => state.search);

  const [value, setValue] = useState(term.title);
  const [openList, setOpenList] = useState(false);

  const deferredValue = useDeferredValue(value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle(deferredValue));
  }, [deferredValue]);

  useEffect(() => {
    value.length ? dispatch(updateIsSearched(true)) : null;
  }, [openList]);

  const [openRecommendeds, setOpenRecommendeds] = useState(false);

  return (
    <div className="relative bg-white w-full mt-5 rounded-lg flex flex-wrap md:flex-nowrap shadow-lg">
      <Input
        placeHolder={SEARCH_PAGE_CONTENT.TITLE_VALUE_PLACEHOLDER}
        error={openList && !value.length}
        className="w-full md:w-5/12 border-0 outline-0 rounded-none text-[20px] ps-3 rounded-s-md h-14"
        value={term.title}
        onChange={(e) => setValue(e.target.value)}
        onFocuse={() => {
          setOpenRecommendeds(true);
        }}
        onBlur={() => {
          setOpenRecommendeds(false);
        }}
      />
      <div className="w-full md:w-5/12 border-y-2 border-y-gray-200  md:border-s-2 md:border-s-gray-500 border-solid border-white h-14">
        <Select
          placeholder={SEARCH_PAGE_CONTENT.TYPE_PLACEHOLDER}
          options={options}
          onChange={(item) => {
            dispatch(updateType(item));
          }}
          selected={term.type}
        />
      </div>
      <div
        className="w-full md:w-3/12 h-14 bg-orange-600 hover:bg-orange-700 duration-300 flex items-center justify-center rounded-b-md md:rounded-b-none md:rounded-e-md cursor-pointer"
        onClick={() => {
          setOpenList(!openList);
        }}
      >
        <span className="text-white">{SEARCH_PAGE_CONTENT.SEARCH_BTN}</span>
      </div>
      <div
        className={`absolute top-[104%] left-0 w-full md:w-[77%] bg-white z-[100] duration-500 max-h-[200px] rounded-b-md overflow-y-scroll thin-scrollbar ${
          !openRecommendeds && "!max-h-0"
        }`}
      >
        {searchResult.length ? (
          <>
            {searchResult?.slice(0, 2).map((item: any) => (
              <div
                key={item.imdbID}
                className="w-full px-3 py-4 hover:bg-gray-200 flex flex-row gap-3"
                onClick={() => {
                  setValue(item.Title);
                  setOpenList(!openList);
                }}
              >
                <div className="mt-1">
                  <SvgIcon name={"search"} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-black line-clamp-1">
                    {item.Title}
                  </span>
                  <span className="text-xs text-gray-500">{item.Type}</span>
                </div>
              </div>
            ))}
            <div
              className="w-full px-3 py-4 hover:bg-gray-200 flex flex-row items-center gap-3"
              onClick={() => {
                setOpenList(!openList);
              }}
            >
              <span>{SEARCH_PAGE_CONTENT.SHOW_MORE}</span>
              <SvgIcon size={18} name={"chevron-right"} />
            </div>
          </>
        ) : (
          <div className="w-full px-3 py-3 hover:bg-gray-200 flex items-center gap-3">
            <div className="mt-1">
              <SvgIcon name={"search"} />
            </div>
            <span>{SEARCH_PAGE_CONTENT.SEARCH_DROPDOWN_TITLE}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
