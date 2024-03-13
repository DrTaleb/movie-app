import SearchBox from "./components/SearchBox";

const HeaderSearchSeaction = () => {
  const bgs = [
    "/backgrounds/1254595.jpg",
    "/backgrounds/breaking_bad_heisenberg-wallpaper-1024x576.jpg",
    "/backgrounds/matthew-mcconaughey-in-interstellar-476.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * bgs.length);

  const randomItem = bgs[randomIndex];

  return (
    <div className="relative h-[900px] w-full bottom-inner-shadow overflow-hidden">
      <img
        className="absolute z-0 w-full h-full object-cover brightness-75"
        src={randomItem}
      />
      <div className="absolute w-full h-full z-1 flex flex-col items-start justify-center ps-12">
        <div className="w-5/12 flex flex-col">
          <h1 className="text-white text-[34px] mb-0">
            MovieFinder: Explore Now!
          </h1>
          <p className="text-white text-[20px]">
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
