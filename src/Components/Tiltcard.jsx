import {React, useRef} from 'react'

const Tiltcard = ({ children, className=""}) => {
        const cardRef = useRef(null);
      
        const handleMouseMove = (e) => {
          const card = cardRef.current
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width/2
          const y = e.clientY - rect.top - rect.height/2
          const rotateX = (y / rect.height) * -15
          const rotateY = (x / rect.width) * 15
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        };
        const handleMouseLeave = () => {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
          };
  return (
    <div 
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export default Tiltcard
