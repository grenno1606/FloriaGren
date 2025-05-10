function TitleFooter({ children }) {
  return (
    <div className="w-full text-center">
      <div className="relative text-lg font-bold inline-block tracking-[1px] pb-3.5 text-black">
        {children}
        <span className="absolute w-1/4 h-px bg-black left-1/2 -translate-x-1/2 bottom-0"></span>
      </div>
    </div>
  );
}
export { TitleFooter };
