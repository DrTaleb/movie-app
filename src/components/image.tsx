import { useState } from "react";

const Image = (props: any) => {
  const [src, setSrc] = useState(props.src);
  return (
    <img
      {...props}
      src={src}
      onError={() => setSrc("/default-image/placeholder-image-dark.jpg")}
    />
  );
};

export default Image;
