import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Zap, 
  Database,
  Users,
  Save
} from 'lucide-react'

const settingsSections = [
  {
    id: 'profile',
    title: 'Perfil',
    icon: User,
    description: 'Información personal y preferencias de cuenta'
  },
  {
    id: 'notifications',
    title: 'Notificaciones',
    icon: Bell,
    description: 'Configura cómo y cuándo recibir notificaciones'
  },
  {
    id: 'security',
    title: 'Seguridad',
    icon: Shield,
    description: 'Contraseña, autenticación y configuración de seguridad'
  },
  {
    id: 'appearance',
    title: 'Apariencia',
    icon: Palette,
    description: 'Tema, idioma y personalización visual'
  },
  {
    id: 'integrations',
    title: 'Integraciones',
    icon: Zap,
    description: 'Conecta con herramientas externas y APIs'
  },
  {
    id: 'team',
    title: 'Equipo',
    icon: Users,
    description: 'Configuración de equipo y permisos'
  },
  {
    id: 'data',
    title: 'Datos',
    icon: Database,
    description: 'Exportación, importación y respaldo de datos'
  }
]

export function Settings() {
  const [activeSection, setActiveSection] = useState('profile')
  const [settings, setSettings] = useState({
    profile: {
      name: 'Usuario Demo',
      email: 'usuario@company.com',
      timezone: 'GMT+1',
      language: 'es'
    },
    notifications: {
      email: true,
      push: true,
      taskReminders: true,
      projectUpdates: true,
      teamMentions: true
    },
    appearance: {
      theme: 'system',
      compactMode: false,
      sidebarCollapsed: false
    },
    ai: {
      enabled: true,
      autoSuggestions: true,
      predictiveAnalysis: true,
      smartNotifications: true
    }
  })

  const handleSave = () => {
    // Aquí iría la lógica para guardar la configuración
    console.log('Configuración guardada:', settings)
  }

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          value={settings.profile.name}
          onChange={(e) => setSettings({
            ...settings,
            profile: { ...settings.profile, name: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          value={settings.profile.email}
          onChange={(e) => setSettings({
            ...settings,
            profile: { ...settings.profile, email: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Zona horaria
        </label>
        <select
          value={settings.profile.timezone}
          onChange={(e) => setSettings({
            ...settings,
            profile: { ...settings.profile, timezone: e.target.value }
          })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="GMT-5">GMT-5 (EST)</option>
          <option value="GMT+1">GMT+1 (CET)</option>
          <option value="GMT+8">GMT+8 (CST)</option>
        </select>
      </div>
    </div>
  )

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Notificaciones por email
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Recibe actualizaciones importantes por correo
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.email}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, email: e.target.checked }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Recordatorios de tareas
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Alertas antes de fechas límite
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications.taskReminders}
              onChange={(e) => setSettings({
                ...settings,
                notifications: { ...settings.notifications, taskReminders: e.target.checked }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )

  const renderAISettings = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Configuración de IA
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Personaliza cómo la inteligencia artificial te asiste en tu trabajo diario
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Análisis predictivo
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Predicciones sobre riesgos y optimización de recursos
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.ai.predictiveAnalysis}
              onChange={(e) => setSettings({
                ...settings,
                ai: { ...settings.ai, predictiveAnalysis: e.target.checked }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Sugerencias automáticas
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Recomendaciones inteligentes para tareas y proyectos
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.ai.autoSuggestions}
              onChange={(e) => setSettings({
                ...settings,
                ai: { ...settings.ai, autoSuggestions: e.target.checked }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  )

  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSettings()
      case 'notifications':
        return renderNotificationSettings()
      case 'ai':
        return renderAISettings()
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Configuración para {activeSection} próximamente...
            </p>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Configuración
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Personaliza tu experiencia y configura las preferencias del sistema
          </p>
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Save className="w-4 h-4" />
          <span>Guardar Cambios</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <nav className="space-y-2">
            {settingsSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <section.icon className="w-5 h-5" />
                <div>
                  <div className="font-medium">{section.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {section.description}
                  </div>
                </div>
              </button>
            ))}
            
            {/* AI Settings - Special Section */}
            <button
              onClick={() => setActiveSection('ai')}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors border-2 border-dashed ${
                activeSection === 'ai'
                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 border-blue-300'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Zap className="w-5 h-5" />
              <div>
                <div className="font-medium">IA Avanzada</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Configuración de inteligencia artificial
                </div>
              </div>
            </button>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {settingsSections.find(s => s.id === activeSection)?.title || 'IA Avanzada'}
            </h2>
            {renderCurrentSection()}
          </motion.div>
        </div>
      </div>
    </div>
  )
}