import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FiHome, FiUsers, FiMail, FiMenu } from 'react-icons/fi'

export default function AppShell() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 text-white flex flex-col">
        {/* Logo */}
        <div className="px-6 py-4 flex-shrink-0">
          <h1 className="text-xl font-bold">
            <span className="text-green-600">Search Engine</span>{' '}
            <span className="text-white">Optimization AI</span>
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 space-y-2">
          <NavLink
            to="/app/seoplatform"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`
            }
          >
            <FiHome className="mr-3" />
            SEOPlatform
          </NavLink>
          <NavLink
            to="/app/terapak-solutions"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`
            }
          >
            <FiUsers className="mr-3" />
            Terapak Solutions
          </NavLink>
          <NavLink
            to="/app/contact"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition ${
                isActive
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-800'
              }`
            }
          >
            <FiMail className="mr-3" />
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu icon */}
        <div className="px-4 py-3 md:hidden">
          <FiMenu size={24} className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-white">
        <header className="h-16 border-b px-6 flex items-center shadow-sm">
          <h1 className="text-xl font-semibold text-green-600">SEO Platform</h1>
        </header>
        <main className="p-8 flex-1 overflow-auto"><Outlet /></main>
      </div>
    </div>
  )
}
