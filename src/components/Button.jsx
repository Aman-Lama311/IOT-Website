import { FiChevronsRight } from "react-icons/fi";

const Button = ({ text }) => {
  return (
    <div className="bg-[#5E07E1] w-fit px-7 py-1.5 rounded-full">
      <span className="text-white flex items-center gap-1.5">
        <p>{text}</p>
        <p className="mt-1">
          <FiChevronsRight size={18} />
        </p>
      </span>
    </div>
  );
};
export default Button;
