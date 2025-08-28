import Button0 from "./Button0";
import Title0 from "./Title0";

const About = () => {
  return (
    <div className="px-4 md:px-[8%] py-4 flex gap-18 my-10">
      {/* full left part */}
      <div className="flex gap-8">
        {/* left */}

        <div className="flex flex-col gap-4 max-w-fit">
          <div>
            <img className="w-60" src="src\assets\Frame 149.png" alt="" />
          </div>
          <div className="px-4 py-2 bg-[#F8F5FE] rounded-r-3xl rounded-t-3xl flex items-center gap-3">
            <div className="w-12 h-12 bg-[#BC9AF1] rounded-full"></div>
            <p className="text-[#5E1CC4] leading-[0.9vw] font-medium">
              Some text some
              <br />
              numbers that we can
              <br />
              quote here
            </p>
          </div>
        </div>
        {/* middle part */}
        <div className="flex flex-col gap-4">
          <img
            className="w-60 h-60 rounded-full"
            src="src\assets\image 6.png"
            alt=""
          />
          <img className="w-60" src="src\assets\Frame 152.png" alt="" />
        </div>
      </div>

      {/* right part */}
      <div className="max-w-2xl flex flex-col gap-4">
        <div>
          <Title0 title={"About Us"} text1={"Who are"} text2={"we"} />
          <p className="font-medium mt-4 leading-[1.1vw] text-gray-800">
            We’re a group of engineers and educators from Pulchowk Campus who
            got tired of classrooms being all theory and no practice. For us,
            education isn’t something you just read, it’s something you make.{" "}
            <br />
            <br />
            So for the last two years, we’ve been out in classrooms, labs, and
            even playgrounds with over 3,000 students from all 7 provinces,
            building things, breaking things, and figuring out what really gets
            them excited to learn. Along the way, we started making our own kits
            and digital tools to streamline the learning process, and even built
            a syllabus that works for them instead of the textbook. <br />
            <br /> Now, we use these tools and our experience to run classes
            that feel less like traditional lessons and more like open maker
            spaces. Here, we provide young minds everything they need to grasp
            STEAM fundamentals, see how classroom theories play out in real
            life, and build real problem-solving skills.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg text-[#5E07E1] leading-[1.2vw]">
            Sakar Pathak (Er. Kumar from TWN)
          </h1>
          <p className="text-lg font-medium leading-[1.2vw] text-gray-800">
            CEO, Makit Labs
          </p>
        </div>
        <div className="mt-6">
          <Button0 text={"Know more about us"} />
        </div>
      </div>
    </div>
  );
};
export default About;
