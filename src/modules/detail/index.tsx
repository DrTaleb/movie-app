import { useLocation } from "react-router-dom";
import { useRequest } from "@/utils/axios/useRequest";
import Image from "@/components/image";
import LoadingWrapper from "@/components/LoadingWrapper";
import DetailLoading from "./components/DetailLoading";
import { DETAIL_PAGE_CONTENT } from "@/content/detailPage";
import Bookmark from "@/components/Bookmark";
import { useEffect } from "react";

const Detail = () => {
  const location = useLocation();
  const id = location.state;
  const { data, isLoading } = useRequest({
    queryKey: [id],
    query: {
      params: {
        i: id,
        apikey: "3244cd9",
      },
    },
    url: ``,
    errorCallback(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LoadingWrapper
      loading={isLoading}
      loadingComponent={<DetailLoading />}
      hasData={data?.Title?.length}
    >
      <div className="fixed w-full h-[400px] -z-1 bottom-inner-shadow:after">
        <Image
          className={
            "absolute w-full h-full object-cover rounded-lg blur-xl brightness-50"
          }
          src={data?.Poster}
        />
      </div>
      <div className="sm:container px-4 md:px-0 pt-12 pb-4">
        <div className="flex flex-wrap justify-start md:pt-12">
          <div className="relative h-[400px] md:h-[700px] w-full md:w-5/12 lg:w-4/12 z-1">
            <Image
              className={"absolute w-full h-full object-cover rounded-lg"}
              src={data?.Poster}
            />
          </div>
          <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col items-start md:ps-4 z-[2] mt-4 md:mt-0">
            <Bookmark
              movie={{
                imdbID: data?.imdbID,
                Poster: data?.Poster,
                Title: data?.Title,
                Year: data?.Year,
                Type: data?.Type,
              }}
            />
            <h1 className="dark:text-white text-[30px] md:text-[40px]">
              {data?.Title} {data?.Year}
            </h1>
            <div className="w-full flex gap-3 items-start justify-start mt-4 flex-wrap">
              {data?.Ratings?.map((item: { Source: string; Value: string }) => (
                <div
                  key={item.Source}
                  className="w-full md:w-fit lg:w-5/12 flex flex-col items-center gap-2 border border-solid border-white p-3"
                >
                  <span className="text-white font-semibold text-nowrap">
                    {item.Source}
                  </span>
                  <span className="text-white">{item?.Value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-3">
                <span className="text-white font-semibold text-[23px] text-nowrap">
                  {DETAIL_PAGE_CONTENT.GENRE}{" "}
                </span>
                <span className="text-white text-[23px]">{data?.Genre}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-white font-semibold text-nowrap">
                  {DETAIL_PAGE_CONTENT.DIRECTOR}{" "}
                </span>
                <span className="text-white">{data?.Director}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-white font-semibold text-nowrap">
                  {DETAIL_PAGE_CONTENT.LANGUAGE}{" "}
                </span>
                <span className="text-white">{data?.Language}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-white font-semibold text-nowrap">
                  {DETAIL_PAGE_CONTENT.AWARDS}{" "}
                </span>
                <span className="text-white">{data?.Awards}</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white font-semibold text-nowrap">
                  {DETAIL_PAGE_CONTENT.PLOT}{" "}
                </span>
                <span className="text-white">{data?.Plot}...</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white font-semibold text-nowrap">
                  {DETAIL_PAGE_CONTENT.ACTORS}
                </span>
                <span className="text-white">{data?.Actors}</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white font-semibold text-nowrap">
                  {DETAIL_PAGE_CONTENT.RUNTIME}
                </span>
                <span className="text-white">{data?.Runtime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default Detail;
