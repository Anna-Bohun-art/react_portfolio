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
        
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
        <div class="px-6 max-w-sm rounded overflow-hidden fade-left">
  {/*<img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">*/}
  <div class="py-4">
    {/*<div class="font-bold text-xl mb-2"></div>*/}
    <p className="text-xl font-bold text-gray-700">Hello!</p>
    <p class="text-lg font-bold text-gray-700">
      I'm Anna and I want to become a great full stack developer!
    </p>
    <p class="text-xs text-gray-700 text-base pt-3">
      I completed a bootcamp as a full-stack web developer at WBS Coding School.But to become a great developer, I have to practice a lot. 
      <p class="text-xs text-gray-700 text-base pt-3">My most important advantage is a strong desire to advance my knowledge. Every day I try to learn something new and implement something new immediately.Small but lasting steps are very effective in the end!</p>
    </p>
    <p class="text-xs text-gray-700 text-base pt-3">
      I'm looking for a good place to train with a great team. And I am just as sure that your team is a very good choice for me!
    </p>
  </div>
</div>
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button>
              <a href="https://anna-cv.tiiny.site" target="_blank" className="btn">
                Check my CV
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
