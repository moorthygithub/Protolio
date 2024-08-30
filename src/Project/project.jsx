import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import shopify from '../Components/Assets/logo-color.png';
import taxi from '../Components/Assets/taxi-logo.png';
import form from '../Components/Assets/employee-logo.png';
import firebase from '../Components/Assets/firebase-logo.png';
import amazon from '../Components/Assets/amazon-logo.png';
import weather from '../Components/Assets/weather-logo.png';

function Project() {
  const projects = [
    { image: shopify, title: 'Shopify', description: 'Shopify is an e-commerce platform.',button:'Details',link:'https://main--magshopping.netlify.app/'},
    { image: taxi, title: 'Taxi Booking', description: 'A taxi booking application.',button:'Details',link:'https://main--jazzy-daffodil-b48ffd.netlify.app/booking'},
    { image: form, title: 'Employee Management', description: 'An employee management system.',button:'Details',link:'https://main--employeemanagementformreact.netlify.app/login'},
    { image: firebase, title: 'Firebase', description: 'Using FireBase for login Authentication',button:'Details',link:"https://github.com/moorthygithub/FirebaseAuthentication"},
    { image: amazon, title: 'Amazon Clone', description: 'A clone of the Amazon e-commerce website.',button:'Details',link:'https://github.com/moorthygithub/Amazon-clone' },
    { image: weather, title: 'Weather App', description: 'An application for weather forecasts.',button:'Details',link:'https://main--fetchingweatherapi.netlify.app/' },
  ];

  return (
    <div className="project-container">
      <div>
        <h1 className="tittlename">My</h1>
        <h1 className="titlename2">Projects</h1>
      </div>
      <div className="project-in-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            button={project.button}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
