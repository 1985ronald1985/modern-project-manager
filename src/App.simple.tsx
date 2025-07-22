import { Routes, Route } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Simple</h1>
      <p className="text-gray-600 mt-4">Esta es una versión simplificada para probar el deployment.</p>
    </div>
  )
}

function Test() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">Página de Prueba</h1>
      <p className="text-gray-600 mt-4">Si puedes ver esta página, el routing funciona.</p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <h1 className="text-xl font-bold">ModernPM - Versión Simple</h1>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
    </div>
  )
}

export default App