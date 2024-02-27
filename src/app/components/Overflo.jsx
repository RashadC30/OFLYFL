import overflo from "../assets/images/overflo-03.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
const Overflo = () => {
  const social_media = [{ icon: <FaInstagram /> }, { icon: <FaFacebook /> }];
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView();
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 gap-10 px-7 md:flex-row flex-col items-center"
    >
      <Image
        src={overflo}
        alt=""
        className="md:w-11/12 object-cover flex-1 flex items-center justify-center h-full"
      />
      <div className="flex-1 flex-col">
        <h1 className="text-cyan-400 md:text-6xl text-5xl">Welcome</h1>
        <div>
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-gray-300 font-bold">
            My Name is
          </h1>
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-green-500 font-bold">
            Cherry Clement
          </h1>
        </div>
        <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Mentor
        </h4>
        <a
          className="bg-cyan-400 px-6 py-3 inline-block mt-8 rounded-full cursor-pointer"
          onClick={handleContactClick}
        >
          Connect With Me
        </a>
        <ul className="mt-8 text-3xl flex text-gray-600 gap-5">
          {social_media?.map((icon, i) => (
            <li key={i} className="hover:text-red-600 cursor-pointer">
              {icon?.icon}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Overflo;
