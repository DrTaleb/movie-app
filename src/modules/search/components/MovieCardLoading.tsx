export default function MovieCardLoading() {
  return (
    <div className="movie-card bg-slate-700 w-full lg:w-full relative overflow-hidden duration-300 rounded-lg shadow-card hover:shadow-card-hover">
      <div
        className={
          "absolute m-2 z-20 bg-opacity-40 p-1 rounded-xl flex flex-row gap-1 items-center"
        }
      >
        <div className="w-[30px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
      </div>

      <div className="flex-col">
        <div className="w-full aspect-[3/4] rounded-t-md relative overflow-hidden">
          <div className="absolute w-full h-full duration-300 bg-gray-600 animate-pulse"></div>
          <div className={"absolute bottom-0 p-2"}>
            <div className="w-[60px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
            <div className="w-[150px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
          </div>
        </div>
        <div className="px-2">
          <div className="flex flex-row justify-between items-center rounded-xl py-3 mt-1 px-3">
            <span className="blog-author text-gray-400 text-xs">
              <div className="w-[30px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
            </span>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row items-center gap-1">
                <span className="text-gray-400 text-xs mt-1">
                  <div className="w-[30px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
                </span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <span className="blog-author text-gray-400 text-xs mt-1">
                  <div className="w-[30px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
                </span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <span className="blog-author text-gray-400 text-xs mt-1">
                  <div className="w-[30px] h-[10px] rounded-xl bg-gray-600 mt-2 ms-1"></div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
