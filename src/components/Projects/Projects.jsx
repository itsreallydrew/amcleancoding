import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import projectList from '../ProjectList/ProjectList';
import '../../css/Projects.css';

const Projects = () => {
	// Video by RODNAE Productions from Pexels
	// Video by Tima Miroshnichenko from Pexels

	return (
		<div className='project-page'>
			{projectList.map((project) => (
				<div className='project-card' key={project.id}>
					<div className='image-container'>
						<img src={project.image} alt='' /><b />
						<h2>{project.title}</h2>
					</div>
					<div className='info'>
						<div className='text-area'>
							<p className='summary'> <span>Summary:</span><br />{project.summary}</p>
							<p className='description'> <span>Description:</span><br />
                            {project.description}</p>
						</div>
							<div className='all-links'>
								<ul className='tags'>
									{project.tags.map((tag, i) => (
										<li className='tag' key={i}>
											{tag}
										</li>
									))}
								</ul>
								<div className='repo-links'>
									<a href={project.frontend}>Frontend</a>
									<a href={project.backend}>Backend</a>
                                    <a href={project.livesite}>Website</a>
								</div>
							</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
