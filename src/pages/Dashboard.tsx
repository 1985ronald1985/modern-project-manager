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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Bienvenido de vuelta. Aquí tienes un resumen de tu productividad.
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Bot className="w-4 h-4" />
            <span>Análisis IA</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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