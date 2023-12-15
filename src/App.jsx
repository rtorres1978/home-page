import ImgHero1 from "./assets/images/desktop-image-hero-1.jpg";
import ImgaboutDark from "./assets/images/image-about-dark.jpg";
import Imgaboutlight from "./assets/images/image-about-light.jpg";
import IconArrowShop from "./components/icon/iconArrowShop";
import IconPrev from "./components/icon/iconprev";
import IconNext from "./components/icon/iconnext";
const App = () => {
  return (
    <div>
      <nav>
        <a href="#">room</a>
        <div>
          <a href="#">home</a>
          <a href="#">shop</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
      </nav>
      <header className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
        <img src={ImgHero1} alt="" className="col-span-4 lg:row-span-2 w-full h-full" />
        <article className="col-span-3 lg:px-24 flex flex-col justify-center items-start  ">
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
        <div className="bg-black flex">
          <button className="w-full">
            <IconPrev className="lg:mx-auto" />
          </button>
          <button className="w-full">
            <IconNext className="mx-auto" />
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-7  w-full h-full">
        
        <img src={ImgaboutDark} alt="Dark" className="lg:col-span-2 w-full h-full" />
        
        <section className="lg:col-span-3 lg:px-12 flex flex-col justify-center">
       
        <h2 className="font-bold text-2xl uppercase tracking-[0.6rem] mb-3">About our furniture</h2>
         
          <p className="text-gray-500">
            Our multifunctional collection blends design and function to suit
            your individual taste.Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles anything in between. Product specialists are available to
            help you create your dream space.
          </p>
       
        </section>
        
        <img src={Imgaboutlight} alt="Lift" className="lg:col-span-2 w-full h-full" />
      
      </main>
    </div>
  );
};

export default App;
