import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { pPositions } from "../Constants"
import {useRef, Suspense} from "react"
import { MotionPathPlugin } from "gsap/all"
import {Canvas} from "@react-three/fiber"
import Gear1 from "./models/Gear1"
import Gear2 from "./models/Gear2"
import { PresentationControls, Html, OrbitControls } from '@react-three/drei';
import Lights from "./models/Lights"

//FIGURE OUT HOW TO ALIGN THE FRC
gsap.registerPlugin(MotionPathPlugin)
const Intro = ()=>{

    

    
    useGSAP(()=>{
        const tl = gsap.timeline()
        const tl2 = gsap.timeline()

        const chars = document.querySelectorAll('.clone-container1')
        const chars2 = document.querySelectorAll('.clone-container2')

        
            gsap.set(["#sc6"],{
                yPercent: 200
            })
            gsap.set("#sd6",{
                yPercent: 100
            })

            const roll = gsap.to(["#s6", "#sc6", "#sd6"], {
                repeat: 8,
                duration: 1,
                ease: "none",
                yPercent: "-=200",
                
                
            })
            
            tl2.add(roll,0)
        
        
            gsap.set(["#sc5","#sc7"],{
                yPercent: -200
            })
            gsap.set(["#sd5", "#sd7"],{
                yPercent: -100
            })

            const roll2 = gsap.to(["#s5", "#sc5", "#s7","#sc7", "#sd5", "#sd7"], {
                repeat: 8,
                duration: 1,
                ease: "none",
                yPercent: "+=200",
                
                onComplete: () => {
                    console.log("s5:", gsap.getProperty("#s5", "yPercent"))
                    console.log("sc5:", gsap.getProperty("#sc5", "yPercent"))
                    console.log("sd5:", gsap.getProperty("#sd5", "yPercent"))
                }  
            })
            tl2.add(roll2,0)
        


       
        
        tl.from("#s1",{ opacity: 0, y: 150, duration: 1, rotateX: 180, ease: "back.out(1.5)"})
        
        tl.from("#s2",{ y:-150, duration: 1, stagger: 1 , delay: .25, opacity: 0, ease: "back.out(1.5)"},"<")
        tl.from([".clone-container1",".clone-container2"],{ y: 200, duration:1, opacity: 0},"<")
        
        
        tl.from("#s3",{ opacity: 0, x: -250, duration: 1, rotateZ: 360, delay: .5, ease: "back.out(1.5)" }, "<")
        tl.to(".underline-animation1",{scaleX: 1, duration: 1,},"<")
        tl.from("#s4",{opacity:0, rotateY: 360, ease:"back.out(1.5)", delay: .25}, "<")
        tl.fromTo(".underline-animation3", 
            {
              x: -30,
              color: '#ff0000', 
              scaleX: 0,
              
            },
            {
              x: 0,
              scaleX: 1.75,
              color: '#FFA500', 
              duration: 2,
              ease: "power2.out"
            },"<"
          )
        tl.from("#s8",{ opacity: 0, rotateZ: 120, y: -100,x:-50, duration: 1, ease: "back.out(1.5)"},"<")
        tl.from("#s9",{ opacity: 0, scale: .1, duration: 1, delay: .2, rotateZ: 720, ease: "back.out(1)", x:-300},"<")
        .to(".underline-animation3", {
            color: '#b30f04',
            duration: 3,
            ease: "power1.in", 
            
          }, "<")
        tl.from("#s10",{ opacity: 0, scale: .1, duration: 1, delay: .2, rotateZ: 360, ease: "back.out(1)"},"<")
        tl.to(".underline-animation2",{scaleX: 1, duration: 1,},"<")
        tl.from("#s11",{ rotateZ: 360, x:900, duration: 1.5, delay: .5},"<")
        
        
        tl.to("#s2",{y:-200, delay: 1.5, opacity: 0 },"<")
        .to(".underline-animation3", {
            color: '#000000',
            duration: 5,
            ease: "power1.in",
            
          }, "<");
        tl.from("#gear",{y:-200,duration:1, opacity: 0, ease: "back.out(1.5)", stagger: 1}, "<")
        
        let moveUp = true;
        const mtl = gsap.timeline()  
        mtl.to(tl2, {
            progress: 1,
            duration: 2,
            ease: "power4.inOut",
               
                
        })
        .to(tl2, {
            progress: 0,
            duration: 2,
            ease: "power4.inOut",
            
            onComplete: () =>{
                console.log("s6:", gsap.getProperty("#s6", "yPercent"))
                    console.log("sc6:", gsap.getProperty("#sc6", "yPercent"))
                    console.log("sd6:", gsap.getProperty("#sd6", "yPercent"))
                tl2.kill()

            }
        },"+=.1")
        
        
        gsap.to("#gear",{
            rotateZ: 360,
            repeat: -1,
            duration: 10,
            ease: "linear"
        })
        
    })

    return( // convert the px to vh
        <section id = "intro" className="bg-linear-to-b from-blue-200 to-neutral-200 m-0">
            <div className="absolute h-[50%] w-[50%] top-0 right-0 z-0">

                <Canvas camera={{position: [.5,.5,2],fov: 50}} style={{ width: '100%', height: '100%' }}>
                    
                    <Lights/>
                    <Suspense fallback={<Html><h1 className ="text-white text-3xl uppercase">Loading...</h1></Html>}>
                    <Gear1 scale={100} position = {[1,1,0]} rotation={[0, -Math.PI/3, Math.PI/2]}/>
                    </Suspense>
                    
                    
                </Canvas>
            </div>
            
            <div className = "p-container">
            <div className = "p1">
                <span id = "s1"> R </span>
                
                <div className="o-container">
                    <span id = "s2" > O </span>
                    <img src="/gear.webp" id = "gear"/>
                </div>
                
                
                
                <span id = "s3" className="z-0"> B </span>
                <span id = "s4"> O </span>
                <div className="underline-animation1"></div>
            </div>
            <span className="relative underline-animation3 text-red-600">-</span>
            
            <div className="p2">
                <div className="clone-container1">
                    <span id = "s5"  > D</span>
                    <span id = "sc5" className="text-[#ee1f27]" > F </span>
                    <span id = "sd5"  > D </span>
                </div>
                <div className = "clone-container2">
                    <span id = "s6" > R </span>
                    <span id = "sc6" className="text-white "> R </span>
                    <span id = "sd6" > R </span>
                </div>
                <div className="clone-container1">
                    <span id = "s7"> A </span>
                    <span id = "sc7" className="text-[#0166b5]"> C </span>
                    <span id = "sd7"> A </span>
                </div>
                
                <span id = "s8"> G </span>
                <span id = "s9"> O </span>
                <span id = "s10"> N </span>
                <span id = "s11"> S </span>
                <div className="underline-animation2"></div>
                
            </div>
            

            </div>
            <div className="absolute h-150 w-1/2 left-0 z-51 " style={{ bottom: '-160px'}}>
                <Canvas camera={{position: [-2.5,.5,4],fov: 50}} style={{ position: 'absolute', zIndex: 0 }}>

                <Suspense fallback={<Html><h1 className ="text-white text-3xl uppercase">Loading...</h1></Html>}>
                    <Lights/>
                    <Gear2 scale={100} position = {[-2.5,-.5,0]}rotation={[0, Math.PI/4, Math.PI/2]}/>
                </Suspense>
                </Canvas>
            </div>
            
            
        </section>
    )
}
export default Intro