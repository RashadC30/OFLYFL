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
        <p className="text-justify leading-7 w-11/12 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime
          officiis modi, quae, blanditiis accusantium ipsa animi non quisquam
          vero sequi sit quaerat quo a, fugit ex cupiditate nam doloribus!
          Praesentium, vitae sit aliquam consectetur voluptas necessitatibus
          libero id quam velit laboriosam reiciendis voluptate nihil in nemo nam
          eum porro quod autem, explicabo dignissimos dolor itaque? Rerum esse
          modi maxime! Sint vero nobis aspernatur voluptatem dignissimos
          molestias ratione doloremque exercitationem quibusdam expedita non a
          cumque sed esse fugit animi quasi ea cupiditate, error doloribus cum
          fugiat? Impedit et similique quasi?
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
