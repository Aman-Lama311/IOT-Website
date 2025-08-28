import { FiChevronsRight } from "react-icons/fi";

const Button0 = ({ text }) => {
  return (
    <div className="bg-white border-2 border-purple-400 w-fit px-7 py-1.5 rounded-full">
      <span className="text-[#5E07E1] flex items-center gap-1.5">
        <p className="font-medium">{text}</p>
        <p className="mt-1">
          <FiChevronsRight size={18} />
        </p>
      </span>
    </div>
  );
};
export default Button0;
