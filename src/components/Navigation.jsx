import React from "react"

export default function Navigation() {
  const links = [
    {Home: "/#"},
    {About: "#about"},
    {Projects: "#projects"},
    {Contact: "#contact"},
  ]

  return (
    <header className="header">
      <div className="header__content">
        <a href="/#">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <img
                src="./assets/svg/user-svgrepo-com.svg"
                alt="icon"
                width={100}
                className="home-hero__social-icon"
              />
            </div>
            <div className="header__main-ham-menu-cont">
              <img
                src="./assets/svg/hamburger-svgrepo-com.svg"
                alt="hamburger menu"
                className="header__main-ham-menu"
              />
            </div>
            <span className="header__logo-sub">Alegre Emiliano</span>
          </div>
        </a>
        <div className="header__main">
          <ul className="header__links">
            {links.map((link, index) => (
              <li key={index} className="header__link-wrapper">
                <a href={Object.values(link)} className="header__link">
                  {" "}
                  {Object.keys(link)}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
