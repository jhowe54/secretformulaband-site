import SnailLogo from "../../media/SnailNoTextv2.png";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="p-4">
      <div className="mt-20 text-white md:text-[18rem] text-[10rem] text-center flex flex-row justify-center items-baseline flex-nowrap  p-4">
        <h2 className="bg antialiased tracking-wide">404</h2>
      </div>
      <div className="text-white text-center flex flex-col justify-center items-center">
        <h3 className="text-lg block">
          It appears that the page you are looking for does not exist...
        </h3>
        <Link to="/" className='text-xl bg p-2 my-6 md:w-[30%] w-[50%] rounded-lg hover:scale-110 duration-500 bg-blue-400  hover:bg-white hover:text-blue-400'>
            Home
          </Link>
      </div>
    </div>
  );
}

export default NotFound;
