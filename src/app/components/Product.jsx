import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const Product = () => {
  const products = [
    {
      img: project1,
      name: "Multi Page App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project2,
      name: "Dental App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project3,
      name: "Crypto App",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
    {
      img: project4,
      name: "Admin Dashboard",
      github_link: "https://github.com",
      live_link: "www.google.com",
    },
  ];
  return (
    <section id="products">
      <div className="bg-gray-800">
        <div className="flex justify-center text-4xl font-semibold gap-3">
          <h2 className="text-cyan-400">Why</h2>
          <h2 className="text-white">This</h2>
          <h2 className="text-green-500">Program</h2>
        </div>
        <ul className="flex items-center justify-center py-6 gap-10 flex-wrap">
          <li className="flex flex-col justify-center text-2xl gap-2 text-gray-300">
            <p>1. This program is a safe and confidential space.</p>
            <p>2. This program is not therapy.</p>
            <p>
              3. This program requires the participant to be committed to
              improving her life.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-cyan-400">Products</h3>
      </div>
      <p className="text-gray-600 mt-3 text-lg flex justify-center">
        Online Workshops
      </p>
      <br />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 650: { slidePrevClass: 2 } }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        modules={[Pagination, Autoplay]}
        className="flex max-3xl gap-6 px-5 mx-auto items-center justify-center lg:w-2/3 w-full"
      >
        {products?.map((products, i) => (
          <SwiperSlide
            key={i}
            className="h-fit w-full p-4 bg-slate-400 rounded-xl"
          >
            <Image src={products?.img} alt="" className="rounded-lg" />
            <h3 className="text-xl my-4">{products?.name}</h3>
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
              <a
                href={products?.github_link}
                target="blank"
                rel="noreferrer"
                className="text-cyan-400 bg-purple-500 rounded-full px-2 flex w-32 justify-center"
              >
                github
              </a>
              <a
                href={products?.live_link}
                target="blank"
                rel="noreferrer"
                className="text-cyan-400 bg-purple-500 rounded-full px-2 flex w-32 justify-center"
              >
                Live link
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;
