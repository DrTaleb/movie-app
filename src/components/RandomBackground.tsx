import { useMemo } from "react";
import Image from "./image";
const RandomBackground = () => {
  const bgs = [
    "/backgrounds/1254595.jpg",
    "/backgrounds/breaking_bad_heisenberg-wallpaper-1024x576.jpg",
    "/backgrounds/matthew-mcconaughey-in-interstellar-476.jpg",
  ];

  const randomIndex = useMemo(() => {
    return Math.floor(Math.random() * bgs.length);
  }, []);

  const randomItem = bgs[randomIndex];
  return (
    <Image
      className="absolute z-0 w-full h-full object-cover brightness-75 duration-700"
      src={randomItem}
    />
  );
};

export default RandomBackground;
