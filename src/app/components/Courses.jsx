const Skills = () => {
  return (
    <section
      id="courses"
      className="py-10 bg-gray-800 text-gray-100 text-center"
    >
      <div className="flex justify-center text-4xl font-semibold gap-2">
        <h3>My</h3>
        <h3 className="text-green-500">Misson</h3>
      </div>
      <p className="text-cyan-400 my-3 text-lg">
        To empower 1 million women survivors of childhood trauma and neglect who
        are between 35-45 years old.
      </p>
      <div className="flex justify-center text-2xl font-semibold gap-2">
        <h4>My</h4>
        <h4 className="text-purple-500">Vision</h4>
      </div>
      <p className="flex justify-center text-cyan-400 px-48 text-md">
        As a survivor myself I am committed to assist other survivors in finding
        emotional healing, build self esteem and self confidence using the steps
        that worked for me. Instead of dwelling on feeling unloved, unwanted and
        powerless our program will use her resilience, resourcefulness,
        creativity, determination and courage to empower you and show you that
        you are loveable, desirable, attractive and capable of being in control
        of your life.
      </p>
    </section>
  );
};

export default Skills;
