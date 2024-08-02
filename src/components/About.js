import AboutImg from "../assets/about2.png";

export default function About() {
  const config = {
    line1:
      "Hi, My name is T R Shruthika. I am a Full-Stack web developer. I build beautiful websites with React.js and Tailwind CSS.",
    line2:
      "I am proficient in Frontend skills like HTML, CSS, JavaScript, React.js, Tailwind CSS, and many more.",
    line3:
      "In backend, I know Python and am familiar with popular libraries and frameworks such as NumPy, Pandas, PyTorch, TensorFlow.",
  };

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-secondary px-5 py-10 items-center"
    >
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img src={AboutImg} alt="About Me" className="w-[300px]" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white md:items-start">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
