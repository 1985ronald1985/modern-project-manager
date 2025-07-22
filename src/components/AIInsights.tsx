import { Bot, TrendingUp, AlertTriangle, Lightbulb, Target } from 'lucide-react'

const insights = [
  {
    type: 'prediction',
    icon: TrendingUp,
    title: 'Predicción de Productividad',
    message: 'Basado en patrones actuales, es probable que completes un 15% más de tareas esta semana.',
    confidence: 87,
    color: 'blue'
  },
  {
    type: 'warning',
    icon: AlertTriangle,
    title: 'Riesgo de Retraso',
    message: 'El proyecto "API de Pagos" tiene un 73% de probabilidad de retrasarse. Considera reasignar recursos.',
    confidence: 73,
    color: 'yellow'
  },
  {
    type: 'suggestion',
    icon: Lightbulb,
    title: 'Optimización Sugerida',
    message: 'Reagrupar tareas similares podría reducir el tiempo de contexto en un 20%.',
    confidence: 92,
    color: 'green'
  },
  {
    type: 'goal',
    icon: Target,
    title: 'Meta Alcanzable',
    message: 'Puedes completar 3 tareas adicionales hoy si priorizas las de menor complejidad.',
    confidence: 85,
    color: 'purple'
  }
]

export function AIInsights() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4 sm:mb-6">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            Insights de IA
          </h3>
        </div>
        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full self-start sm:self-auto">
          Activo
        </span>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${
                insight.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                insight.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900' :
                insight.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                'bg-purple-100 dark:bg-purple-900'
              }`}>
                <insight.icon className={`w-4 h-4 ${
                  insight.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                  insight.color === 'yellow' ? 'text-yellow-600 dark:text-yellow-400' :
                  insight.color === 'green' ? 'text-green-600 dark:text-green-400' :
                  'text-purple-600 dark:text-purple-400'
                }`} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {insight.title}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {insight.confidence}% confianza
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {insight.message}
                </p>
                
                {/* Confidence bar */}
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full ${
                        insight.color === 'blue' ? 'bg-blue-500' :
                        insight.color === 'yellow' ? 'bg-yellow-500' :
                        insight.color === 'green' ? 'bg-green-500' :
                        'bg-purple-500'
                      }`}
                      style={{ width: `${insight.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
          Ver más análisis de IA →
        </button>
      </div>
    </div>
  )
}