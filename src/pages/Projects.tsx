import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Filter, Search, Grid, List, Calendar } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectFilters } from '../components/ProjectFilters'
import { CreateProjectModal } from '../components/CreateProjectModal'

export function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'calendar'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const projects = [
    {
      id: '1',
      name: 'Rediseño de la App Móvil',
      description: 'Modernización completa de la interfaz de usuario',
      status: 'active',
      progress: 65,
      dueDate: '2025-02-15',
      team: ['Ana García', 'Carlos López', 'María Rodríguez'],
      priority: 'high',
      tags: ['UI/UX', 'Mobile', 'Design']
    },
    {
      id: '2',
      name: 'Integración API de Pagos',
      description: 'Implementación de múltiples métodos de pago',
      status: 'active',
      progress: 40,
      dueDate: '2025-03-01',
      team: ['Pedro Martín', 'Laura Sánchez'],
      priority: 'medium',
      tags: ['Backend', 'API', 'Payments']
    },
    {
      id: '3',
      name: 'Dashboard de Analíticas',
      description: 'Panel de control con métricas en tiempo real',
      status: 'planning',
      progress: 15,
      dueDate: '2025-04-10',
      team: ['Roberto Kim', 'Elena Vega', 'Diego Torres'],
      priority: 'low',
      tags: ['Analytics', 'Dashboard', 'Data']
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Proyectos
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestiona y supervisa todos tus proyectos en un solo lugar
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo Proyecto</span>
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* View Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg ${showFilters ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <Filter className="w-4 h-4" />
          </button>
          
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`p-2 ${viewMode === 'calendar' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <ProjectFilters />
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} viewMode={viewMode} />
          </motion.div>
        ))}
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <CreateProjectModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      )}
    </div>
  )
}