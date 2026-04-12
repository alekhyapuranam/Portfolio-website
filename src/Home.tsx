import { useState } from "react";
import { ContactUs } from "./Contactus";
import { HeaderComponent } from "./header";
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
         <HeaderComponent />
           

        <div className="  max-w-6xl m-auto px-4">
            
          
                <div id="Aboutme" className="Aboutme-section flex items-center flex-col scroll-mt-[55px] gap-5 mt-10 ">
                    <div className="text-2xl font-bold text-zinc">About Me</div>
                    <div><img src="/Engineering-website/arrow-image.png" alt="" className="size-8 my-0" /></div>
                    <div className="max-w-3xl text-center m-auto px-5">
                        <p>I am a motivated and detail-oriented Frontend Developer with a growing foundation in modern web technologies such as React, TypeScript, JavaScript, and Tailwind CSS. I enjoy building responsive and visually appealing user interfaces while continuously learning best practices in web development. I am currently focused on improving my technical skills through hands-on projects and practical experience. </p>
                    </div>
                </div>
                <div id="Skills" className="skills-section flex items-center flex-col scroll-mt-[55px] mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc">My Skills</div>
                    <div><img src="/Engineering-website/arrow-image.png" alt="" className="size-8 my-0" /></div>
                    <div className="flex m-w-3xl gap-5 flex-wrap justify-center">
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">HTML</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">Tailwind css</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">JavaScript</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">TypeScript</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">React</div>
                        <div className=" transition-transform duration-300  hover:scale-125 w-27 h-27 bg-darkpink px-8 py-5 flex items-center justify-center rounded-full text-white font-bold">Java</div>
                    </div>

                </div>
                <div id="Projects" className="projects-section flex items-center flex-col  scroll-mt-[55px] mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc text-center">My Projects</div>
                    <div className="flex justify-center">
                        <img src="/Engineering-website/arrow-image.png" alt="" className="size-8 my-0" />
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
                <div id="contacts" className="contact-section flex items-center flex-col mt-10 gap-5">
                <div className="text-2xl font-bold text-zinc">Contacts</div>
                    <div><img src="/Engineering-website/arrow-image.png" alt="" className="size-8 my-0" /></div>
                </div>
                <div className="flex justify-center gap-50 pt-6">
                    <ContactUs />
                </div>

           
           

        </div>
         <footer className="text-center mt-15  bg-darkpink  text-white ">© 2024 Alekhya Puranam. All rights reserved.
                <a href="#top"  className="underline cursor-pointer ml-10">Back to Top</a>
            </footer>
           
        </>
    )
}