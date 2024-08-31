import React, { useState, useEffect } from 'react';
import adeel from './assets/images/adeel1.jpeg';

function HomePage() {
  const skills = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentSkill = skills[currentSkillIndex];
      const fullText = isDeleting ? currentSkill.substring(0, displayedText.length - 1) : currentSkill.substring(0, displayedText.length + 1);

      setDisplayedText(fullText);

      if (!isDeleting && fullText === currentSkill) {
        setIsDeleting(true);
        setTypingSpeed(1000); // Pause before deleting
      } else if (isDeleting && fullText === '') {
        setIsDeleting(false);
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Reset typing speed after deleting
      } else if (isDeleting) {
        setTypingSpeed(100);
      }
    };

    const typingTimeout = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed]);

  return (
    <div className='w-screen '>
      <div className='flex flex-row  justify-around items-center my-20'>
        <div className=' bg-black rounded-lg p-10 bg-opacity-40' >
          <h1 className='text-3xl font-bold font-orbitron text-blue-800'>
            Hi, I am Muhammad Adeel <br/> <span className='text-blue-500 font-orbitron'>{displayedText}</span>
          </h1>
        </div>
        <img src={adeel} alt="adeel" width={400} height={400} className='rounded-full'/>
      </div>
    </div>
  );
}

export default HomePage;
