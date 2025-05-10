function TitleFilter({ children }) {
  return (
    <div className="my-3 flex items-center gap-3 border-l-2 border-l-black py-1.5 pl-3">
      <h2 className="text-[15px] font-semibold tracking-[2px] uppercase sm:text-base">
        {children}
      </h2>
      <span className="bg-gray-300 grow h-[1px]"></span>
    </div>
  );
}
export { TitleFilter };
