const Projects = () => {
  const projectList = [
    // {
    //   name: 'Full-stack Social Media',
    //   // duration: 'May 2023 - Present',
    //   // role: 'Full Stack Developer',
    //   description: `
    //     Engineered an interactive social media platform using Next.js, Flask, and PostgreSQL, embodying full-stack development principles.
    //     Strategically transitioned from direct SQL approach to object-oriented approach using SQLAlchemy, augmenting database management and enhancing code readability.
    //     Currently optimizing front-end user paths to inform backend /get requests planning, underlining a commitment to user-centric design.
    //   `,
    //   skills: ['Next.js', 'Flask', 'PostgreSQL', 'SQLAlchemy'],
    //   link: '#'
    // },
    {
      name: 'Project 1',
      description: 'A web app that does X.',
      skills: ['React', 'AWS', 'Node.js'],
      link: '#'
    },
    {
      name: 'Project 2',
      description: 'A tool to optimize Y.',
      skills: ['Python', 'TensorFlow', 'Pandas'],
      link: '#'
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-700">{project.name}</h3>
              {project.duration && (
                <p className="text-sm text-gray-500 mt-1">{project.duration}</p>
              )}
              {project.role && (
                <p className="text-sm text-gray-500 mb-2 italic">{project.role}</p>
              )}
              <p className="mt-2 text-gray-600">{project.description}</p>

              {/* Skills/Technologies List */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
