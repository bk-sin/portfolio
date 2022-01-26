import React from "react"

export default function Hero() {
  const socials = [
    {src: "./assets/png/linkedin-ico.png", href: "#"},
    {src: "./assets/png/github-ico.png", href: "#"},
    {src: "./assets/png/twitter-ico.png", href: "#"},
    {src: "./assets/png/yt-ico.png", href: "#"},
    {src: "./assets/png/insta-ico.png", href: "#"},
  ]
  return (
    <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, My name is John Doe</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg">
            Projects
          </a>
        </div>
      </div>
      <div class="home-hero__socials">
        {socials.map((social) => (
          <div class="home-hero__social">
            <a href={social.href} class="home-hero__social-icon-link">
              <img src={social.src} alt="icon" class="home-hero__social-icon" />
            </a>
          </div>
        ))}
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </section>
  )
}
