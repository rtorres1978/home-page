import IconArrowShop from "../../components/icon/iconArrowShop";
const ArticleHome = ({hero}) => {
  return (
    <>
      <img
        src={hero.imgHero}
        alt=""
        className="w-full h-full col-start-1 col-end-4 row-start-1 row-end-3
                                            lg:col-start-1 
                                            lg:col-end-5 
                                            lg:row-start-1 
                                            lg:row-end-3"
      />

      <article className="lg:px-24 flex flex-col justify-center p-8 col-start-1 col-end-4 row-start-3 row-end-4 items-start lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 ">
        <h1 className="font-bold text-4xl mb-6">
          {hero.title}
        </h1>
        <p className="text-gray-500 mb-8">
         {hero.description}
        </p>
        <button className="flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black">
          <span className="font-bold text-base uppercase tracking-[1rem] ">
            Shop now
          </span>
          <IconArrowShop />
        </button>
      </article>
    </>
  );
};
export default ArticleHome;
