import React from "react"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const skills = [
 "HTML","CSS", "JavaScript","ReactJS", "ExpressJS", "Python", "Flask", "Django", "Java", "C", "C++", "Git", "Github", "Docker", "Github Actions", "K8s basics", "AWS", "Azure Basics"
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <p>
              I&#39;m Hisham,a 3rd year CSE student from Mysuru,India.
            </p>    
            <br />
            <p>
            I&#39;m a tech enthusiast, who is adventurous not just in tech but outside of tech too. When I&#39;m not working or learning something, I do photography or speed-cubing or perhaps play a game of rocket league :P.
              I&#39;m passionate about software development and architecture and I&#39;m always on the lookout to incorporate new technologies in the projects I build. Fascinated by tech all day, every day!💪
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item,ind) => {
                return (
                  <p
                    key={ind}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold hover:bg-teal-500 hover:text-white"
                  >
                    {item}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        {/* <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link> */}
      </div>
    </section>
  )
}

export default AboutSection
