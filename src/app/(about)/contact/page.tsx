import ContactForm from "@/components/ContactForm";
import LottieAnimation from "@/components/LottieAnimation";

const Contact = () => {
  return (
    <section className="relative flex justify-center items-center w-full h-[75vh] border-solid border-black border-b-2">
      <div className="relative flex flex-col justify-center items-center w-1/3 h-[100%] border-r-2 border-solid border-black">
        <LottieAnimation />
      </div>
      <div className="flex flex-col justify-center items-start w-2/3 h-auto pt-5 px-15">
        <h1 className="pb-10 text-4xl font-bold text-black capitalize">
          Let's Connect!
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
