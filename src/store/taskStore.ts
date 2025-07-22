import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Task {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  assignee: string
  dueDate: string
  tags: string[]
  project: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  createdAt: string
  updatedAt: string
}

export interface Column {
  id: string
  title: string
  tasks: Task[]
}

interface TaskStore {
  columns: Record<string, Column>
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateTask: (taskId: string, updates: Partial<Task>) => void
  deleteTask: (taskId: string) => void
  moveTask: (taskId: string, fromColumn: string, toColumn: string, newIndex: number) => void
  reorderTask: (columnId: string, fromIndex: number, toIndex: number) => void
}

const initialColumns: Record<string, Column> = {
  'todo': {
    id: 'todo',
    title: 'Por Hacer',
    tasks: [
      {
        id: '1',
        title: 'Diseñar mockups de la pantalla principal',
        description: 'Crear wireframes y mockups de alta fidelidad',
        priority: 'high',
        assignee: 'Ana García',
        dueDate: '2025-01-25',
        tags: ['Design', 'UI/UX'],
        project: 'App Móvil',
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'Configurar base de datos',
        description: 'Establecer esquema y conexiones iniciales',
        priority: 'medium',
        assignee: 'Carlos López',
        dueDate: '2025-01-28',
        tags: ['Backend', 'Database'],
        project: 'API Pagos',
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]
  },
  'in-progress': {
    id: 'in-progress',
    title: 'En Progreso',
    tasks: [
      {
        id: '3',
        title: 'Implementar autenticación JWT',
        description: 'Sistema de login y manejo de tokens',
        priority: 'high',
        assignee: 'María Rodríguez',
        dueDate: '2025-01-30',
        tags: ['Backend', 'Security'],
        project: 'API Pagos',
        status: 'in-progress',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]
  },
  'review': {
    id: 'review',
    title: 'En Revisión',
    tasks: [
      {
        id: '4',
        title: 'Pruebas de integración API',
        description: 'Validar endpoints y respuestas',
        priority: 'medium',
        assignee: 'Pedro Martín',
        dueDate: '2025-02-02',
        tags: ['Testing', 'API'],
        project: 'API Pagos',
        status: 'review',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]
  },
  'done': {
    id: 'done',
    title: 'Completado',
    tasks: [
      {
        id: '5',
        title: 'Configurar entorno de desarrollo',
        description: 'Setup inicial del proyecto',
        priority: 'low',
        assignee: 'Laura Sánchez',
        dueDate: '2025-01-20',
        tags: ['Setup', 'DevOps'],
        project: 'App Móvil',
        status: 'done',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ]
  }
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      columns: initialColumns,

      addTask: (taskData) => {
        const newTask: Task = {
          ...taskData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }

        set((state) => ({
          columns: {
            ...state.columns,
            [taskData.status]: {
              ...state.columns[taskData.status],
              tasks: [...state.columns[taskData.status].tasks, newTask]
            }
          }
        }))
      },

      updateTask: (taskId, updates) => {
        set((state) => {
          const newColumns = { ...state.columns }
          
          // Encontrar la tarea en todas las columnas
          for (const columnId in newColumns) {
            const taskIndex = newColumns[columnId].tasks.findIndex(task => task.id === taskId)
            if (taskIndex !== -1) {
              newColumns[columnId].tasks[taskIndex] = {
                ...newColumns[columnId].tasks[taskIndex],
                ...updates,
                updatedAt: new Date().toISOString()
              }
              break
            }
          }
          
          return { columns: newColumns }
        })
      },

      deleteTask: (taskId) => {
        set((state) => {
          const newColumns = { ...state.columns }
          
          // Encontrar y eliminar la tarea
          for (const columnId in newColumns) {
            newColumns[columnId].tasks = newColumns[columnId].tasks.filter(
              task => task.id !== taskId
            )
          }
          
          return { columns: newColumns }
        })
      },

      moveTask: (taskId, fromColumn, toColumn, newIndex) => {
        set((state) => {
          const newColumns = { ...state.columns }
          
          // Encontrar la tarea
          const taskIndex = newColumns[fromColumn].tasks.findIndex(task => task.id === taskId)
          if (taskIndex === -1) return state
          
          const [task] = newColumns[fromColumn].tasks.splice(taskIndex, 1)
          
          // Actualizar el status de la tarea
          task.status = toColumn as Task['status']
          task.updatedAt = new Date().toISOString()
          
          // Agregar a la nueva columna
          newColumns[toColumn].tasks.splice(newIndex, 0, task)
          
          return { columns: newColumns }
        })
      },

      reorderTask: (columnId, fromIndex, toIndex) => {
        set((state) => {
          const newColumns = { ...state.columns }
          const tasks = [...newColumns[columnId].tasks]
          const [removed] = tasks.splice(fromIndex, 1)
          tasks.splice(toIndex, 0, removed)
          
          newColumns[columnId].tasks = tasks
          
          return { columns: newColumns }
        })
      }
    }),
    {
      name: 'task-storage', // nombre de la clave en localStorage
      version: 1,
    }
  )
)