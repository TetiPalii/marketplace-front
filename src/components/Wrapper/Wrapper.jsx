export const Wrapper = ({ children }) => {
  return (
    <section className="w-full pt-5 pb-6">
      <div className=" max-w-[382px] px-[15px] py-0 mx-auto md:min-w-[568px] xl:min-w-[1082px]">
        {children}
      </div>
    </section>
  );
};
