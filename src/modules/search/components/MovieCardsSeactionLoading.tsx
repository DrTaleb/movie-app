import MovieCardLoading from "./MovieCardLoading";

const MovieCardsSeactionLoading = () => {
  return (
    <div className="w-full grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
        <MovieCardLoading key={item} />
      ))}
    </div>
  );
};

export default MovieCardsSeactionLoading;
