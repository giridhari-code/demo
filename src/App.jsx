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