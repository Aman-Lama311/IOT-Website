import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full h-[80vh] bg-[#F8F5FE] relative">
      {/* ellips */}

      {/* <img
        className="absolute top-0 rotate-90"
        src="src\assets\Ellipse 6.png"
        alt=""
      />
      <img
        className="absolute top-0 rotate-90"
        src="src\assets\Ellipse 9.png"
        alt=""
      />
      <img
        className="absolute top-0 rotate-90"
        src="src\assets\Ellipse 7.png"
        alt=""
      />
      <img
        className="absolute top-0 rotate-90"
        src="src\assets\Ellipse 8.png"
        alt=""
      />
      <img
        className="absolute top-0 rotate-90"
        src="src\assets\Ellipse 10.png"
        alt=""
      /> */}

      {/* left content */}
      <div className="flex flex-col gap-6 absolute top-1/5 left-[6vw]">
        <div className="text-7xl font-semibold">
          <h1>
            Stop just <span className="text-[#5E07E1] font-bold">learning</span>
          </h1>
          <h1>about science.</h1>
          <h1>
            Start <span className="text-[#5E07E1] font-bold">doing</span> it.
          </h1>
        </div>

        <p>
          Your classroom said <strong>"Read about it."</strong> We say{" "}
          <strong>"Go build it."</strong>
        </p>
        <Button text={"Join our free demo class"} />
        {/* links */}
        <div className="space-y-3">
          <p>Trusted by</p>
          <div className="flex gap-4">
            <img className="w-7" src="/assets/Airbnb.png" alt="" />
            <img className="w-7" src="/assets/Baidu.png" alt="" />
            <img className="w-7" src="/assets/Trello Logo.png" alt="" />
            <img className="w-7" src="/assets/Vine Logo.png" alt="" />
          </div>
        </div>
      </div>

      {/* right content */}
      <div>
        <img
          className="absolute right-96 top-8 z-10"
          src="/assets/meteocons_star-fill.png"
          alt=""
        />
        <div className="absolute right-0 top-5 z-10">
          <div>
            <img className="w-[37vw] " src="/assets/Vector (1).png" alt="" />
          </div>
        </div>
        <div className="absolute right-0 top-10">
          <div>
            <img className="w-[36vw]" src="/assets/Vector.png" alt="" />
          </div>
        </div>
        <img
          className="w-[18vw] absolute right-15 top-[32vw]"
          src="/assets/Frame 136.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
