import React from 'react'

export default function P() {
  return (
	<main className="min-h-screen bg-black text-white px-6 py-10">
  <h2 className="text-center text-4xl font-bold mb-12 tracking-wide">
    My Projects
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Card */}
    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-4">
        <a href="https://portfoliyo-ot2b.vercel.app/" target="_blank"
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Live Demo
        </a>
        <a href="#" 
          className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition">
          GitHub
        </a>
      </div>

      {/* Content */}
      <div className="p-6 group-hover:blur-sm transition duration-300">
        <h3 className="text-xl font-semibold">Portfolio Website</h3>
        <p className="text-sm text-gray-400 mt-1">HTML, CSS, JavaScript</p>

        <p className="text-sm mt-3 text-gray-300">
          Responsive portfolio showcasing projects, skills, and clean UI design.
        </p>
      </div>
    </div>

    {/* Repeat Cards */}

    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-4">
        <a href="https://todolist-opal-omega.vercel.app/" target="_blank"
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Live Demo
        </a>
        <a href="#" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
          GitHub
        </a>
      </div>

      <div className="p-6 group-hover:blur-sm transition duration-300">
        <h3 className="text-xl font-semibold">Todo App</h3>
        <p className="text-sm text-gray-400 mt-1">React, Node.js</p>
        <p className="text-sm mt-3 text-gray-300">
          Full-stack task manager with CRUD operations and user-friendly UI.
        </p>
      </div>
    </div>

    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-4">
        <a href="https://amazone-clone1-jxwl.vercel.app/" target="_blank"
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Live Demo
        </a>
        <a href="#" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
          GitHub
        </a>
      </div>

      <div className="p-6 group-hover:blur-sm transition duration-300">
        <h3 className="text-xl font-semibold">Amazon Clone</h3>
        <p className="text-sm text-gray-400 mt-1">HTML, CSS, JavaScript</p>
        <p className="text-sm mt-3 text-gray-300">
          E-commerce UI with product listings and cart interface.
        </p>
      </div>
    </div>

    <div className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg">
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center gap-4">
        <a href="https://major-project1-phi.vercel.app/" target="_blank"
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
          Live Demo
        </a>
        <a href="#" className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
          GitHub
        </a>
      </div>

      <div className="p-6 group-hover:blur-sm transition duration-300">
        <h3 className="text-xl font-semibold">Yoga & Meditation</h3>
        <p className="text-sm text-gray-400 mt-1">HTML, CSS, JavaScript</p>
        <p className="text-sm mt-3 text-gray-300">
          Wellness website with clean UI and smooth user experience.
        </p>
      </div>
    </div>

  </div>
</main>
	
  )
}
