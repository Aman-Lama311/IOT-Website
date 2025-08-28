const Title = ({ title, text1, text2 }) => {
  return (
    <div className="space-y-1 text-center">
      <p className="text-purple-400 uppercase">{title}</p>
      <h1 className="text-6xl font-semibold">
        {text1} <span className="text-[#5E07E1] font-bold">{text2}</span>
      </h1>
    </div>
  );
};
export default Title;
