import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 md:px-[8%] py-8 mt-10 bg-black text-white">
      <div className="flex justify-between flex-wrap">
        {/* left side */}
        <div className="flex flex-col gap-10 max-w-2xl">
          <div>
            <img src="src\assets\image 1.png" alt="" />
            <ul>
              <p>We are group of Educator who provides:</p>
              <li>&nbsp; 1.Weakly STEAM classes</li>
              <li>&nbsp; 2.Robotics, AI and Coding Bootcamps at schools</li>
              <li>&nbsp; 3.Kit to partially learn STEAM concepts</li>
            </ul>
            <p>
              And make sure to check our youtube channel Third World Nerd where
              we blend technology with humour to simultaneously provide both
              education and entertainment. 
              <br />
              <br />
              Because “knowing Ohm’s Law” is useless until you can make a robot
              dog pee on a pole.
            </p>
          </div>
          <p>© 2025 MakitLabs. All rights reserved.</p>
        </div>
        {/* middle part */}
        <div className="space-y-8">
          <div className="flex flex-col">
            <h1 className="text-2xl font-medium">Information</h1>
            <Link to={"/aboutus"}>About Us</Link>
            <Link to={"courses"}>Our Courses</Link>
            <Link to={"products"}>Our Products</Link>
          </div>
          <div>
            <h1 className="text-2xl font-medium text-nowrap">Main Location</h1>
            <p>Detailed location here</p>
          </div>
        </div>
        <div>
          {/* right side */}
          <div className="space-y-1">
            <div>
              <h1 className="text-2xl font-medium text-nowrap">Contact Us</h1>
              <p>+977-9841234567</p>
              <p>info@makitlabs.com.np</p>
            </div>
            <div className="flex items-center gap-2">
              <Link className="p-2 bg-white rounded-full">
                <RiFacebookFill color="black" />
              </Link>
              <Link className="p-2 bg-white rounded-full">
                <AiFillInstagram color="black" />
              </Link>
              <Link className="p-2 bg-white rounded-full">
                <FaYoutube color="black" />
              </Link>
            </div>
            {/* video dummy */}
            <div className="mt-8 relative">
              <img
                className="rounded-2xl"
                src="src\assets\image 11.png"
                alt=""
              />
              <img
                className="absolute top-1/3 left-25"
                src="src\assets\Video.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
