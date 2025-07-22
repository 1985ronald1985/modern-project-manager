import { VercelRequest, VercelResponse } from '@vercel/node'
import { kv } from '@vercel/kv'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const { id } = req.query

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid member ID' })
  }

  try {
    const members = await kv.get('team_members') || []
    const memberArray = members as any[]

    switch (req.method) {
      case 'DELETE':
        // Delete team member
        const filteredMembers = memberArray.filter(member => member.id !== id)
        
        if (filteredMembers.length === memberArray.length) {
          return res.status(404).json({ error: 'Member not found' })
        }
        
        await kv.set('team_members', filteredMembers)
        
        return res.status(200).json({ message: 'Member deleted successfully' })

      case 'PUT':
        // Update team member
        const memberIndex = memberArray.findIndex(member => member.id === id)
        
        if (memberIndex === -1) {
          return res.status(404).json({ error: 'Member not found' })
        }
        
        const updatedMember = {
          ...memberArray[memberIndex],
          ...req.body,
          id, // Ensure ID doesn't change
        }
        
        memberArray[memberIndex] = updatedMember
        await kv.set('team_members', memberArray)
        
        return res.status(200).json(updatedMember)

      case 'GET':
        // Get specific team member
        const member = memberArray.find(member => member.id === id)
        
        if (!member) {
          return res.status(404).json({ error: 'Member not found' })
        }
        
        return res.status(200).json(member)

      default:
        return res.status(405).json({ error: 'Method not allowed' })
    }
  } catch (error) {
    console.error('API Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}