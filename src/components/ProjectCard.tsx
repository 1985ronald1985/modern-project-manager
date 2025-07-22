import { Calendar, Users, MoreHorizontal, TrendingUp } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'planning' | 'completed' | 'on-hold'
  progress: number
  dueDate: string
  team: string[]
  priority: 'high' | 'medium' | 'low'
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  viewMode: 'grid' | 'list' | 'calendar'
}

export function ProjectCard({ project, viewMode }: ProjectCardProps) {
  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    planning: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    completed: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    'on-hold': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  }

  const statusLabels = {
    active: 'Activo',
    planning: 'Planificando',
    completed: 'Completado',
    'on-hold': 'En pausa'
  }

  const priorityColors = {
    high: 'border-red-500',
    medium: 'border-yellow-500',
    low: 'border-green-500'
  }

  if (viewMode === 'list') {
    return (
      <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border-l-4 ${priorityColors[project.priority]} border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                {project.name}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]} self-start sm:self-auto mt-1 sm:mt-0`}>
                {statusLabels[project.status]}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm sm:text-base line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 flex-shrink-0" />
                <span>{format(new Date(project.dueDate), 'dd MMM yyyy', { locale: es })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>{project.team.length} miembros</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 flex-shrink-0" />
                <span>{project.progress}% completado</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:ml-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${project.progress}, 100`}
                  className="text-blue-500"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-200 dark:text-gray-700"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                  {project.progress}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border-l-4 ${priorityColors[project.priority]} border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-2 flex-shrink-0">
          <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]} self-start`}>
          {statusLabels[project.status]}
        </span>
        <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{format(new Date(project.dueDate), 'dd MMM', { locale: es })}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-400">Progreso</span>
          <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Users className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{project.team.length} miembros</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
              +{project.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}