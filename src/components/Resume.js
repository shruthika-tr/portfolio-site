import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  const config = {
    link: "https://image.slidesharecdn.com/ac9bf358-b4c9-4acf-b78b-df999278b914-160510022209/95/mariecriseulloneresume-1-638.jpg?cb=1462846946",
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5"
    >
      <div className="py-5 md:w-1/2 flex justify-center md: justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume
            <a
              className="btn ml-2 px-3 py-1 bg-primary text-white rounded"
              href={config.link}
            >
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
