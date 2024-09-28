import { CodeBracketIcon, ServerIcon, CloudIcon, CpuChipIcon, WrenchIcon } from '@heroicons/react/24/solid';

const Skills = () => {
  const skillCategories = {
    "Frontend": {
      icon: <CodeBracketIcon className="h-6 w-6 text-blue-600" />,
      skills: ['ReactJs', 'Typescript', 'JavaScript', 'D3.Js', 'HTML', 'CSS', 'Bootstrap', 'AWS-Amplify', 'Tableau']
    },
    "Backend": {
      icon: <CodeBracketIcon className="h-6 w-6 text-green-600" />,
      skills: ['Python', 'Node.js', 'Java', 'API-Gateway', 'AWS-Lambda']
    },
    "Database": {
      icon: <ServerIcon className="h-6 w-6 text-red-600" />,
      skills: ['DynamoDB', 'MongoDB', 'SQL', 'PostgreSQL', 'No-SQL']
    },
    "Cloud": {
      icon: <CloudIcon className="h-6 w-6 text-yellow-600" />,
      skills: ['AWS (Certified)', 'GCP', 'Azure']
    },
    "Machine Learning": {
      icon: <CpuChipIcon className="h-6 w-6 text-purple-600" />,
      skills: ['Tensorflow', 'PyTorch', 'Numpy', 'Pandas', 'Matplotlib']
    },
    "Tools": {
      icon: <WrenchIcon className="h-6 w-6 text-indigo-600" />,
      skills: ['Git', 'AWS-CDK', 'Google-OR-Tool']
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(skillCategories).map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                {skillCategories[category].icon}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">{category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 md:gap-4">
                {skillCategories[category].skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="bg-blue-100 text-gray-950 py-2 px-3 md:px-4 rounded-full text-xs md:text-sm font-medium shadow hover:bg-blue-200 transition duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
