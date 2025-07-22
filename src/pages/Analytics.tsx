import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { Calendar, Download, Filter, TrendingUp, Users, Clock, Target } from 'lucide-react'

const productivityData = [
  { name: 'Lun', completed: 12, planned: 15 },
  { name: 'Mar', completed: 19, planned: 18 },
  { name: 'Mié', completed: 8, planned: 12 },
  { name: 'Jue', completed: 15, planned: 16 },
  { name: 'Vie', completed: 22, planned: 20 },
  { name: 'Sáb', completed: 5, planned: 8 },
  { name: 'Dom', completed: 3, planned: 5 }
]

const projectStatusData = [
  { name: 'Completados', value: 35, color: '#10B981' },
  { name: 'En Progreso', value: 45, color: '#3B82F6' },
  { name: 'Pendientes', value: 20, color: '#F59E0B' }
]

const teamPerformanceData = [
  { name: 'Ana García', tasks: 28, efficiency: 92 },
  { name: 'Carlos López', tasks: 24, efficiency: 88 },
  { name: 'María Rodríguez', tasks: 31, efficiency: 95 },
  { name: 'Pedro Martín', tasks: 19, efficiency: 85 },
  { name: 'Laura Sánchez', tasks: 26, efficiency: 90 }
]

export function Analytics() {
  const [timeRange, setTimeRange] = useState('7d')

  const kpis = [
    {
      title: 'Productividad General',
      value: '89%',
      change: '+5.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Tareas por Día',
      value: '14.2',
      change: '+2.1',
      trend: 'up',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Tiempo Promedio',
      value: '2.4h',
      change: '-0.3h',
      trend: 'down',
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Colaboración',
      value: '94%',
      change: '+1.8%',
      trend: 'up',
      icon: Users,
      color: 'orange'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Analíticas
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Insights inteligentes sobre productividad y rendimiento del equipo
          </p>
        </div>
        <div className="flex space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="7d">Últimos 7 días</option>
            <option value="30d">Últimos 30 días</option>
            <option value="90d">Últimos 3 meses</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {kpi.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {kpi.value}
                </p>
                <p className={`text-sm mt-1 ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change} vs período anterior
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-${kpi.color}-100 dark:bg-${kpi.color}-900`}>
                <kpi.icon className={`w-6 h-6 text-${kpi.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Productivity Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Productividad Semanal
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="planned" fill="#E5E7EB" name="Planificadas" />
              <Bar dataKey="completed" fill="#3B82F6" name="Completadas" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Project Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Estado de Proyectos
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Team Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Rendimiento del Equipo
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                  Miembro
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                  Tareas Completadas
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                  Eficiencia
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                  Progreso
                </th>
              </tr>
            </thead>
            <tbody>
              {teamPerformanceData.map((member, index) => (
                <tr key={member.name} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">
                    {member.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                    {member.tasks}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      member.efficiency >= 90 
                        ? 'bg-green-100 text-green-800' 
                        : member.efficiency >= 85 
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {member.efficiency}%
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${member.efficiency}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}