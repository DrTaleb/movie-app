import HeaderCardsSection from "./HeaderCardsSection";
import HeaderSearchSeaction from "./HeaderSearchSeaction";

const SearchPage = () => {
  const data = [
    {
      id: 1,
      title: "Joker 2019",
      url: "testurl1",
      created_at: new Date(),
      commentCount: 1,
      viewCount: 10,
      blogCategoryName: "action",
      imgSrc: "/joker_50-wallpaper-1920x1080-copy-768x420.jpg",
    },
    {
      id: 2,
      title: "Breaking bad",
      url: "testurl1",
      created_at: new Date(),
      commentCount: 1,
      viewCount: 10,
      blogCategoryName: "action",
      imgSrc: "/images.jfif",
    },
    {
      id: 3,
      title: "Ford v Ferrari 2019",
      url: "testurl1",
      created_at: new Date(),
      commentCount: 1,
      viewCount: 10,
      blogCategoryName: "action",
      imgSrc: "/fordVFerrari.jfif",
    },
    {
      id: 4,
      title: "dgvds",
      url: "testurl1",
      created_at: new Date(),
      commentCount: 1,
      viewCount: 10,
      blogCategoryName: "action",
      imgSrc: "/joker_50-wallpaper-1920x1080-copy-768x420.jpg",
    },
    {
      id: 5,
      title: "test title",
      url: "testurl1",
      created_at: new Date(),
      commentCount: 1,
      viewCount: 10,
      blogCategoryName: "action",
      imgSrc: "/joker_50-wallpaper-1920x1080-copy-768x420.jpg",
    },
  ];
  return (
    <>
      <HeaderSearchSeaction />
      <HeaderCardsSection data={data} />
    </>
  );
};

export default SearchPage;
