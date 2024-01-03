import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";
const Contact = () => {
  const contact_info = [
    { icon: <AiOutlineMail />, text: "yourname@gmail.com" },
    { icon: <AiOutlinePhone />, text: "1233455" },
    { icon: <AiFillEnvironment />, text: "yourlocation" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section id="contact" className="py-10 px-3 text-gray-300 text-center mt-8">
      <div className="text-4xl font-semibold flex gap-2 justify-center">
        <h3>Contact</h3>
        <h3 className="text-cyan-400">Me</h3>
      </div>
      <p className="text-gray-300 mt-3 text-lg">Get In Touch</p>
      <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-slate-400 md:p-6 p-2 rounded-lg mx-auto">
        <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your First Name"
            className="bg-purple-500 rounded-md border-none p-2 text-2xl placeholder-cyan-400"
          />
          <input
            type="text"
            placeholder="Your Last Name"
            className="bg-purple-500 rounded-md border-none p-2 text-2xl placeholder-cyan-400"
          />
          <input
            type="Email"
            placeholder="Your Email Address"
            className="bg-purple-500 rounded-md border-none p-2 text-2xl placeholder-cyan-400"
          />
          <textarea
            placeholder="What would you like to say?"
            className="bg-purple-500 rounded-md border-none p-2 text-2xl  placeholder-cyan-400"
            rows={10}
          ></textarea>
          <button className="btn-primary hover:bg-purple-500 w-fit">
            <h3 className="text-2xl text-purple-500 hover:text-gray-300 cursor-pointer">
              Send Message
            </h3>
          </button>
        </form>
        <ul className="flex flex-col gap-7 list-none">
          {contact_info?.map((contact, i) => (
            <li
              key={i}
              className="flex flex-row text-left gap-4 flex-wrap items-center"
            >
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-gray-300 bg-cyan-400 rounded-full">
                {contact?.icon}
              </div>
              <div className="md:text-base text-sm break-words">
                {contact?.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
