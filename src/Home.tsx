import { ContactUs } from "./Contactus";
import { HeaderComponent } from "./header";
import { ProjectsCards } from "./projectcards";
export function HomeComponent() {
  
    

    return (
        <>
            <HeaderComponent />


            <div className=" max-w-full md:max-w-5xl lg:max-w-6xl px-1 md:px-2 lg:px-4 md:mx-20">


                <div id="Aboutme" className="Aboutme-section flex items-center flex-col scroll-mt-[55px] gap-5 mt-10 ">
                    <div className="text-2xl font-bold text-zinc">About Me</div>
                    <div><img src="/Portfolio-website/arrow-image.png" alt="" className="size-8 my-0" /></div>
                    <div className="max-w-3xl text-center m-auto px-5">
                        <p>I am a motivated and detail-oriented Frontend Developer with a growing foundation in modern web technologies such as React, TypeScript, JavaScript, and Tailwind CSS. I enjoy building responsive and visually appealing user interfaces while continuously learning best practices in web development. I am currently focused on improving my technical skills through hands-on projects and practical experience. </p>
                    </div>
                </div>
                
                <div id="Skills" className=" skills-section flex items-center flex-col scroll-mt-[55px] mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc">My Skills</div>
                    <div><img src="/Portfolio-website/arrow-image.png" alt="" className="size-8 my-0" /></div>
                    <div className="@container  w-full">
                    <div className="flex overflow-x-auto scroll-smooth scrollbar-hide w-full   gap-5 px-4 py-4 lg:justify-center">
                        <div className=" transition-transform duration-300  hover:scale-105 w-27 h-27 bg-darkpink px-8 py-8 flex items-center justify-center rounded-full text-white font-bold">HTML</div>
                        <div className=" transition-transform duration-300  hover:scale-105 w-27 h-27 bg-darkpink px-8 py-8 flex items-center justify-center rounded-full text-white font-bold">Tailwind css</div>
                        <div className=" transition-transform duration-300  hover:scale-105 w-27 h-27 bg-darkpink px-8 py-8 flex items-center justify-center rounded-full text-white font-bold">JavaScript</div>
                        <div className=" transition-transform duration-300  hover:scale-105 w-27 h-27 bg-darkpink px-8 py-8 flex items-center justify-center rounded-full text-white font-bold">TypeScript</div>
                        <div className=" transition-transform duration-300  hover:scale-105 w-27 h-27 bg-darkpink px-8 py-8 flex items-center justify-center rounded-full text-white font-bold">React</div>
                        <div className=" transition-transform duration-300  hover:scale-105 w-27 h-27 bg-darkpink px-8 py-8 flex items-center justify-center rounded-full text-white font-bold">Java</div>
                    </div>
                    </div>

                </div>
               
                <div id="Projects" className="projects-section flex items-center flex-col  scroll-mt-[55px] mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc text-center">My Projects</div>
                    <div className="flex justify-center">
                        <img src="/Portfolio-website/arrow-image.png" alt="" className="size-8 my-0" />
                    </div>
                   
                        <div className="overflow-x-auto scrollbar-hide scroll-smooth w-full lg:items-center flex gap-6 py-6 px-4">
        
                            <ProjectsCards />
                        </div>
                    </div>


               
                <div id="contacts" className="contact-section flex items-center flex-col mt-10 gap-5">
                    <div className="text-2xl font-bold text-zinc">Contacts</div>
                    <div><img src="/Portfolio-website/arrow-image.png" alt="" className="size-8 my-0" /></div>
                </div>
                <div className="grid lg:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-6 pt-6">
                    <ContactUs />
                </div>




            </div>
            <footer className="text-center mt-15  bg-darkpink  text-white ">© 2024 Alekhya Puranam. All rights reserved.
                <a href="#top" className="underline cursor-pointer ml-10">Back to Top</a>
            </footer>

        </>
    )
}