import { Mail, MessageCircle, MoreHorizontal, Clock, CheckCircle } from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: string
  email: string
  avatar: string
  status: 'online' | 'away' | 'offline'
  workload: number
  currentTasks: number
  completedTasks: number
  skills: string[]
  timezone: string
  joinDate: string
}

interface TeamMemberCardProps {
  member: TeamMember
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400'
  }

  const statusLabels = {
    online: 'En línea',
    away: 'Ausente',
    offline: 'Desconectado'
  }

  const getWorkloadColor = (workload: number) => {
    if (workload >= 90) return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
    if (workload >= 75) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
    return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColors[member.status]} rounded-full border-2 border-white dark:border-gray-800`}></div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {member.role}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {statusLabels[member.status]}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Workload */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Carga de trabajo</span>
          <span className={`text-sm px-2 py-1 rounded-full ${getWorkloadColor(member.workload)}`}>
            {member.workload}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              member.workload >= 90 ? 'bg-red-500' :
              member.workload >= 75 ? 'bg-yellow-500' :
              'bg-green-500'
            }`}
            style={{ width: `${member.workload}%` }}
          ></div>
        </div>
      </div>

      {/* Tasks Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-blue-600 dark:text-blue-400 mb-1">
            <Clock className="w-4 h-4" />
            <span className="text-lg font-semibold">{member.currentTasks}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Activas</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1 text-green-600 dark:text-green-400 mb-1">
            <CheckCircle className="w-4 h-4" />
            <span className="text-lg font-semibold">{member.completedTasks}</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">Completadas</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Habilidades</p>
        <div className="flex flex-wrap gap-1">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
              +{member.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg">
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </button>
        <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg">
          <MessageCircle className="w-4 h-4" />
          <span>Chat</span>
        </button>
      </div>
    </div>
  )
}