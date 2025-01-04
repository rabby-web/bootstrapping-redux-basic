import { Link } from "react-router-dom";
import myImage from "../../assets/s.png";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            className="w-10 h-10"
            src={myImage}
            alt="Description of the image"
          />
          <span className="font-bold text-[#218315] text-xl">Task Master</span>
          <Link to="/">Tasks</Link>
          <Link to="/users">Users</Link>
          <div className="ml-auto"></div>
        </div>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
