import { useNavigate } from "react-router-dom";
import SvgIcon from "../../../utils/SvgIcon";
import { IMovieInList } from "../../../types";
import Image from "../../../components/image";
import Bookmark from "../../../components/Bookmark";

interface movieType {
  movie: IMovieInList;
  resetBookmarks?: (val: any) => void;
}

export default function MovieCard({ movie, resetBookmarks }: movieType) {
  const navigate = useNavigate();

  return (
    <div className="movie-card overflow-hidden relative overflow-hidden bg-black rounded-lg duration-300 cursor-pointer">
      <div className="absolute w-full z-20 pt-1 p-2 flex flex-row justify-between items-center">
        <div
          className={
            "movie-category m-2 z-20 bg-opacity-60 p-2 rounded-xl flex flex-row gap-1 items-center bg-gray-700"
          }
        >
          <SvgIcon
            name={"outlined-circle"}
            size={17}
            color={"orange"}
            weight={10}
            fill="none"
          />
          <span className={"font-normal text-xs text-white"}>
            {movie?.Type}
          </span>
        </div>
        <Bookmark movie={movie} changeBookmark={resetBookmarks} />
      </div>
      <div onClick={() => navigate("/detail", { state: movie.imdbID })}>
        <div className="flex-col bg-slate-800">
          <div className="w-full rounded-t-md relative overflow-hidden">
            <Image
              src={movie.Poster}
              className="w-full duration-300 brightness-75 aspect-[3/4]"
              style={{ objectFit: "cover" }}
              alt={movie?.Title}
            />
          </div>
          <div className="card-body p-2">
            <div className="py-1">
              <span className="text-2xl text-slate-100 font-semibold line-clamp-1">
                {movie?.Title}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
