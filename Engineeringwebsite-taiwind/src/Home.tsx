import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectsCards } from "./projectcards";
export function HomeComponent() {
    const [index,setIndex]=useState(0);
    function next(){
        if(index<(4-3)){
            setIndex(index+3);

        }

    }
    function prev(){
        if(index>0){
            setIndex(index-3);
        }

    }

    return (
        <>
         <header >
                <div className="relative">
               
                    <img src="/heroimage1.jpg" className="w-full opacity-95 object-cover h-[500px]" />
               
                <ul className="flex justify-end gap-7 absolute top-0 right-0 text-white mr-5px">

             <li> <Link to="/About">About me</Link></li>  
               <li> <Link to="/Skills">Skills</Link></li>
               <li> <Link to="/Projects">Projects</Link></li>
               <li className="pr-4"> <Link to="/Contactus">Contactus</Link></li>
                </ul>
                <div className="absolute text-[50px] text-white font-normal italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <span >Hi there! My name is Alekhya and I'm a</span>
                    <span className="text-darkpink font-semibold"> front-end Developer</span>
                    <div className="ml-50 mt-7" >
                        <button className="bg-darkpink rounded-full px-4 py-3 text-[30px] ">Download CV   </button>
                    </div>
                    
                </div>
                </div>
            </header>
        <div className="  max-w-6xl m-auto px-4">
            
          
                <div className="Aboutme-section flex items-center flex-col gap-5 mt-10">
                    <div className="text-2xl font-bold text-zinc">About Me</div>
                    <div><img src="/arrow-image.png" alt="" className="size-8 my-0" /></div>
                    <div className="max-w-3xl text-center m-auto px-5">
                        <p>I am a motivated and detail-oriented Frontend Developer with a growing foundation in modern web technologies such as React, TypeScript, JavaScript, and Tailwind CSS. I enjoy building responsive and visually appealing user interfaces while continuously learning best practices in web development. I am currently focused on improving my technical skills through hands-on projects and practical experience. </p>
                    </div>
                </div>
                <div className="skills-section flex items-center flex-col mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc">My Skills</div>
                    <div><img src="/arrow-image.png" alt="" className="size-8 my-0" /></div>
                    <div className="flex m-w-3xl gap-5 flex-wrap justify-center">
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">HTML</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">Tailwind css</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">JavaScript</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">TypeScript</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">React</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">Java</div>
                    </div>

                </div>
                <div className="projects-section flex items-center flex-col mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc text-center">My Projects</div>
                    <div className="flex justify-center">
                        <img src="/arrow-image.png" alt="" className="size-8 my-0" />
                    </div>
                    <div className="overflow-hidden relative pt-6"> 
                        <button onClick={prev} className={`absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-arrowpink text-white rounded-full  px-3 py-2 ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>{"<"}</button>
                        <button onClick={next} className={`absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-arrowpink text-white rounded-full px-3 py-2 ${index >= 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}>{">"}</button>


                        <div className={`flex  items-center justify-content transition-transform duration-500 ease-in-out  gap-5`}
                          style={{transform: `translateX(-${index * 33.333}%)`}}>
                            <ProjectsCards  />
                            </div>
                    </div>
                  

                </div>

            
            <footer>
                <div>
                    <div>LinkedIn</div>
                    <div>www.linkedin.com/in/alekhya-puranam</div>
                    


                </div>
                <div>
                    <div>Email</div>
                    <div>alekhyapuranam99@gmail.com</div>

                </div>
                <div>
                    <div>Phone Number</div>
                    <div>+64 0225030383</div>
                </div>
            </footer>

        </div>
           
        </>
    )
}