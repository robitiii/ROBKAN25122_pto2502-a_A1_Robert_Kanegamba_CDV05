import ProjectCard from './ProjectsCard';

const Projects = () => {
  const projects = [
    {
      title: 'Yebopets Booking  Platform',
      description: 'A platform that allows young dog owners to book trusted and verified pet sitters for their furry friends with ease and confidence.',
      link: 'https://yebopets.co.za/'
    },
    {
      title: 'Website design for a local business',
      description: 'A modern and responsive website designed for a local businesses to showcase their products and attract more customers.',
      link: 'https://robq.online/'
    }
  ];
  return (
    <section id="projects" className="projects-section">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;