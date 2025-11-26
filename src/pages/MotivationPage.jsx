import React from 'react'
import { Link } from 'react-router-dom'
import { FiCode, FiDatabase, FiCloud, FiZap, FiShield, FiArrowRight } from 'react-icons/fi'

export default function MotivationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">SEO Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/explore"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Explore
              </Link>
              <Link
                to="/explore"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto space-y-12 py-8 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Motivation</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            We built SEO Platform to solve a critical problem facing Shopify store owners: 
            the complexity and time required to maintain effective SEO strategies. Traditional 
            SEO tools are either too expensive, too complicated, or don't integrate seamlessly 
            with Shopify's ecosystem.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Our mission is to democratize SEO for e-commerce businesses by providing 
            AI-powered tools that automate optimization, track performance, and deliver 
            actionable insights—all at a fraction of the cost of enterprise solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            As a team of AI Engineers, we're also using this project to take our AI Code Generation 
            skills to the next level. By building real-world solutions with modern AI tools, we're 
            pushing the boundaries of what's possible with AI-assisted development.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
            Our long-term goal is to create more tightly coupled SEO solutions specifically 
            designed for e-commerce platforms, providing seamless integration and superior 
            performance optimization.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Toolset</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FiCode className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">React & Vite</h3>
            <p className="text-gray-600">
              Modern frontend framework for fast, responsive user interfaces. 
              Built with React 18 and Vite for optimal performance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <FiDatabase className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Supabase</h3>
            <p className="text-gray-600">
              Open-source Firebase alternative providing PostgreSQL database, 
              authentication, and real-time subscriptions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <FiCloud className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-600">
              Scalable cloud architecture ensuring high availability and 
              performance for our users worldwide.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <FiZap className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
            <p className="text-gray-600">
              Advanced AI algorithms for keyword research, content optimization, 
              and predictive analytics.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <FiShield className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Privacy</h3>
            <p className="text-gray-600">
              Enterprise-grade security with encryption, secure API integrations, 
              and GDPR compliance.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <FiCode className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Shopify Integration</h3>
            <p className="text-gray-600">
              Native Shopify app with seamless API integration for real-time 
              product and store data synchronization.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Open Source Commitment</h3>
        <p className="text-gray-700">
          We believe in transparency and community-driven development. Many of our 
          core tools and libraries are open source, and we contribute back to the 
          communities that make our platform possible.
        </p>
      </div>

      <div className="text-center pt-8">
        <Link
          to="/explore"
          className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
        >
          Explore Capabilities
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
      </div>
    </div>
  )
}

