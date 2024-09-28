import { CalendarIcon } from '@heroicons/react/24/solid';

const Experience = () => {
  const experiences = [
    {
      role: 'SDE at Amazon',
      duration: '2022 - Present',
      description: 'Working on scaling backend systems and improving efficiency.',
      // skills: ['React', 'AWS', 'Backend Systems']
    },
    {
      role: 'Graduate Research Assistant - AI Assurance at Virginia Tech',
      duration: 'Jan 2023 - Present',
      description: 'Conducted research comparing AI explanations to improve human-AI team outcomes.',
      // skills: ['Python', 'AI', 'Statistical Analysis']
    },
    {
      role: 'Graduate Teaching Assistant at Virginia Tech',
      duration: 'Dec 2021 - Dec 2022',
      description: 'Led courses on Information Security and Visualization Analytics.',
      // skills: ['Python', 'Tableau', 'D3.js']
    },
    {
      role: 'Software Development Engineer Intern at Amazon',
      duration: 'May 2022 - Aug 2022',
      description: 'Developed a dashboard and CI/CD pipeline using React and AWS for IoT devices.',
      // skills: ['React.js', 'AWS Lambda', 'CI/CD']
    },
    {
      role: 'Project Intern at Mifa Systems',
      duration: 'May 2019 - Jun 2019',
      description: 'Analyzed feedback from zig circuit using Pandas and MySQL, improved visual components.',
      // skills: ['Pandas', 'MySQL', 'Data Analysis']
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                {/* <BriefcaseIcon className="h-6 w-6 text-blue-600" /> */}
                <h3 className="text-xl font-semibold text-gray-700">{exp.role}</h3>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <CalendarIcon className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-gray-800 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {/* {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
