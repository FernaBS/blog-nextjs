import AboutCoverSection from "@/components/AboutCoverSection";
import Skills from "@/components/Skills";
import Link from "next/link";

const About = () => {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="w-full h-auto px-20 pt-5 text-2xl font-bold"> 
        Have a project in mind? Reach out to me 📞 from <Link href='/contact' className="!underline underline-offset-2" >here</Link> and let's make it happen.
      </h2>
    </>
  );
};

export default About;
