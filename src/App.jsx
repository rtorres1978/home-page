import ImgHero1 from "./assets/images/desktop-image-hero-1.jpg";
import ImgaboutDark from "./assets/images/image-about-dark.jpg";
import Imgaboutlight from "./assets/images/image-about-light.jpg";
import IconArrowShop from "./components/icon/iconArrowShop";
import IconPrev from "./components/icon/iconprev";
import IconNext from "./components/icon/iconnext";
import NavMenu from "./components/menu/nav";
const App = () => {
  return (
    <div>
       <NavMenu/>
      <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
        <img
          src={ImgHero1}
          alt=""
          className="w-full h-full col-start-1 col-end-4 row-start-1 row-end-3
          lg:col-start-1 
          lg:col-end-5 
          lg:row-start-1 
          lg:row-end-3"
        />

        <article className="lg:px-24 flex flex-col justify-center p-8 col-start-1 col-end-4 row-start-3 row-end-4 items-start lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 ">
          <h1 className="font-bold text-4xl mb-6">
            Discover innovative ways to decorate
          </h1>
          <p className="text-gray-500 mb-8">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <button className="flex items-center hover:text-gray-500 hover:fill-gray-500 fill-black">
            <span className="font-bold text-base uppercase tracking-[1rem] ">
              Shop now
            </span>
            <IconArrowShop />
          </button>
        </article>
        <div className="bg-black flex col-end-4 col-start-3 row-start-2 row-end-3 
        lg:col-start-5 
        lg:col-end-6 
        lg:row-start-2 
        lg:row-end-3">
          <button className="w-full">
            <IconPrev className="lg:mx-auto mx-auto" />
          </button>
          <button className="w-full">
            <IconNext className="mx-auto " />
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-7  w-full h-full">
        <img
          src={ImgaboutDark}
          alt="Dark"
          className="lg:col-span-2 w-full h-full"
        />

        <section className="lg:col-span-3 lg:px-12 flex flex-col justify-center p-8">
          <h2 className="font-bold text-2xl uppercase tracking-[0.6rem] mb-3">
            About our furniture
          </h2>

          <p className="text-gray-500 ">
            Our multifunctional collection blends design and function to suit
            your individual taste.Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>

        <img
          src={Imgaboutlight}
          alt="Lift"
          className="lg:col-span-2 w-full h-full"
        />
      </main>
    </div>
  );
};

export default App;
