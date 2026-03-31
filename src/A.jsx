import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { IoLogoInstagram } from 'react-icons/io'

export default function ContactUI() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const { name, email, message } = formData

    if (!name || !email || !message) {
      return setError('All fields are required')
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return setError('Invalid email address')
    }
    if (message.length < 10) {
      return setError('Message must be at least 10 characters')
    }

    localStorage.setItem('formData', JSON.stringify(formData))
    setSuccess(true)
    setError('')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-6">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-2xl font-semibold mb-6 text-white">Send Message</h1>

          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 ring-blue-400"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 ring-blue-400"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 ring-blue-400"
            />

            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">Message sent successfully!</p>}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg p-3 text-white font-medium shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white text-black rounded-2xl shadow-xl p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed">
              Want to collaborate, build something amazing, or just say hello? I'm always open to interesting conversations.
            </p>
          </div>

          <div className="flex gap-6 mt-8">
            <a href="https://github.com/ANIKETBOMBLE" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/aniket-bomble-5a5662301/" target="_blank" rel="noopener noreferrer">
              <CiLinkedin className="w-8 h-8 hover:text-blue-600 hover:scale-110 transition-all" />
            </a>
            <a href="https://www.instagram.com/aniket_bomble1/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram className="w-8 h-8 hover:text-pink-500 hover:scale-110 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}