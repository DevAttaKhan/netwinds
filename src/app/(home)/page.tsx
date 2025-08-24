import {
  Banner,
  Cta,
  Projects,
  Services,
  WhyUs,
} from "@/components/sections/home";
import { WorkProcess } from "@/components/sections/home/work-process";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <WhyUs />
      <WorkProcess />
      <Cta />
      <Projects />
    </>
  );
};

export default HomePage;
