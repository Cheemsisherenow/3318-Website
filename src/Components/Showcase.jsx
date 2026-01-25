import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { pPositions } from "../Constants"
import {useEffect} from "react"
import { MotionPathPlugin } from "gsap/all"
import {Canvas} from "@react-three/fiber"
import Gear1 from "./models/Gear1"
import Gear2 from "./models/Gear2"
import { PresentationControls, Html, OrbitControls } from '@react-three/drei';
import Lights from "./models/Lights"
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)



const Showcase = () => {
     useEffect(() => {
            const timer = setTimeout(() => {
                ScrollTrigger.refresh() }, 100);
            return () => clearTimeout(timer);
        }, []);
    useGSAP(()=>{

            const timeline =  gsap.timeline({
                
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });
            const timeline2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            })
            timeline.to('.temp img', {

                scale: 10,
                yPercent: -250,
                
                duration: 1,
                ease: "power4.inOut"
                
            });
            
            
            
            timeline.to("#rotgear",{y: '80vh', ease: "power4.in", onComplete: () => {}},"<").to([".temp img"], {opacity: 0}).to([".temp img"],{scale: 0.1})
            timeline.fromTo(".back",{filter: 'brightness(1)'},{filter: 'brightness(0.4)', duration: 1},"<")
            timeline.from("#title",{opacity: 0, y: 300, duration: 1})
            
            
            timeline2.to([".back", "#title"],{opacity: .2, duration: 1})
            timeline2.from(".s1 img",{opacity: 0, x: -300},"<")
            timeline2.from(".side-container1",{opacity: 0, x: 300},"<")
            timeline2.from(".s2 img",{opacity: 0, x: 300})
            timeline2.from(".side-container2",{opacity: 0, x: -300},"<")
           
            

            gsap.to("#rotgear",{
                rotation: 360,
                repeat: -1,
                duration: 4,
                transformOrigin: "center center",
                ease: "none"
            })
            
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }});
    return(
        <>
        
        <section id = "showcase" className=" relative z-50">
            <div className=""> 
               
                <img src="/alliance.jpg" className="back"/>
                <div className="absolute top-[50%] left-[50%] w-full -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" id="title">
                    <h1 className="text-center " id="title"> Welcome to First Robotic Competition (FRC) </h1> 
                    <h2> Team 3318, the Robodragons!</h2>
                </div>
                    <div className="temp">
                        <div className="mask" > 
                            <img src="/3318mask.png" className="w-full h-full"/>
                        </div>
                        <div id="gear-container" className="absolute flex justify-center bottom-[-5%] left-[50%] h-[42%] w-[70%] z-20 -translate-x-1/2">
                            <img id = "rotgear" src="/gear3.png" className="relative  "/>
                        </div>
                    </div>
            </div>
            
            
            
        </section> 
        <div className="content">  
        {/*} <div className="section1">
             
                 <h2 className="m-5">About us</h2>
                     <div className="inner-container">
                         <div className=" p-5 rounded-[22px] max-w-[60%]">
                             <h3 className="shrink ">We are located in 
                                 <span> {" "}970 McElvaney Ln NW, Lawrenceville, GA 30044 {" "}</span>
                                     at the 
                                 <span> {" "} Gwinnett School of Mathematics, Science, and Technology (GSMST), the #1 high school in the state of Georgia.{" "}</span>
                                     Each year our team consisted of the most commited and passionate students come together to design, build, and compete with a bot suited to different First Robotics Compeition's challenges.
                             </h3>
                         </div>
                         <div className=" w-[30%] p-5 mask-r-from-50% ">
                         <div className="aspect-square w-full max-w-[300px] rounded-full shadow-[8px_12px_8px_2px_rgba(0,0,0,.4)] overflow-hidden">
                             <img src="/tharun.png" className="h-full w-full "/>
                         </div>
                             
                         </div>            
                     </div> 
         </div> */}
         <div className="relative w-full h-full overflow-hidden">
         <div className="s1">
             <img src="/3318bot1.jpeg" className=" left-0 w-3/4  mask-r-from-50%"/>
             <div className="side-container1">
                 <h2> About Us</h2>
                 <h3 >We are located in 
                     <span> {" "}XXXXX {" "}</span> 
                     at the 
                     <span> {" "} XXXXX,  {" "}</span> the
                     <span> {" "} #X {" "}</span> high school in the state of Georgia.
                     Each year our team consisted of the most commited and passionate students come together to design, build, and compete with a bot suited to different First Robotics Compeition's challenges.
                 </h3>
             </div>
         </div>
         </div>
         <div className="relative w-full h-full overflow-hidden">
         <div className="s2">
             <img src="/winning.jpg" className="absolute right-0 w-3/4 mask-l-from-70%"/>
             <div className="side-container2">
                 <h2> 2025 Competition</h2>
                 <h3> Qualified for the 
                     <span className="text-[#0403e4]">
                         {" "} 2025 Worlds championship {" "}
                     </span>
                     in FIRST Robotics
                     </h3>

                     <h3> Won the FIRST Robotics 
                     <span className="text-[#0403e4]">
                         {" "} Peachtree District 2025 championship, {" "}
                     </span>
                         placing in the top rankings
                     </h3>
             </div>

         </div>
         </div>

         {/*<div className="section2">
             
             
                 
                     <div className="inner-container">
                     <div className=" w-[30%] p-5 ">
                         <img src="/tharun.png" className="h-full w-full rounded-full"/>
                     </div> 
                         <div className=" p-5 rounded-[22px] max-w-[60%]">
                             <h3> Qualified for the 
                                 <span className="text-[#0403e4]">
                                 {" "} 2025 Worlds championship {" "}
                                 </span>
                                 in FIRST Robotics
                             </h3>
                             <h3> Won the FIRST Robotics 
                                 <span className="text-[#0403e4]">
                                     {" "} Peachtree District 2025 championship, {" "}
                                 </span>
                                 placing in the top rankings
                             </h3>
                         </div>
                                    
                     </div>
         </div>  */}
              
         
         
     </div> 
     </> 
        



        

    )
}
export default Showcase