// import content
import { useEffect } from "react";
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        
        <div className="pb-16 px-10 pt-1" data-aos="fade-down">
        <div className=" max-w-sm rounded overflow-hidden fade-left">
          <div className="px-10">
            <p className="text-xl font-bold text-gray-700 pt-3">Hello!</p>
            <p className="font-bold text-lg text-gray-700 pt-3">
              I'm Anna and I want to become a great full stack developer!
            </p>
            <p className="text-xs text-gray-700 text-base pt-3">
              I completed a bootcamp as a full-stack web developer at WBS Coding School. But to become a great developer, I have to practice a lot.
            </p>
            <p className="text-xs text-gray-700 text-base pt-3">My most important advantage is a strong desire to advance my knowledge. Every day I try to learn something new and implement something new immediately.Small but lasting steps are very effective in the end!</p>
            <p className="text-xs text-gray-700 text-base pt-3">
              I'm looking for a good place to train with a great team. And I am just as sure that your team is a very good choice for me!
            </p>
          </div>
        </div>
          <div className="mt-10">
            <h2>{hero.title}</h2>
          </div>
          <br />

          <div className="flex justify-end mt-10">
            <button className="mr-10">
              <a href="https://anna-cv.tiiny.site" target="_blank" className="btn">
              CV
              </a>
              </button>
              <button className="mr-10">
              <a href="https://github.com/anna-bohun-art" target="_blank" className="btn">
              Github
              </a>
            </button>
            <button className="mr-10">
              <a href="https://online.fliphtml5.com/kzuzo/plnx/#p=1" target="_blank" className="btn">
              Portfolio
              </a>
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Anna Kladova Bohun"
            className="h-full object-cover"
            style={{ position: "relative", maxHeight: "500px", borderRadius: "25px"}}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
