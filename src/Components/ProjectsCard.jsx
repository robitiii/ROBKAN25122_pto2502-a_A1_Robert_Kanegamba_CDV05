const ProjectCard = ({ title, description, link, github }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-buttons">
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
        <a href={github} className="github-link" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
