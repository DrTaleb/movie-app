import { useEffect, useState } from "react";
import { IMovieInList } from "../types";
import SvgIcon from "../utils/SvgIcon";

const Bookmark = ({ movie }: { movie: IMovieInList }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const setItemHandler = () => {
    if (localStorage.getItem("bookmarks")) {
      const movies = JSON.parse(localStorage.getItem("bookmarks") || "");
      const hasItem = movies.some(
        (item: IMovieInList) => item.imdbID === movie.imdbID
      );
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
      className="share-button bg-gray-200 shadow-md m-2 px-3 py-2 rounded-xl"
      onClick={() => {
        setItemHandler();
      }}
    >
      {isBookmarked ? (
        <SvgIcon
          name={"close"}
          size={10}
          color={"#6C6C6C"}
          weight={1}
          fill="none"
        />
      ) : (
        <SvgIcon
          name={"bookmark"}
          size={20}
          color={"#6C6C6C"}
          weight={2}
          fill="none"
        />
      )}
    </button>
  );
};

export default Bookmark;
