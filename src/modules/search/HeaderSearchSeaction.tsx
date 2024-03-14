import { useSelector } from "react-redux";
import SearchBox from "./components/SearchBox";
import RandomBackground from "../../components/RandomBackground";

const HeaderSearchSeaction = () => {
  const { isSearched } = useSelector((state: any) => state.search);

  return (
    <div
      className={`relative ${
        isSearched ? "h-[400px]" : "h-screen"
      } w-full bottom-inner-shadow duration-700	ease-in-out	`}
    >
      <RandomBackground/>
      <div className="absolute w-full h-full z-1 flex flex-col items-start justify-center ps-12 duration-700">
        <div className="w-5/12 flex flex-col duration-700">
          <h1 className="text-white text-[34px] mb-0	">
            MovieFinder: Explore Now!
          </h1>
          <p
            className={`text-white text-[20px] duration-700	ease-in-out overflow-hidden max-h-full ${
              isSearched && "!max-h-0"
            }`}
          >
            Find your next favorite film effortlessly with our movie search
            website. Browse genres, release years, and actors to discover the
            perfect movie for any occasion. Start exploring now!
          </p>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchSeaction;
