import React from "react"

export default function Projects() {
  return (
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main">Projects</span>
          <span class="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>

        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <video
                width="100%"
                /* height={240} */ autoPlay
                loop
                muted
                controls={false}
              >
                <source src="./assets/mp4/hexagon.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Project 1</h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a
                href="https://hexagon-techstore.herokuapp.com/"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <video
                width="100%"
                /* height={240} */ autoPlay
                loop
                muted
                controls={false}
              >
                <source
                  src="./assets/mp4/mytinerary_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Project 2</h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a
                href="https://mytinerary-alegre.herokuapp.com/"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont" id="tv_container">
              <video
                width="100%"
                /* height={240} */ autoPlay
                loop
                muted
                controls={false}
              >
                <source src="./assets/mp4/itindev.mp4" type="video/mp4" />
              </video>
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title">Project 3</h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a
                href="https://itindev-mindhub.herokuapp.com/"
                class="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
