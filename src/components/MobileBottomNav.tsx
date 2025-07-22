import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  FolderOpen, 
  CheckSquare, 
  BarChart3, 
  Users
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Proyectos', href: '/projects', icon: FolderOpen },
  { name: 'Tareas', href: '/tasks', icon: CheckSquare },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Equipo', href: '/team', icon: Users },
]

export function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 sm:hidden safe-area-bottom shadow-lg">
      <nav className="flex justify-around items-center py-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-1 py-2 min-w-0 flex-1 text-xs font-medium transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-6 h-6 mb-1 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                <span className="truncate text-xs">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}