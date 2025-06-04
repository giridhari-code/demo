import './App.css';
import React from 'react';

function App() {
  return (
    <div className="font-mono px-6 py-8 max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold text-blue-900 mb-10">Giridhari Karmakar</h1>

      {/* Profile & SVG Row */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Image */}
        <img
          className="w-60 h-64 rounded-xl shadow-lg object-cover"
          src="/Giridhari_Karmakar.jpeg"
          alt="Giridhari Karmakar"
        />

        {/* SVG Container - Adjusted for flexbox and relative positioning */}
        <div className="svg-container relative h-64 flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 200"
            preserveAspectRatio="xMidYMid meet"
          >

            {/* Paths converging towards the right */}
            <path
              d="M0 100 C100 50 300 0 700 100"
              className="animated-path path-1"
              stroke="red"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 110 C100 60 300 10 700 100"
              className="animated-path path-2"
              stroke="blue"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 90 C100 40 300 -10 700 100"
              className="animated-path path-3"
              stroke="green"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 80 C100 30 300 -20 700 100"
              className="animated-path path-4"
              stroke="orange"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 120 C100 70 300 20 700 100"
              className="animated-path path-5"
              stroke="purple"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 70 C100 20 300 -30 700 100"
              className="animated-path path-6"
              stroke="brown"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 130 C100 80 300 30 700 100"
              className="animated-path path-7"
              stroke="teal"
              strokeWidth="3"
              fill="none"
            />
             <path
              d="M0 140 C100 90 300 40 700 100"
              className="animated-path path-8"
              stroke="pink"
              strokeWidth="3"
              fill="none"
            />
             <path
              d="M0 60 C100 10 300 -40 700 100"
              className="animated-path path-9"
              stroke="lime"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 50 C100 0 300 -50 700 100"
              className="animated-path path-10"
              stroke="darkblue"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 150 C100 100 300 50 700 100"
              className="animated-path path-11"
              stroke="gray"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0 160 C100 110 300 60 700 100"
              className="animated-path path-12"
              stroke="cyan"
              strokeWidth="3"
              fill="none"
            />


            {/* The "Click Me" button inside the SVG container */}
            <foreignObject x="700" y="80" width="100" height="50">
<button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              Click Me
</button>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="mt-10 text-gray-800">
        <h3 className="text-3xl font-bold">You know who I am</h3>
        <p className="text-lg mt-2 text-gray-700 max-w-3xl">
          Hi! I'm Giridhari Karmakar, a passionate and detail-oriented <strong>Software Engineer</strong> with experience
          in full-stack development. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          I specialize in building responsive web applications using modern technologies.
        </p>

        <p className="text-2xl font-medium mt-6">
          You are here for... <br />
          <span className="text-gray-700">
            I think you are here to get to know me. The best way is to start with my work.
          </span>
        </p>

        <div className="text-lg mt-6 leading-relaxed">
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
      </section>

      {/* Contact Section */}
      <div className="mt-10 mb-4">
        <h4 className="text-2xl font-semibold text-blue-800">Contact</h4>
        <p className="text-gray-700 mt-2">
          📧 <a className="text-blue-600 hover:underline" href="mailto:giridhari.001@outlook.com">giridhari.001@outlook.com</a>
        </p>
      </div>
    </div>
  );
}

export default App;