import profilePhoto from '../assets/jignasu_photo_1.jpg';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-blue-950 text-white px-4">
      {/* Profile and Bio */}
      <img
        src={profilePhoto}
        alt="Jignasu Pathak"
        className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-6 shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
      />
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-2">Jignasu <span className='text-blue-600'>Pathak</span></h1>
      <h2 className="text-xl md:text-2xl font-medium mb-4">SDE @ Amazon</h2>
      <p className="mt-2 text-base md:text-lg text-center max-w-xl">
        Building scalable solutions and solving complex problems in the cloud space. Passionate about coding, innovation, and growth.
      </p>
      
      {/* Social Media Links */}
      <div className="flex mt-4">
        <a 
          className="p-2 mx-2 rounded-full transition-colors duration-300" 
          href="https://github.com/Mister-jp" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="opacity-75 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
          </svg>
        </a>
        <a 
          className="p-2 mx-2 rounded-full transition-colors duration-300" 
          href="https://www.linkedin.com/in/jignasu-pathak/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="opacity-75 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
          </svg>
        </a>
        <a 
          className="p-2 mx-2 rounded-full transition-colors duration-300" 
          href="mailto:1jignasu@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg className="opacity-75 hover:opacity-100 transition-opacity duration-300" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
