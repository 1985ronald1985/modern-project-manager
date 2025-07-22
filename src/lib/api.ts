// API functions for team management
const API_BASE = '/api'

export interface TeamMember {
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

// Get all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch(`${API_BASE}/team`)
    if (!response.ok) {
      throw new Error('Failed to fetch team members')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching team members:', error)
    // Fallback to localStorage if API fails
    const saved = localStorage.getItem('teamMembers')
    return saved ? JSON.parse(saved) : []
  }
}

// Add a new team member
export async function addTeamMember(member: Omit<TeamMember, 'id'>): Promise<TeamMember> {
  const response = await fetch(`${API_BASE}/team`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(member),
  })
  
  if (!response.ok) {
    throw new Error('Failed to add team member')
  }
  
  return await response.json()
}

// Delete a team member
export async function deleteTeamMember(id: string): Promise<void> {
  const response = await fetch(`${API_BASE}/team/${id}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error('Failed to delete team member')
  }
}

// Update a team member
export async function updateTeamMember(id: string, updates: Partial<TeamMember>): Promise<TeamMember> {
  const response = await fetch(`${API_BASE}/team/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  })
  
  if (!response.ok) {
    throw new Error('Failed to update team member')
  }
  
  return await response.json()
}