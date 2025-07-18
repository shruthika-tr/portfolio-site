import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  const config = {
    link: "/resume.pdf", // 👈 make sure this is inside the public folder
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5 py-10"
    >
      {/* Left Side: Resume Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mb-5 md:mb-0">
        <img className="w-[300px] rounded shadow-lg" src={ResumeImg} alt="Resume" />
      </div>

      {/* Right Side: Download Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white max-w-md">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-fit font-bold">
            Resume
          </h1>
          <p className="pb-5">
            This is my beginner-level resume created during the early stage of my career. Feel free to view or download it below:
          </p>
          <a
            className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-white hover:text-primary transition duration-300 ease-in-out w-fit"
            href={config.link}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
