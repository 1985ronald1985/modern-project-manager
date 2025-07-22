import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Filter, Mail, MessageCircle, MoreHorizontal } from 'lucide-react'
import { TeamMemberCard } from '../components/TeamMemberCard'
import { InviteMemberModal } from '../components/InviteMemberModal'

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
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  const handleDeleteMember = (memberId: string) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este miembro del equipo?')) {
      setTeamMembers(prev => prev.filter(member => member.id !== memberId))
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
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TeamMemberCard member={member} onDelete={handleDeleteMember} />
          </motion.div>
        ))}
      </div>

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