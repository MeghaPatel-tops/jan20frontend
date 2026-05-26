import React from 'react'

function About() {
    const Skill = ['Html','Css',"Js",'React','Mnogodb','Nodejs','Express js']
  return (
    <div className='bg-white p-12 m-12 '>
        
        <h2 className='text-4xl text-blue-900 font-bold'>About</h2>
        <div className="details py-5 flex flex-col gap-y-5">
            <p>I am a passionate full-stack software developer with a deep-rooted love for crafting digital solutions that empower and inspire. My journey into the world of software development began with a solid foundation in computer science, which I acquired during my years of dedicated study at Ramrao Adik Institute of Technology, where I earned my Bachleor's in Computer Science degree.</p>
             <p>My educational journey provided me with a strong theoretical understanding, but it's my insatiable curiosity and relentless drive that have fueled my practical expertise. I thrive in the dynamic and ever-evolving tech landscape, constantly updating my skills to stay at the forefront of innovation. As a full-stack developer, I find joy in bringing ideas to life, from conceptualization to deployment. I revel in the challenge of seamlessly connecting the front-end user experience with the robust functionality of the back end. Whether I'm coding in Python, JavaScript, or diving into the intricacies of databases, I approach each project with enthusiasm and precision.</p>
             <p>When I'm not immersed in lines of code, you can find me exploring the latest tech trends, attending hackathons, or contributing to open-source projects. I believe that the tech world is a community, and I'm dedicated to giving back and sharing knowledge whenever I can.</p>
             <div className='flex gap-x-5'>
               {
                   Skill.map((index,i)=>(
                     <button key={i} className='border-1 rounded-full px-5 py-2 border-gray-600'>{index}</button>
                   ))
               }
                
             </div>
        </div>
    </div>
  )
}

export default About