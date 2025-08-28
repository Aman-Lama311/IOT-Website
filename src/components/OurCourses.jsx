import Button0 from "./Button0";
import Title from "./Title";

const OurCourses = () => {
  return (
    <div className="px-4 md:px-[8%] py-4 my-10">
      <div>
        <Title title={"Our Courses"} text1={"Find the"} text2={"right plan"} />
      </div>

      {/* cards */}
      <div className="max-w-5xl mx-auto h-auto mt-10 flex justify-evenly flex-wrap">
        {/* 1st */}
        <div className="w-[300px] overflow-hidden bg-[#FCFCFC] border border-[#f4e8f4] rounded-3xl relative shadow-xl">
          <div className="flex flex-col gap-10 px-5 py-16">
            {/* pricing */}
            <div>
              <p className="text-[#c6afe6] font-medium">21.2k Students</p>
              <h1 className="text-4xl font-semibold">Professional</h1>
              <p className="text-[#c6afe6] font-medium">
                <span className="text-[#5E07E1] font-bold text-lg">$25.45</span>
                /month
              </p>
            </div>
            {/* features */}
            <div className="space-y-2">
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
              <span className="flex items-center gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>
                  Explore more about the plan Some <br />
                  features here
                </p>
              </span>
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
            </div>
            {/* button */}
            <div className="mb-6">
              <Button0 text={"Explore more for plan"} />
            </div>
          </div>
          {/* wave image */}
          <div className="absolute bottom-0">
            <img
              className="object-cover"
              src="src\assets\Group 42.png"
              alt=""
            />
          </div>
        </div>
        {/* 2nd */}
        <div className="w-[300px] overflow-hidden bg-[#FCFCFC] border border-[#f4e8f4] rounded-3xl relative shadow-xl">
          <div className="flex flex-col gap-10 px-5 py-16">
            {/* pricing */}
            <div>
              <p className="text-[#c6afe6] font-medium">21.2k Students</p>
              <h1 className="text-4xl font-semibold">Professional</h1>
              <p className="text-[#c6afe6] font-medium">
                <span className="text-[#5E07E1] font-bold text-lg">$25.45</span>
                /month
              </p>
            </div>
            {/* features */}
            <div className="space-y-2">
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
              <span className="flex items-center gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>
                  Explore more about the plan Some <br />
                  features here
                </p>
              </span>
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
            </div>
            {/* button */}
            <div className="mb-6">
              <Button0 text={"Explore more for plan"} />
            </div>
          </div>
          {/* wave image */}
          <div className="absolute bottom-0">
            <img
              className="object-cover"
              src="src\assets\Group 42 (1).png"
              alt=""
            />
          </div>
        </div>
        {/* 3rd */}
        <div className="w-[300px] overflow-hidden bg-[#FCFCFC] border border-[#f4e8f4] rounded-3xl relative shadow-xl">
          <div className="flex flex-col gap-10 px-5 py-16">
            {/* pricing */}
            <div>
              <p className="text-[#c6afe6] font-medium">21.2k Students</p>
              <h1 className="text-4xl font-semibold">Professional</h1>
              <p className="text-[#c6afe6] font-medium">
                <span className="text-[#5E07E1] font-bold text-lg">$25.45</span>
                /month
              </p>
            </div>
            {/* features */}
            <div className="space-y-2">
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
              <span className="flex items-center gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>
                  Explore more about the plan Some <br />
                  features here
                </p>
              </span>
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
              <span className="flex gap-2">
                <img className="w-6" src="src\assets\check-circle.png" alt="" />
                <p>Some features here</p>
              </span>
            </div>
            {/* button */}
            <div className="mb-6">
              <Button0 text={"Explore more for plan"} />
            </div>
          </div>
          {/* wave image */}
          <div className="absolute bottom-0">
            <img
              className="object-cover"
              src="src\assets\Group 42 (2).png"
              alt=""
            />
          </div>
        </div>
        {/* end card */}
      </div>
    </div>
  );
};
export default OurCourses;
