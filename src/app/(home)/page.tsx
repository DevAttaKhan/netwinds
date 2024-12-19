import {
  Banner,
  Cta,
  Projects,
  Services,
  WhyUs,
} from "@/components/sections/home";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <WhyUs />
      <Projects />
      <Cta />
    </>
  );
};

export default HomePage;
