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
        githubLink: "https://github.com/alekhyapuranam/Ecommerce-Project.git"},
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
            <div key={project.id} className="w-70 h-90 bg-white rounded-lg shadow-md  flex flex-col items-center gap-3  ">
                <img src={project.image} alt={project.title} className="h-3/4 w-full object-cover rounded-lg" />
                <div className="text-zinc font-bold text-lg px-4 py-2">{project.title}</div>
            </div>

        ))}
                   
        </>
    )
       

}

