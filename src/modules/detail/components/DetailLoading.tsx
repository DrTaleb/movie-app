import { ImagesEnum } from "../../../Enums";
import Image from "../../../components/image";

const DetailLoading = () => {
  return (
    <>
      <div className="fixed w-full h-[400px] -z-1 bottom-inner-shadow:after">
        <Image
          className={
            "absolute w-full h-full object-cover rounded-lg blur-xl brightness-50"
          }
          src={ImagesEnum.Default}
        />
      </div>
      <div className="xl:container px-4 md:px-0 pt-12 pb-4">
        <div className="flex flex-wrap justify-start md:pt-12">
          <div className="relative h-[400px] md:h-[700px] w-full md:w-4/12 z-1">
            <Image
              className={
                "absolute w-full h-full object-cover rounded-lg blur-xl"
              }
              src={ImagesEnum.Default}
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col md:ps-4 z-[2] mt-4 md:mt-0">
            <div className="h-12 w-[250px] bg-gray-600 rounded-full"></div>
            <div className="flex gap-3 items-start justify-start mt-4 flex-wrap">
              {[1, 2, 3].map((item: number) => (
                <div
                  key={item}
                  className="w-full md:w-fit lg:w-1/3 flex flex-col items-center gap-2 border border-solid border-white p-3"
                >
                  <div className="h-6 w-6/12 bg-gray-600 rounded-full"></div>

                  <div className="h-6 w-2/12 bg-gray-600 rounded-full"></div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex gap-3 items-center">
                <span className="text-white font-semibold text-[23px]">
                  Genre :
                </span>
                <div className="h-6 w-[250px] bg-gray-600 rounded-full"></div>
              </div>
              <div className="flex gap-3">
                <span className="text-white font-semibold">Director : </span>
                <div className="h-6 w-[200px] bg-gray-600 rounded-full"></div>
              </div>
              <div className="flex gap-3">
                <span className="text-white font-semibold">Language : </span>
                <div className="h-6 w-[200px] bg-gray-600 rounded-full"></div>
              </div>
              <div className="flex gap-3">
                <span className="text-white font-semibold">Awards : </span>
                <div className="h-6 w-[200px] bg-gray-600 rounded-full"></div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white font-semibold text-nowrap">
                  Plot :{" "}
                </span>

                <div className="h-6 w-full bg-gray-600 rounded-full"></div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white font-semibold text-nowrap">
                  Actors :
                </span>
                <div className="h-6 w-4/12 bg-gray-600 rounded-full"></div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-white font-semibold text-nowrap">
                  Runtime :
                </span>
                <div className="h-6 w-2/12 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLoading;
