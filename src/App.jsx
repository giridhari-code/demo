import './App.css';

function App() {
  return (
    <div className="font-mono ml-4 mt-4 max-w-4xl">
      <h1 className="text-6xl text-left font-bold text-blue-900">Giridhari Karmakar</h1>

      <img
        className="w-60 h-64 my-4 border-4 border-black rounded-xl shadow-lg"
        src="/Giridhari_Karmakar.jpeg"
        alt="Giridhari Karmakar"
      />

      <h3 className="text-3xl font-bold mt-6 text-gray-800">You know who I am</h3>
      <p className="text-lg mt-2 text-gray-700">
        Hi! I'm Giridhari Karmakar, a passionate and detail-oriented <strong>Software Engineer</strong> with experience
        in full-stack development. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        I specialize in building responsive web applications using modern technologies.
      </p>

      <p className="text-2xl font-medium mt-6 text-gray-800">
        You are here for... <br />
        <span className="text-gray-700">
          I think you are here to get to know me. The best way is to start with my work.
        </span>
      </p>

      <div className="text-lg mt-6 text-gray-700 leading-relaxed">
        <p className="mt-4">
          When I was in college, I began learning Data Structures and Algorithms using C++.  
          That’s when I came across <strong>Bjarne Stroustrup</strong> — the creator of C++.
        </p>

        <p className="mt-4">
          I’ve been a fan ever since. His philosophy — clean, purposeful, and deeply technical — really resonated with me.  
          His website, 
          <a href="https://www.stroustrup.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline"> stroustrup.com</a>, reflects that same clarity and simplicity.
        </p>

        <p className="mt-4">
          Honestly, I think we’ve made front-end development far more complicated than it needs to be.  
          <br />
          That’s why this homepage is a conscious choice: no flashy design, no bloated frameworks.
        </p>

        <p className="mt-4">
          Just me. My thoughts. My work.  
          And maybe — one of the fastest personal websites on the internet.
        </p>
      </div>

      {/* 
      <div className="mt-6">
        <h4 className="text-2xl font-semibold text-blue-800">Skills</h4>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Frontend:</strong> React, Tailwind CSS, HTML5, CSS3, JavaScript</li>
          <li><strong>Backend:</strong> Node.js, Express, MongoDB, SQL</li>
          <li><strong>Tools & Platforms:</strong> Git, Docker, Firebase, Vercel</li>
          <li><strong>Languages:</strong> JavaScript, TypeScript, Python</li>
        </ul>
      </div> 
      */}

      <div className="mt-6 mb-4">
        <h4 className="text-2xl font-semibold text-blue-800">Contact</h4>
        <p className="text-gray-700 mt-2">
          📧 <a className="text-blue-600 hover:underline" href="mailto:giridhari.001@outlook.com">giridhari.001@outlook.com</a><br />
          {/* 🌐 <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/giridhari-karmakar/" target="_blank" rel="noreferrer">LinkedIn Profile</a><br />
          💼 <a className="text-blue-600 hover:underline" href="https://github.com/giridharikarmakar" target="_blank" rel="noreferrer">GitHub</a> */}
        </p>
      </div>
    </div>
  );
}

export default App;
