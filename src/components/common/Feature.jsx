function Feature({ icon, children }) {
  return (
    <div className="flex flex-col justify-center items-center py-5 border border-gray-300 my-2.5">
      <div className="text-4xl text-pink-dark mb-5">{icon}</div>
      <p className="text-xs uppercase tracking-[3px] font-medium text-black">
        {children}
      </p>
    </div>
  );
}
export { Feature };
