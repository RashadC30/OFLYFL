import aboutpic from "../assets/images/About-Pic.png";
import Image from "next/image";

const About = () => {
  const Info = [
    { text: "Years experience", count: "01" },
    { text: "projects completed", count: "10" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-4xl font-semibold mt-8 flex justify-center gap-2">
        <h3>About</h3>
        <h3 className="text-cyan-400">Me</h3>
      </div>
      <p className="text-gray-400 text-center font-semibold">Who Am I</p>
      <div className="flex flex-col items-center md:gap-6 gap-12 max-2-6xl mx-auto text-gray-300 mt-5">
        <Image
          src={aboutpic}
          alt=""
          className="md:w-1/2 object-cover flex-1 flex items-center justify-center h-full"
        />
        <p className="text-justify leading-7 w-1/2 mx-auto">
          Cherry is the mother of 4 natural children and 3 adopted children. She
          is a retired registered nurse and nursing instructor for over 20
          years. She fostered children with challenging medical needs for over
          12 years. She is a survivor of childhood trauma and has worked with
          young children separated from their families and traumatized, which
          gave her other insights to pain and healing. She has authored a book
          about her journey "Breaking Free and Loving Yourself."
        </p>
        <ul className="mt-10 flex items-center justify-center md:gap-48 gap-6">
          {Info?.map((content, i) => (
            <li key={i} className="flex md:flex-row md:gap-2">
              <div className="flex-col">
                <div className="flex">
                  <h3 className="md:text-4xl text-2xl font-semibold text-gray-600">
                    {content?.count}
                  </h3>
                  <h3 className="text-cyan-400 font-bold text-2xl">+</h3>
                </div>
                <h3 className="md:text-base text-xs">{content?.text}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
