import { Clock, CheckCircle, MessageSquare, UserPlus, FileText } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'

const activities = [
  {
    id: '1',
    type: 'task_completed',
    icon: CheckCircle,
    user: 'Ana García',
    action: 'completó la tarea',
    target: 'Diseño de mockups principales',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
    color: 'green'
  },
  {
    id: '2',
    type: 'comment',
    icon: MessageSquare,
    user: 'Carlos López',
    action: 'comentó en',
    target: 'Integración API de Pagos',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
    color: 'blue'
  },
  {
    id: '3',
    type: 'user_joined',
    icon: UserPlus,
    user: 'María Rodríguez',
    action: 'se unió al proyecto',
    target: 'Dashboard de Analíticas',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 horas atrás
    color: 'purple'
  },
  {
    id: '4',
    type: 'file_uploaded',
    icon: FileText,
    user: 'Pedro Martín',
    action: 'subió un archivo a',
    target: 'Documentación técnica',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 horas atrás
    color: 'orange'
  },
  {
    id: '5',
    type: 'task_completed',
    icon: CheckCircle,
    user: 'Laura Sánchez',
    action: 'completó la tarea',
    target: 'Revisión de requisitos',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 horas atrás
    color: 'green'
  }
]

export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          Actividad Reciente
        </h3>
        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${
              activity.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
              activity.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
              activity.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900' :
              'bg-orange-100 dark:bg-orange-900'
            }`}>
              <activity.icon className={`w-4 h-4 ${
                activity.color === 'green' ? 'text-green-600 dark:text-green-400' :
                activity.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                activity.color === 'purple' ? 'text-purple-600 dark:text-purple-400' :
                'text-orange-600 dark:text-orange-400'
              }`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 dark:text-white">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {formatDistanceToNow(activity.timestamp, { 
                  addSuffix: true, 
                  locale: es 
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          Ver toda la actividad →
        </button>
      </div>
    </div>
  )
}