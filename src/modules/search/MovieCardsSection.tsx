import { useDispatch, useSelector } from "react-redux";
import { IMovieInList } from "../../types";
import MovieCard from "./components/MovieCard";
import Pagination from "./components/Pagination";
import { updatePage } from "../../redux/searchSlice";
import LoadingWrapper from "../../components/LoadingWrapper";
import MovieCardsSeactionLoading from "./components/MovieCardsSeactionLoading";

export default function MovieCardsSection({ loading }: { loading: boolean }) {
  const { searchResult, page, total } = useSelector(
    (state: any) => state.search
  );
  const dispatch = useDispatch();

  return (
    <div className="container mt-6">
      <LoadingWrapper
        loading={loading}
        loadingComponent={<MovieCardsSeactionLoading />}
        hasData={searchResult.length}
      >
        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-4">
          {searchResult?.map((item: IMovieInList) => (
            <MovieCard movie={item} key={item.imdbID} />
          ))}
        </div>
        <Pagination
          page={page}
          size={10}
          total={total || 10}
          onPageChange={(page: number) => {
            dispatch(updatePage(page));
          }}
        />
      </LoadingWrapper>
    </div>
  );
}
