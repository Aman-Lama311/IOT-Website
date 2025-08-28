import Button from "./Button";
import Title0 from "./Title0";

const WhyUs = () => {
  return (
    <div className="px-4 md:px-[8%] py-4 my-10">
      <div className="bg-[#F8F5FE] px-8 py-6 rounded-2xl flex justify-between flex-wrap">
        <div>
          {/* left */}
          <div className="max-w-4xl space-y-4">
            <Title0
              title={"Why Us"}
              text1={"Accomplished"}
              text2={"Teachers"}
            />
            <p className="font-medium leading-[1.1wv] text-gray-800">
               If your teacher can’t explain it without Googling it mid-class,
              you’re doomed. That’s why all our instructors are Pulchowk
              engineers with years of tech and teaching experience. They know
              exactly what to teach you — and more importantly, how to teach you
              .
            </p>
            <div className="mt-8">
              <Button text={"Join our free demo class"} />
            </div>
          </div>
        </div>

        {/* right illustration */}
        <div>
          <img
            src="/assets/Illustration - Delivery _ order, account, transportation, subway, box, shopping.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
