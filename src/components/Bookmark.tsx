import { useEffect, useState } from "react";
import { IMovieInList } from "@/types";
import SvgIcon from "@/utils/SvgIcon";
import { GENERAL_COTENT } from "@/content/general";

const Bookmark = ({ movie, changeBookmark }: { movie: IMovieInList, changeBookmark? : (val : any)=> void }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const setItemHandler = () => {
    // check if localstorage have prev list
    if (localStorage.getItem("bookmarks")) {
      // the bookmarked list
      const movies = JSON.parse(localStorage.getItem("bookmarks") || "");
      const hasItem = movies.some(
        (item: IMovieInList) => item.imdbID === movie.imdbID
      );
      //check if list has the item to remove it or save it
      if (!hasItem) {
        localStorage.setItem("bookmarks", JSON.stringify([...movies, movie]));
        setIsBookmarked(true);
      } else {
        const newList = movies.filter(
          (item: IMovieInList) => item.imdbID !== movie.imdbID
        );
        localStorage.setItem("bookmarks", JSON.stringify([...newList]));
        setIsBookmarked(false);
      }
    } else {
      localStorage.setItem("bookmarks", JSON.stringify([movie]));
      setIsBookmarked(true);
    }
    changeBookmark && changeBookmark((prev : boolean) => !prev)
  };

  useEffect(() => {
    if (localStorage?.getItem("bookmarks")) {
      const movies = JSON.parse(localStorage.getItem("bookmarks") || "");
      const hasItem = movies.some(
        (item: IMovieInList) => item.imdbID === movie.imdbID
      );
      setIsBookmarked(hasItem);
    }
  }, []);
  return (
    <button
      className="share-button bg-white-200 hover:bg-gray-300 duration-300 shadow-md m-2 px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer"
      onClick={() => {
        setItemHandler();
      }}
    >
      {isBookmarked ? (
        <>
          <SvgIcon
            name={"close"}
            size={10}
            color={"#6C6C6C"}
            weight={1}
            fill="none"
          />
          <span>{GENERAL_COTENT.REMOVE_BOOKMARK}</span>
        </>
      ) : (
        <>
          <SvgIcon
            name={"bookmark"}
            size={20}
            color={"#6C6C6C"}
            weight={2}
            fill="none"
          />
          <span>{GENERAL_COTENT.ADD_BOOKMARK}</span>
        </>
      )}
    </button>
  );
};

export default Bookmark;
