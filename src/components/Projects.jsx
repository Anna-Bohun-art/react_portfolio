import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { RiH5 } from "react-icons/ri";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          {/*<img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
  />*/}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-s drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                
                <img src={content.image} alt={content.title} />
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className="font-bold text-blue font-Poppins mb-2">{content.title}</h4>
                  <h5 className="font-italic text-blue font-Poppins mb-2">{content.description}</h5>
                  <h5 className="font-bold text-blue font-Poppins mb-2">Front-end Stack</h5>
                  <h5 className="font-italic font-Poppins" data-aos="fade-down">
                    {content.stack_frontend}
                  </h5>
                  <h5 className="font-bold text-blue font-Poppins">Back-end Stack</h5>
                  <h5 className="font-italic font-Poppins" data-aos="fade-down">
                    {content.stack_backend}
                  </h5>
                  <button className="font-bold text-gray self-end">
                    <a href={content.link_to}>
                      TRY IT OUT
                    </a>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
