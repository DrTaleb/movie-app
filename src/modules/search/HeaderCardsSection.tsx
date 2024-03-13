import HeaderCard from "./components/HeaderCard";

interface propTypes {
  data: any;
}
export default function HeaderCardsSection({ data }: propTypes) {
  return (
    <div className="relative flex flex-row xs:flex-wrap md:flex-nowrap md:h-[600px] pb-7">
      {data.length ? (
        <>
          <div className={"w-1/2 h-full"}>
            <div className={"w-full h-full"}>
              <HeaderCard props={data[0]} />
            </div>
          </div>
          {data.length > 1 ? (
            <div className={"w-1/2 md:h-full"}>
              <div className="flex flex-col h-full">
                <div className={"w-full h-1/2"}>
                  <div className={"w-full h-full"}>
                    <HeaderCard props={data[1]} />
                  </div>
                </div>
                {data.length > 2 ? (
                  <div className={"w-full md:h-1/2"}>
                    <div className="flex flex-row flex-wrap md:flex-nowrap md:h-full">
                      <div className={"md:w-1/2 md:h-full w-full"}>
                        <HeaderCard props={data[2]} />
                      </div>
                      {data.length > 3 && (
                        <div className={"md:w-1/2 md:h-full w-full"}>
                          <HeaderCard props={data[3]} />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
