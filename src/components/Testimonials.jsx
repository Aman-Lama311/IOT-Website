import Title from "./Title";

const Testimonials = () => {
  return (
    <div className="px-4 md:px-[8%] py-4 mt-20">
      <Title
        title={"Testimonials"}
        text1={"Words from our"}
        text2={"Clients"}
      />
      {/* cards */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center space-y-6 gap-6">
        <div className="min-w-[350px] xl:h-[35vw] rounded-xl relative">
          <img
            className="w-full rounded-xl xl:h-[35vw] object-cover"
            src="https://bradfordcollege.net/wp-content/uploads/2023/06/close-up-portrait-curly-handsome-european-male-570x696.jpg"
            alt=""
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          {/* texts */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-2">
            <div>
              <h1 className="text-lg">Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                quibusdam dignissimos, sint saepe, enim blanditiis
              </p>
            </div>
            <img src="/assets/Frame 146.png" alt="" />
          </div>
        </div>

        <div className="min-w-[350px] xl:h-[35vw] rounded-xl relative">
          <img
            className="w-full rounded-xl xl:h-[35vw] object-cover"
            src="https://bradfordcollege.net/wp-content/uploads/2023/06/close-up-portrait-curly-handsome-european-male-570x696.jpg"
            alt=""
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          {/* texts */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-2">
            <div>
              <h1 className="text-lg">Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                quibusdam dignissimos, sint saepe, enim blanditiis
              </p>
            </div>
            <img src="/assets/Frame 146.png" alt="" />
          </div>
        </div>

        <div className="min-w-[350px] xl:h-[35vw] rounded-xl relative">
          <img
            className="w-full rounded-xl xl:h-[35vw] object-cover"
            src="https://bradfordcollege.net/wp-content/uploads/2023/06/close-up-portrait-curly-handsome-european-male-570x696.jpg"
            alt=""
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          {/* texts */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-10 space-y-2">
            <div>
              <h1 className="text-lg">Name</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
                quibusdam dignissimos, sint saepe, enim blanditiis
              </p>
            </div>
            <img src="/assets/Frame 146.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
