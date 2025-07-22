import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Calendar,
  BarChart3,
  Bot
} from 'lucide-react'
import { StatsCard } from '../components/StatsCard'
import { RecentActivity } from '../components/RecentActivity'
import { AIInsights } from '../components/AIInsights'
import { ProjectProgress } from '../components/ProjectProgress'

export function Dashboard() {
  const stats = [
    {
      title: 'Tareas Completadas',
      value: '24',
      change: '+12%',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Proyectos Activos',
      value: '8',
      change: '+2',
      trend: 'up' as const,
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Tareas Pendientes',
      value: '16',
      change: '-8%',
      trend: 'down' as const,
      icon: Clock,
      color: 'yellow'
    },
    {
      title: 'Alertas Críticas',
      value: '3',
      change: '+1',
      trend: 'up' as const,
      icon: AlertTriangle,
      color: 'red'
    }
  ]

  return (
    <div className="space-y-3 sm:space-y-6 mobile-container">
      {/* Header */}
      <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            Bienvenido de vuelta. Resumen de productividad.
          </p>
        </div>
        <div className="flex justify-start sm:justify-end">
          <button className="mobile-button bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg flex items-center space-x-2 text-base font-medium shadow-lg">
            <Bot className="w-5 h-5" />
            <span className="hidden sm:inline">Análisis IA</span>
            <span className="sm:hidden">IA</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <AIInsights />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <RecentActivity />
        </motion.div>
      </div>

      {/* Project Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ProjectProgress />
      </motion.div>
    </div>
  )
}