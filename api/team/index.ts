import { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'

// Initial team members data
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  try {
    switch (req.method) {
      case 'GET':
        // Get all team members
        let members = await kv.get('team_members')
        
        // If no data exists, initialize with default data
        if (!members) {
          await kv.set('team_members', initialTeamMembers)
          members = initialTeamMembers
        }
        
        return res.status(200).json(members)

      case 'POST':
        // Add new team member
        const newMember = {
          ...req.body,
          id: Date.now().toString(), // Simple ID generation
        }
        
        const currentMembers = await kv.get('team_members') || []
        const updatedMembers = [...(currentMembers as any[]), newMember]
        
        await kv.set('team_members', updatedMembers)
        
        return res.status(201).json(newMember)

      default:
        return res.status(405).json({ error: 'Method not allowed' })
    }
  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}