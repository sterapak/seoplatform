import React from 'react'
import { FiMail } from 'react-icons/fi'

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-8">
          Have questions or want to learn more? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMail className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-6">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:steve@terapak.com"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
            >
              <FiMail className="mr-2" />
              steve@terapak.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

