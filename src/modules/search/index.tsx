import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "../../utils/axios/useRequest";
import HeaderSearchSeaction from "./HeaderSearchSeaction";
import { updateSearchResults, updateTotal } from "../../redux/searchSlice";
import { useEffect } from "react";
import MovieCardsSection from "./MovieCardsSection";

const Search = () => {
  const { term, page, isSearched } = useSelector((state: any) => state.search);

  const dispatch = useDispatch();

  const request = useRequest({
    queryKey: [
      term,
      {
        page,
      },
    ],
    query: {
      params: {
        page: page,
        s: term.title,
        apikey: "3244cd9",
        type: term.type,
      },
    },
    url: ``,
    enabled: term.title.length > 1,
    successCallback(data) {
      if (data?.Search) {
        dispatch(updateSearchResults(data.Search));
        dispatch(updateTotal(data.totalResults));
      }
    },
  });

  useEffect(() => {
    request.refetch();
  }, [term.title, term.type, page]);

  return (
    <div className={`w-full ${!isSearched && "h-screen overflow-hidden"}`}>
      <HeaderSearchSeaction />
      <MovieCardsSection loading={request.isLoading} />
    </div>
  );
};

export default Search;
