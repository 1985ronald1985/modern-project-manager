import { useState } from 'react'
import { X } from 'lucide-react'

export function ProjectFilters() {
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    team: 'all',
    dateRange: 'all'
  })

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({
      status: 'all',
      priority: 'all',
      team: 'all',
      dateRange: 'all'
    })
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
        <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
          Filtros
        </h3>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 self-start sm:self-auto"
        >
          Limpiar filtros
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Estado
          </label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todos</option>
            <option value="active">Activos</option>
            <option value="planning">Planificando</option>
            <option value="completed">Completados</option>
            <option value="on-hold">En pausa</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Prioridad
          </label>
          <select
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todas</option>
            <option value="high">Alta</option>
            <option value="medium">Media</option>
            <option value="low">Baja</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Miembro del equipo
          </label>
          <select
            value={filters.team}
            onChange={(e) => handleFilterChange('team', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todos</option>
            <option value="ana-garcia">Ana García</option>
            <option value="carlos-lopez">Carlos López</option>
            <option value="maria-rodriguez">María Rodríguez</option>
            <option value="pedro-martin">Pedro Martín</option>
            <option value="laura-sanchez">Laura Sánchez</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
            Fecha límite
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todas</option>
            <option value="overdue">Vencidas</option>
            <option value="this-week">Esta semana</option>
            <option value="this-month">Este mes</option>
            <option value="next-month">Próximo mes</option>
          </select>
        </div>
      </div>

      {/* Active filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        {Object.entries(filters).map(([key, value]) => {
          if (value === 'all') return null
          return (
            <span
              key={key}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {key}: {value}
              <button
                onClick={() => handleFilterChange(key, 'all')}
                className="ml-1 hover:text-blue-600 dark:hover:text-blue-300"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )
        })}
      </div>
    </div>
  )
}