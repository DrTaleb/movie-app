import { useDeferredValue, useEffect, useState } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import SvgIcon from "../../../utils/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIsSearched,
  updateTitle,
  updateType,
} from "../../../redux/searchSlice";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const options = ["movie", "series", "episode"];

  const { term, searchResult } = useSelector((state: any) => state.search);

  const [value, setValue] = useState(term.title);

  const deferredValue = useDeferredValue(value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTitle(deferredValue));
  }, [deferredValue]);

  const [openRecommendeds, setOpenRecommendeds] = useState(false);

  return (
    <div className="relative bg-white w-full mt-5 h-14 rounded-lg flex shadow-lg">
      <Input
        placeHolder="Enter title"
        className="w-5/12 border-0 outline-0 rounded-none text-[20px] ps-3 rounded-s-md "
        value={term.title}
        onChange={(e) => setValue(e.target.value)}
        onFocuse={() => {
          setOpenRecommendeds(true);
        }}
        onBlur={() => {
          setOpenRecommendeds(false);
        }}
      />
      <div className="w-5/12 border-s-2 border-s-gray-500 border-solid border-white">
        <Select
          placeholder="Select type"
          options={options}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(updateType(e.target.value));
          }}
          selected={term.type}
        />
      </div>
      <div
        className="w-3/12 bg-orange-600 hover:bg-orange-700 duration-300 flex items-center justify-center rounded-e-md cursor-pointer"
        onClick={() => {
          dispatch(updateIsSearched(true));
        }}
      >
        <span className="text-white">Search</span>
      </div>
      <div
        className={`absolute top-[104%] left-0 w-[77%] bg-white z-[100] duration-500 max-h-[200px] rounded-b-md overflow-y-scroll ${
          !openRecommendeds && "!max-h-0"
        }`}
      >
        {searchResult.length ? (
          <>
            {searchResult?.slice(0, 2).map((item: any) => (
              <Link
                to={`/detail/${item.imdbID}`}
                key={item.imdbID}
                className="w-full px-3 py-4 hover:bg-gray-200 flex flex-row gap-3"
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
              </Link>
            ))}
            <div
              className="w-full px-3 py-4 hover:bg-gray-200 flex flex-row items-center gap-3"
              onClick={() => {
                dispatch(updateIsSearched(true));
              }}
            >
              <span>Show more results </span>
              <SvgIcon size={18} name={"chevron-right"} />
            </div>
          </>
        ) : (
          <div className="w-full px-3 py-3 hover:bg-gray-200 flex items-center gap-3">
            <div className="mt-1">
              <SvgIcon name={"search"} />
            </div>
            <span>Search anything you want!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
