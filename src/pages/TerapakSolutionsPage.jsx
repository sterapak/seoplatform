import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail } from 'react-icons/fi'

export default function TerapakSolutionsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Terapak Solutions</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            With over 30 years of industry experience and 15 years of hands-on technical expertise, 
            Terapak Solutions delivers proven results across enterprise software development, cloud 
            infrastructure, and AI-powered applications.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            We specialize in building scalable, high-performance solutions that drive business growth 
            and operational efficiency.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Feel free to contact us for work inquiries and to discuss how we can help transform your 
            technology challenges into competitive advantages.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/app/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            <FiMail className="mr-2" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

