import { Link } from "react-router-dom";

export interface IHeaderCardProps {
  url: string;
  title: string;
  created_at: string;
  tags: string[];
  commentCount: number;
  viewCount: number;
  blogCategoryName: string;
  imgSrc: string;
}
interface propTypes {
  props: IHeaderCardProps;
}
export default function HeaderCard({ props }: propTypes) {
  const createdAt = new Date(props?.created_at).toLocaleDateString("en-US");
  const fitTitle = props?.title.slice(0, 40)
  return (
    <Link to={`/detail/${props?.url}`}>
      <div className="header-blog-card w-full md:h-full h-[300px] relative overflow-hidden duration-300 shadow-card-hover hover:shadow-card">
        <img className="w-full h-full object-cover duration-500" src={props.imgSrc} />
        <div className="absolute bottom-0 z-20 flex flex-col items-start gap-1 mb-7 m-2">
          <div
            className={
              "blog-category bg-opacity-50 p-1 rounded-xl flex flex-row gap-1 items-center bg-gray-300"
            }
          >
            {/* <SvgIcon name={'outlined-circle'} size={15} color={'#7600CA'} weight={10} fill='none' /> */}
            <span className={"font-normal text-xs text-white"}>
              {props?.blogCategoryName}
            </span>
          </div>
          <span className="blog-title text-[30px] text-white">
            {fitTitle}
          </span>
          <div className="blog-subtitle flex flex-row justify-between items-center gap-3">
            <span className="blog-author text-gray-400 text-xs mt-1">
              {createdAt}
            </span>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row items-center gap-1">
                <span className="text-gray-400 text-xs mt-1">
                  {props?.commentCount}
                </span>
                {/* <SvgIcon name={'comment'} size={12} color={'#a8b6c0'} weight={1} fill='none' /> */}
              </div>
              <div className="flex flex-row items-center gap-1">
                <span className="blog-author text-gray-400 text-xs mt-1">
                  {props?.viewCount}
                </span>
                {/* <SvgIcon name={'view'} size={16} weight={1} color={'#a8b6c0'} fill='none' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
