import { Calendar, Users, TrendingUp } from 'lucide-react'

const projects = [
  {
    id: '1',
    name: 'Rediseño App Móvil',
    progress: 65,
    dueDate: '15 Feb 2025',
    team: 3,
    status: 'on-track',
    tasks: { completed: 12, total: 18 }
  },
  {
    id: '2',
    name: 'API de Pagos',
    progress: 40,
    dueDate: '1 Mar 2025',
    team: 2,
    status: 'at-risk',
    tasks: { completed: 8, total: 20 }
  },
  {
    id: '3',
    name: 'Dashboard Analíticas',
    progress: 15,
    dueDate: '10 Abr 2025',
    team: 3,
    status: 'planning',
    tasks: { completed: 3, total: 25 }
  }
]

export function ProjectProgress() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Progreso de Proyectos
        </h3>
        <TrendingUp className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-100 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900 dark:text-white">
                {project.name}
              </h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'on-track' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                project.status === 'at-risk' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}>
                {project.status === 'on-track' ? 'En tiempo' :
                 project.status === 'at-risk' ? 'En riesgo' :
                 'Planificando'}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.dueDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.team} miembros</span>
              </div>
              <div>
                <span>{project.tasks.completed}/{project.tasks.total} tareas</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Progreso</span>
                <span className="font-medium text-gray-900 dark:text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    project.status === 'on-track' ? 'bg-green-500' :
                    project.status === 'at-risk' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          Ver todos los proyectos →
        </button>
      </div>
    </div>
  )
}