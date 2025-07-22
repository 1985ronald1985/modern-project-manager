import { Calendar, User, Flag, MoreHorizontal } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface Task {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  assignee: string
  dueDate: string
  tags: string[]
  project: string
}

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    low: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  }

  const priorityLabels = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja'
  }

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2">
          {task.title}
        </h4>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {task.description}
      </p>

      <div className="flex items-center justify-between mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
          <Flag className="w-3 h-3 inline mr-1" />
          {priorityLabels[task.priority]}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {task.project}
        </span>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3" />
          <span>{task.assignee}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-3 h-3" />
          <span>{format(new Date(task.dueDate), 'dd MMM', { locale: es })}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mt-3">
        {task.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}