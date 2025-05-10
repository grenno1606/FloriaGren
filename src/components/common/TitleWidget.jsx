function TitleWidget({ children }) {
  return (
    <div>
      <p className="text-[15px] font-semibold tracking-[0.2em] uppercase pb-[15px] relative border-b border-gray-300 sm:text-base">
        {children}
      </p>
    </div>
  );
}
export { TitleWidget };
