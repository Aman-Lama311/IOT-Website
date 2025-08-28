import Button0 from "./Button0";
import Title0 from "./Title0";

const WorkShop = () => {
  return (
    <div className="px-4 md:px-[8%] py-4 my-10">
      <div className="flex justify-between flex-wrap">
        <div>
          {/* left */}
          <div className="max-w-2xl space-y-4">
            <Title0 title={"WorkShop"} text1={"Our"} text2={"WorkShop"} />
            <p className="font-medium leading-[1wv] text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation veniam, quis
              nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation veniam, nostrud
              exercitation veniam, quis nostrud Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation veniam, quis nostrud . <br />
              <br />
              Some points maybe
            </p>
            <div className="mt-8">
              <Button0 text={"Join our free demo class"} />
            </div>
          </div>
        </div>

        {/* right illustration */}
        <div>
          <img src="/assets/Workshop.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default WorkShop;
