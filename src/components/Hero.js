import HeroImg from "../assets/hero.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "Im a Full-stack developer",
    social: {
      twitter: "https://x.com/Sruthika_ramesh?t=F4Oxy0QWBH5ExnROnjx64A&s=08",
      facebook: " https://www.facebook.com/shruthika.ramesh.",
      linkedin: "https://www.linkedin.com/in/shruthikaramesh10",
      instagram:
        "https://www.instagram.com/snazzysruthi_?igsh=YmpjNnZmNmkyYnkz",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center">
      <div className="md:w-1/2 flex flex-col items-start">
        <h1 className="text-white text-6xl font-hero-font">
          Hi,
          <br /> I'm <span className="text-black">TR Shruthika</span>
        </h1>
        <p className="text-2xl text-white mt-4">{config.subtitle}</p>
        <div className="flex mt-4">
          <a href={config.social.twitter} className="pr-5 hover:text-white">
            <AiOutlineTwitter size={40} />
          </a>
          <a href={config.social.facebook} className="pr-5 hover:text-white">
            <AiOutlineFacebook size={40} />
          </a>
          <a href={config.social.linkedin} className="pr-5 hover:text-white">
            <AiOutlineLinkedin size={40} />
          </a>
          <a href={config.social.instagram} className="pr-5 hover:text-white">
            <AiOutlineInstagram size={40} />
          </a>
        </div>
      </div>
      <img className="py-5 md:w-1/3" src={HeroImg} alt="Hero" />
    </section>
  );
}
