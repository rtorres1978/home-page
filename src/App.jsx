import NavMenu from "./components/menu/nav";
import MainHome from "./components/home/mainhome";
import HeaderHome from "./components/home/HeaderHome";

const App = () => {
  return (
    <>
      <NavMenu />
      <HeaderHome/>
      <MainHome />
    </>
  );
};

export default App;
