const AboutMe = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            Hello! I&apos;m Jignasu Pathak, a Software Development Engineer at Amazon. I have a passion for solving complex problems 
            and building scalable, reliable systems. I enjoy learning new technologies and constantly challenge myself to grow 
            as a developer.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            With a background in full-stack development and cloud computing, I have experience working with Java, Python, AWS, 
            and modern web technologies like React and Node.js. I&apos;m committed to delivering high-quality solutions that positively 
            impact users and businesses.
          </p>
          <a
            href="/path/to/resume.pdf"
            download
            className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  