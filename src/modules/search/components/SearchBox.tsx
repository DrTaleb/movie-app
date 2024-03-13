import { useState } from "react";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import SvgIcon from "../../../utils/SvgIcon";

const SearchBox = () => {
  const options = ["any type", "movie", "series", "episode"];
  const [value, setValue] = useState("");

  const list = [
    {
      Title: "Ford v Ferrari",
      Year: "2019",
      imdbID: "tt1950186",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_SX300.jpg",
    },
    {
      Title: "The Assassination of Jesse James by the Coward Robert Ford",
      Year: "2007",
      imdbID: "tt0443680",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY2NDI2MTc2NV5BMl5BanBnXkFtZTcwNjA2NTQzMw@@._V1_SX300.jpg",
    },
    {
      Title: "The Adventures of Ford Fairlane",
      Year: "1990",
      imdbID: "tt0098987",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzk5ZjVlYWYtZDQ3NC00OTE2LWFmYzAtNmQ5Y2UzZmRjM2I0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
  ];

  const [openRecommendeds, setOpenRecommendeds] = useState(false);

  return (
    <div className="relative bg-white w-full mt-5 h-14 rounded-lg flex shadow-lg">
      <Input
        placeHolder="Enter title"
        className="w-5/12 border-0 outline-0 rounded-none text-[20px] ps-3 rounded-s-md "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onFocuse={() => {
          setOpenRecommendeds(true);
        }}
        onBlur={() => {
          setOpenRecommendeds(false);
        }}
      />
      <div className="w-5/12 border-s-2 border-s-gray-500 border-solid border-white">
        <Select placeholder="Select type" options={options} />
      </div>
      <div className="w-3/12 bg-orange-600 hover:bg-orange-700 duration-300 flex items-center justify-center rounded-e-md cursor-pointer">
        <span className="text-white">Search</span>
      </div>
      <div
        className={`absolute top-[104%] left-0 w-[77%] bg-white z-2 duration-500 max-h-[200px] rounded-b-md overflow-y-scroll ${
          !openRecommendeds && "!max-h-0"
        }`}
      >
        {list?.length ? (
          <>
            {list.slice(0, 2).map((item) => (
              <div
                key={item.imdbID}
                className="w-full px-3 py-4 hover:bg-gray-200 flex flex-row gap-3"
              >
                <div className="mt-1">
                  <SvgIcon name={"search"} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-black">{item.Title}</span>
                  <span className="text-xs text-gray-500">{item.Type}</span>
                </div>
              </div>
            ))}
            <div className="w-full px-3 py-4 hover:bg-gray-200 flex flex-row items-center gap-3">
              <span>Show more results </span>
              <SvgIcon size={18} name={"chevron-right"} />
            </div>
          </>
        ) : (
          <div className="w-full px-3 py-4 hover:bg-gray-200"></div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
