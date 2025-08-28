import { NavLink } from "react-router-dom";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-[8%] py-4">
      <NavLink to={"/"}>
        <img className="h-10" src="src\assets\image 1.png" alt="logo" />
      </NavLink>
      <div className="flex items-center gap-7">
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-[#5E07E1]" : ""}`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to={"/courses"}
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-[#5E07E1]" : ""}`
          }
        >
          Courses
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            `font-medium flex items-center gap-2 ${
              isActive ? "text-[#5E07E1]" : ""
            }`
          }
        >
          <p>Products</p>
          <span className="mt-1">
            <IoIosArrowDown />
          </span>
        </NavLink>
        <p className="text-[#5E07E1] font-medium">+977-9841234567</p>
        <Button text={"Enroll Now"} />
      </div>
    </nav>
  );
};
export default Navbar;
