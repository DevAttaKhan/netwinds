import { WHY_US } from "./data";

export const WhyUs = () => {
  return (
    <section className="bg-[#f1f1f1] py-10 md:py-14 lg:py-36">
      <div className="container flex gap-14 flex-col md:flex-row justify-between">
        <div className="left w-full relative">
          <div className="static md:sticky md:top-36 text-center md:text-left">
            <h2 className="gradient-heading--stroked !leading-tight  px-1 font-primary font-bold text-3xl md:text-4xl lg:text-[64px] max-w-[735px] ">
              {WHY_US.heading}
            </h2>
            <p className="text-xl mt-2 md:mt-5 lg:mt-8 max-w-[530px] mx-auto md:mx-none w-full">
              {WHY_US.subheading}
            </p>
          </div>
        </div>
        <div className="right">
          {WHY_US.features.map((el) => (
            <div
              key={el.id}
              className="flex flex-col  max-w-[350px] md:max-w-none  mx-auto shadow-service md:shadow-none py-8 px-5 rounded-3xl md:flex-row items-center md:items-start gap-10 mb-20 text-center md:text-left"
            >
              <div className="w-12">
                <el.Icon />
              </div>
              <div>
                <h5 className="gradient-heading  font-primary mb-2 text-2xl md:text-3xl lg:text-4xl font-bold">
                  {el.title}
                </h5>
                <p className="font-secondary text-base md:text-xl lg:text-2xl">
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
