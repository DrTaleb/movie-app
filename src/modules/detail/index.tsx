import { useLocation } from "react-router-dom";
import { useRequest } from "../../utils/axios/useRequest";

const Detail = () => {
  const location = useLocation();
  const id = location.pathname.replace("/detail/", "");
  const { data } = useRequest({
    queryKey: [id],
    query: {
      params: {
        i: id,
        apikey: "3244cd9",
      },
    },
    url: ``,
  });

  return <div className="text-white mt-6">{data?.Title}</div>;
};

export default Detail;
