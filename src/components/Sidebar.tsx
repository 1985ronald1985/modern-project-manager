import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FolderOpen, 
  CheckSquare, 
  BarChart3, 
  Users, 
  Settings,
  Bot,
  Calendar,
  MessageSquare,
  X
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Proyectos', href: '/projects', icon: FolderOpen },
  { name: 'Tareas', href: '/tasks', icon: CheckSquare },
  { name: 'Calendario', href: '/calendar', icon: Calendar },
  { name: 'Analíticas', href: '/analytics', icon: BarChart3 },
  { name: 'Equipo', href: '/team', icon: Users },
  { name: 'Chat IA', href: '/ai-chat', icon: Bot },
  { name: 'Comunicación', href: '/communication', icon: MessageSquare },
  { name: 'Configuración', href: '/settings', icon: Settings },
]

interface SidebarProps {
  isMobileMenuOpen: boolean
  onClose: () => void
}

export function Sidebar({ isMobileMenuOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sección de IA Assistant - Desktop */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Asistente IA</span>
            </div>
            <p className="text-sm opacity-90">
              Tu asistente inteligente está listo para ayudarte con análisis predictivo y automatización.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menú</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              <item.icon className="w-6 h-6" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Sección de IA Assistant - Mobile */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-4">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Asistente IA</span>
            </div>
            <p className="text-sm opacity-90">
              Tu asistente inteligente está listo para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}