import { useEffect, useState } from "react";

export function HeaderComponent() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=>{
         window.addEventListener('scroll', handleScroll);
        function handleScroll(){
           
            if(window.scrollY>520){
                setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    })
    return (
        <>
         <header id="top"  >
            <div className="relative">
               
                    <img src="/heroimage1.jpg" className=" w-full opacity-95 object-cover h-[500px]" />

            <nav  className=" absolute top-0 right-0  mr-5px">
             <ul className="flex gap-5 py-3 pr-5 font-bold">

             <li> <a href="#Aboutme" className="text-white ">About me</a></li>
               <li> <a href="#Skills" className="text-white ">Skills</a></li>
               <li> <a href="#Projects" className="text-white ">Projects</a></li>
               <li className="pr-4"> <a href="#contacts" className="text-white ">Contactus</a></li>
                </ul>
                </nav>               
                
                <div className="absolute text-[50px] text-white font-normal italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <span >Hi there! My name is Alekhya and I'm a</span>
                    <span className="text-darkpink font-semibold"> front-end Developer</span>
                    <div className="ml-50 mt-7" >
                        <button className="bg-darkpink rounded-full px-4 py-3 text-[30px]  transition-transform duration-300 hover:scale-110">
                            <a href="/Alekhya_Resume.pdf" download className="text-white no-underline">
                                Download CV
                            </a>
                        </button>
                    </div>
                    
                </div>
                </div>

                
                
            </header>
             <div className={isScrolled ? "relative sticky top-0 z-50 opacity-100 " : "relative sticky top-0 z-50 opacity-0"}>
               
                   {/* <img src="/heroimage1.jpg" className=" w-full opacity-100 object-cover h-[60px]" /> */}
                    <div className=" w-full opacity-90 object-cover h-[55px] bg-darkpink"></div>

            <nav  className=" absolute top-0 right-0  mr-5px">
             <ul className="flex gap-5 py-3 pr-5 font-bold">

             <li> <a href="#Aboutme" className="text-white ">About me</a></li>
               <li> <a href="#Skills" className="text-white ">Skills</a></li>
               <li> <a href="#Projects" className="text-white ">Projects</a></li>
               <li className="pr-4"> <a href="#contacts" className="text-white ">Contactus</a></li>
                </ul>
                </nav>               
                
            
                </div>
                </>
    )
}