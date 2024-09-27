import React from 'react';

function Contact() {
  return (
    <div className="container bg-amber-50 mx-auto py-12">
      {/* Companies I've Worked With */}
      <div className="text-center mb-12">
        <h2 className="font-spicy text-4xl font-bold text-orange-600 mb-4">Companies I've Worked With</h2>
        <p className="text-gray-700">I have had the opportunity to work with a diverse group of companies. Some of the notable companies include:</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <img src="/image/contiki.png" alt="Contiki" className="w-full object-cover" />
        <img src="/image/synchrony.png" alt="Synchrony" className="w-full object-cover" />
        <img src="/image/ocps.png" alt="OCPS" className="w-full object-cover" />
        <img src="/image/CG.png" alt="C&G Auto Center" className="w-full object-cover" />
      </div>

      {/* Education */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="bg-orange-500 text-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-center">EDUCATION</h3>
          <div className="space-y-4">
            <p>🌙 2024: Flatiron — Software Engineering</p>
            <p>🌙 2013-2016: UCF — Mathematics Education</p>
            <p>🌙 2011-2013: Valencia — AA General</p>
          </div>
        </div>

        {/* Technical Skills */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-orange-600 mb-4">TECHNICAL SKILLS</h3>
        <p className="text-gray-700 mb-4">Coding Skills: Basic knowledge of HTML, CSS, JavaScript, Python, SQL</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-black text-white px-4 py-2 rounded-full">Packaging</span>
          <span className="bg-black text-white px-4 py-2 rounded-full">UI/UX Design</span>
          <span className="bg-black text-white px-4 py-2 rounded-full">User Research</span>
          <span className="bg-black text-white px-4 py-2 rounded-full">Virtual Design</span>
        </div>
      </div>

        {/* Experience */}
        <div className="bg-orange-500 text-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-center">EXPERIENCE</h3>
          <div className="space-y-4">
            <p>🌙 2023-2024: Contiki — Tour Manager in Japan</p>
            <p>🌙 2019-2023: Synchrony — Supervisor in Recovery</p>
            <p>🌙 2018-2019: OCPS — Math Teacher</p>
            <p>🌙 2016-2018: C&G Auto Center — Bookkeeper</p>
          </div>
        </div>
      </div>

      

      {/* Hobbies & Interests */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-orange-600 mb-4">HOBBIES & INTERESTS</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <i className="text-4xl block mb-2">✈️</i>
            <p>Traveling</p>
          </div>
          <div>
            <i className="text-4xl block mb-2">📚</i>
            <p>Reading</p>
          </div>
          <div>
            <i className="text-4xl block mb-2">👨‍👩‍👧‍👦</i>
            <p>Family</p>
          </div>
          <div>
            <i className="text-4xl block mb-2">🐕</i>
            <p>Dog Mom</p>
          </div>
        </div>
      </div>

      {/* Contact Me */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-orange-600 mb-4">Contact Me</h3>
        <p className="text-gray-700 mb-4">Please fill out the form below to discuss any work opportunities.</p>
        <form className="space-y-4 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg"></textarea>
          <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
