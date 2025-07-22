import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Filter, Mail, MessageCircle, MoreHorizontal, RefreshCw } from 'lucide-react'
import { TeamMemberCard } from '../components/TeamMemberCard'
import { InviteMemberModal } from '../components/InviteMemberModal'
import { getTeamMembers, deleteTeamMember, type TeamMember } from '../lib/api'

const initialTeamMembers = [
  {
    id: '1',
    name: 'Ana García',
    role: 'UI/UX Designer',
    email: 'ana.garcia@company.com',
    avatar: '/avatars/ana.jpg',
    status: 'online',
    workload: 85,
    currentTasks: 8,
    completedTasks: 24,
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    timezone: 'GMT+1',
    joinDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Carlos López',
    role: 'Full Stack Developer',
    email: 'carlos.lopez@company.com',
    avatar: '/avatars/carlos.jpg',
    status: 'online',
    workload: 92,
    currentTasks: 12,
    completedTasks: 31,
    skills: ['React', 'Node.js', 'PostgreSQL'],
    timezone: 'GMT+1',
    joinDate: '2023-11-20'
  },
  {
    id: '3',
    name: 'María Rodríguez',
    role: 'Backend Developer',
    email: 'maria.rodriguez@company.com',
    avatar: '/avatars/maria.jpg',
    status: 'away',
    workload: 78,
    currentTasks: 6,
    completedTasks: 28,
    skills: ['Python', 'Django', 'AWS'],
    timezone: 'GMT+1',
    joinDate: '2024-03-10'
  },
  {
    id: '4',
    name: 'Pedro Martín',
    role: 'DevOps Engineer',
    email: 'pedro.martin@company.com',
    avatar: '/avatars/pedro.jpg',
    status: 'offline',
    workload: 65,
    currentTasks: 4,
    completedTasks: 19,
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    timezone: 'GMT+1',
    joinDate: '2024-02-05'
  },
  {
    id: '5',
    name: 'Laura Sánchez',
    role: 'Product Manager',
    email: 'laura.sanchez@company.com',
    avatar: '/avatars/laura.jpg',
    status: 'online',
    workload: 88,
    currentTasks: 10,
    completedTasks: 35,
    skills: ['Agile', 'Scrum', 'Analytics'],
    timezone: 'GMT+1',
    joinDate: '2023-09-12'
  }
]

export function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  // Cargar datos desde la API
  const loadTeamMembers = async () => {
    try {
      setLoading(true)
      setError(null)
      const members = await getTeamMembers()
      setTeamMembers(members)
    } catch (err) {
      setError('Error al cargar los miembros del equipo')
      console.error('Error loading team members:', err)
      // Fallback a localStorage si la API falla
      const savedMembers = localStorage.getItem('teamMembers')
      if (savedMembers) {
        setTeamMembers(JSON.parse(savedMembers))
      } else {
        setTeamMembers(initialTeamMembers)
      }
    } finally {
      setLoading(false)
    }
  }

  // Cargar datos al montar el componente
  useEffect(() => {
    loadTeamMembers()
  }, [])

  const handleDeleteMember = async (memberId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este miembro del equipo?')) {
      try {
        await deleteTeamMember(memberId)
        // Actualizar el estado local inmediatamente
        setTeamMembers(prev => prev.filter(member => member.id !== memberId))
      } catch (err) {
        setError('Error al eliminar el miembro')
        console.error('Error deleting member:', err)
      }
    }
  }

  const handleRestoreTeam = async () => {
    if (window.confirm('¿Quieres restaurar el equipo original? Esto agregará de vuelta a todos los miembros eliminados.')) {
      try {
        // Recargar desde la API (que reinicializará con datos originales si es necesario)
        await loadTeamMembers()
      } catch (err) {
        setError('Error al restaurar el equipo')
        console.error('Error restoring team:', err)
      }
    }
  }

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = filterRole === 'all' || member.role.toLowerCase().includes(filterRole.toLowerCase())
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Equipo
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Gestiona tu equipo y supervisa la carga de trabajo
          </p>
        </div>
        <button
          onClick={() => setShowInviteModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Invitar Miembro</span>
        </button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Total Miembros
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {teamMembers.length}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Activos Ahora
          </h3>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {teamMembers.filter(m => m.status === 'online').length}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Carga Promedio
          </h3>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {Math.round(teamMembers.reduce((acc, m) => acc + m.workload, 0) / teamMembers.length)}%
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Tareas Activas
          </h3>
          <p className="text-2xl font-bold text-purple-600 mt-1">
            {teamMembers.reduce((acc, m) => acc + m.currentTasks, 0)}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar miembros..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Todos los roles</option>
            <option value="developer">Desarrolladores</option>
            <option value="designer">Diseñadores</option>
            <option value="manager">Managers</option>
            <option value="devops">DevOps</option>
          </select>
          
          {/* Botón para restaurar equipo original */}
          {teamMembers.length < initialTeamMembers.length && (
            <button
              onClick={handleRestoreTeam}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm flex items-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Restaurar Equipo</span>
              <span className="sm:hidden">Restaurar</span>
            </button>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-red-800 dark:text-red-200">{error}</p>
            <button
              onClick={() => {
                setError(null)
                loadTeamMembers()
              }}
              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 animate-pulse">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Team Members Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamMemberCard member={member} onDelete={handleDeleteMember} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No se encontraron miembros del equipo</p>
              <button
                onClick={loadTeamMembers}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recargar</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Invite Member Modal */}
      {showInviteModal && (
        <InviteMemberModal
          isOpen={showInviteModal}
          onClose={() => setShowInviteModal(false)}
        />
      )}
    </div>
  )
}