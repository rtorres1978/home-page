const NavLink = (props) => {
  return (

      <a href="#" className="font-bold">
        <span className="peer">{props.text} </span>
        <span className="block h-1 w-full scale-x-0 peer-hover:bg-red-300 transition-all peer-hover:scale-x-100 h-100 w-100 duration-500"></span>
      </a>
  
  );
};
export default NavLink ;
