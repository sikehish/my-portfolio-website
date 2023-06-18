import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "The Refugee Board",
    description:
      "An online refugee board for refugees to post their status for their family, friends or loved ones back home to check.",
    image: "/ref.jpeg",
    github: "https://github.com/sikehish/The-Refugee-Board",
  },
  {
    name: "Dostify",
    description: "A virtual meeting application which provides safe, secure and reliable virtual space for the users to meet! Tools used: ReactJS, CSS, Firebase,WebRTC APIs",
    image: "/dostify.png",
    github: "https://github.com/sikehish/dostify",
    link: "https://dostify-1.netlify.app/"
  },
  {
    name: "Steadious",
    description:
      "A website to track attendance,CGPA and SGPA, built using reactjs,nodejs,express,mongoDB,css and a bit of tailwind",
    image: "/steadious.png",
    github: "https://github.com/hqasmei/https://github.com/sikehish/steadious",
  },
  {
    name: "precis.io",
    description:
      "A django-html-css based resume builder project created as part of a projectify event ",
    image: "/precis.png",
    github: "https://github.com/sikehish/precis.io",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                        />
                    
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                      </Link>
                      {
                      project.link && <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      }

                    </div>
                    
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection