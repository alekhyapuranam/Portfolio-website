import { useEffect, useState } from "react";

export function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        function handleScroll() {

            if (window.scrollY > 60) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <>
            <header id="top"  >
                <div className="relative">

                    <img src="/Engineering-website/heroimage1.jpg" className=" w-full opacity-95 object-cover h-[200px] md:h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" />

                    <nav className={isScrolled? "fixed top-0 right-0 absolute opacity-100 bg-darkpink/90 w-full z-50" : " absolute top-0 right-0  mr-5px" } >
                        <ul className="flex gap-7 py-3 pr-5 font-bold justify-end text-sm sm:text-md md:text-lg lg:text-xl">

                            <li> <a href="#Aboutme" className="text-white ">About me</a></li>
                            <li> <a href="#Skills" className="text-white ">Skills</a></li>
                            <li> <a href="#Projects" className="text-white ">Projects</a></li>
                            <li className="pr-4"> <a href="#contacts" className="text-white ">Contactus</a></li>
                        </ul>
                    </nav>

                    <div className="absolute text-md md:text-[30px] lg:text-[40px] text-white flex flex-col justify-center items-center font-normal italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                        <div>
                            <span >Hi there! My name is Alekhya and I'm a</span>
                            <span className="text-darkpink font-semibold"> front-end Developer</span>
                        </div>
                        <div  >
                            <button className="bg-darkpink rounded-full px-4 py-3 text-sm sm:text-md md:text-[24px] lg:text-[30px]  transition-transform duration-300 hover:scale-110">
                                <a href="/Alekhya_Puranam_Resume.pdf" download className="text-white no-underline">
                                    Download CV
                                </a>
                            </button>
                        </div>

                    </div>
                </div>



            </header>
            
        </>
    )
}