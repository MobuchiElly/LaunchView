'use client'
import { useState, useEffect } from "react";
import {projects} from '../utils/data';

const ProjectList = () => {
    const [isActive, setisActive] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => {
        setisActive(true);
    }, 0);
    return () => clearTimeout(timer);
   }, []);
   
    return(
        <div className={`projects-container ${isActive ? 'projects-container-active' : ''}`}>
            {
                projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt='image' />
                        </div>
                        <div className="project-info">
                            <h2 className="text-black">{project.title}</h2>
                            <p className="text-[#555]">{project.description}</p>
                            <div className="project-links">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#007bff] hover:text-[#0056b3]">Live Demo</a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-green-400">Github Repo</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
   );
};

export default ProjectList;