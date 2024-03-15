import { useEffect, useState } from "react";
import RandomBackground from "../../components/RandomBackground";
import MovieCard from "../search/components/MovieCard";
import { IMovieInList } from "../../types";
import { BOOKMARKS_CONTENT } from "../../content/bookmarksPage";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [resetBookmarks , setResetBookmarks] = useState(false)
  useEffect(() => {
    if (localStorage?.getItem("bookmarks")) {
      const movies = JSON.parse(localStorage.getItem("bookmarks") || "");
      setBookmarks(movies);
    }
  }, [resetBookmarks]);
  return (
    <>
      <div className={`relative h-[350px] w-full bottom-inner-shadow`}>
        <RandomBackground />
        <div className="absolute w-full h-full z-1 flex flex-col items-start justify-center ps-12 duration-700">
          <div className="w-full md:w-6/12 xl:w-5/12 flex flex-col items-srart justify-center">
            <h1 className="text-white text-[34px] mb-0">
              {BOOKMARKS_CONTENT.TITLE}
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-4">
          {bookmarks?.map((item: IMovieInList) => (
            <MovieCard movie={item} key={item.imdbID} resetBookmarks={setResetBookmarks}/>
          ))}
        </div>
        {!bookmarks?.length && (
          <span className="text-white text-[23px] md:text-[30px] pt-6">
            {BOOKMARKS_CONTENT.EMPTY_MESSAGE}
          </span>
        )}
      </div>
    </>
  );
};

export default Bookmarks;
