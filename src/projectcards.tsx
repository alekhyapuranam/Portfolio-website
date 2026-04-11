export function ProjectsCards() {
    type Project = {
        id: number;
        title: string;
        description: string;
        image: string;
        githubLink: string;
        liveLink?: string;
    }
    const projects: Project[] = [
        { id: 1, 
        title: "ChatBot website using React & JS", 
        description: "A responsive chatbot website built with React and JavaScript.which allows users to interact with a virtual assistant that gives built-in answers to built-in questions",
        image: "/chatbot ss.png", 
        githubLink: "https://github.com/alekhyapuranam/chatBot.git",
        liveLink: "https://alekhyapuranam.github.io/chatBot/"
        },
        { id: 2, 
        title: "Ecommerce website (React & JS)", 
        description: "A responsive ecommerce website built with React and JavaScript which allows users to browse products, add items to their cart, and proceed to checkout.",
        image: "/ecommercewebsite ss.png", 
        githubLink: "https://github.com/alekhyapuranam/Ecommerce-Project.git"
        },
        { id: 3,
            title: "Amazon Clone using JS",
            description: "A responsive Amazon clone built with JavaScript that mimics the core functionality of the Amazon shopping experience.",
            image: "/amazon ss.png",
            githubLink: "https://github.com/alekhyapuranam/Amazon-project.git"
        },
        { id: 4,
            title: "Weather App using JS",
            description: "A responsive weather application built with JavaScript that provides users with real-time weather information.",
            image: "/weatherapp ss.png",
            githubLink: "https://github.com/alekhyapuranam/WeatherApp.git"
        }
       
    ]

return(
   <>
        {projects.map((project) => (
            <div key={project.id} className="group w-[calc((100%-2.5rem)/3)] h-90 transition-transform duration-300 hover:-translate-y-4 hover:shadow-2xl flex-shrink-0 bg-lightpink rounded-lg shadow-md  flex flex-col items-center gap-3  ">
              <div className="h-3/4 w-full relative">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover rounded-lg"  />
                <div className="opacity-0 absolute group-hover:opacity-100 transition-opacity bg-white/60 inset-0 "></div>
              </div> 
                <div className="absolute top-0 right-0 m-2 opacity-0 group-hover:opacity-100 transition-opacity transition-transform duration-300 hover:scale-110">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <svg width="50px" height="50px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#9d174d">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                              </g>
                          </g>
                      </g>
                    </svg>
                  </a>
                </div>
                
              <div className="text-zinc font-bold text-lg px-4 py-2">{project.title}</div>
            </div>
        ))}
        </>
   
)
       

}

