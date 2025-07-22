# Modern Project Manager

Una aplicación moderna de gestión de proyectos con inteligencia artificial integrada, diseñada para equipos híbridos y remotos.

## 🚀 Características Principales

### Tendencias 2025 Integradas
- **Inteligencia Artificial como Núcleo**: Análisis predictivo, automatización avanzada y decisiones basadas en datos
- **Soporte para Metodologías Ágiles**: Flexibilidad y adaptación continua
- **Trabajo Híbrido y Remoto**: Herramientas colaborativas centralizadas
- **Experiencia del Empleado Priorizada**: Herramientas optimizadas para el rendimiento

### Funcionalidades Esenciales
- **Gestión Integral de Tareas**: Organización versátil con vistas Kanban, calendario, Gantt y tablas
- **Colaboración Eficiente**: Comunicación en tiempo real, delegación clara y seguimiento de carga
- **Analítica Avanzada**: Visualización de progreso, informes detallados e insights de IA
- **Interfaz Intuitiva**: Baja curva de aprendizaje con personalización completa
- **Integraciones Amplias**: Conectividad con herramientas populares
- **Multiplataforma**: Web, escritorio y móvil con sincronización en tiempo real

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **Estado**: Zustand
- **Routing**: React Router DOM
- **Data Fetching**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React
- **Drag & Drop**: React Beautiful DnD

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd modern-project-manager
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run test` - Ejecuta las pruebas
- `npm run lint` - Ejecuta el linter
- `npm run format` - Formatea el código

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout.tsx      # Layout principal
│   ├── Header.tsx      # Barra superior
│   ├── Sidebar.tsx     # Navegación lateral
│   ├── StatsCard.tsx   # Tarjetas de estadísticas
│   ├── AIInsights.tsx  # Panel de insights de IA
│   └── ...
├── pages/              # Páginas principales
│   ├── Dashboard.tsx   # Panel principal
│   ├── Projects.tsx    # Gestión de proyectos
│   ├── Tasks.tsx       # Gestión de tareas (Kanban)
│   ├── Analytics.tsx   # Analíticas y reportes
│   ├── Team.tsx        # Gestión de equipo
│   └── Settings.tsx    # Configuración
├── hooks/              # Hooks personalizados
│   └── useTheme.ts     # Gestión de tema
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎨 Características de UI/UX

### Tema Oscuro/Claro
- Soporte completo para modo oscuro
- Cambio automático según preferencias del sistema
- Persistencia de preferencias

### Responsive Design
- Diseño adaptativo para todos los dispositivos
- Optimizado para móviles, tablets y escritorio
- Navegación intuitiva en todas las pantallas

### Animaciones
- Transiciones suaves con Framer Motion
- Feedback visual para interacciones
- Animaciones de carga y estados

## 🤖 Funcionalidades de IA

### Análisis Predictivo
- Predicción de productividad semanal
- Identificación de riesgos de retraso en proyectos
- Sugerencias de optimización de recursos

### Automatización Inteligente
- Asignación automática de tareas
- Generación de informes automáticos
- Recordatorios inteligentes

### Insights en Tiempo Real
- Análisis de patrones de trabajo
- Recomendaciones personalizadas
- Métricas de rendimiento del equipo

## 📊 Vistas y Funcionalidades

### Dashboard
- Resumen ejecutivo con KPIs principales
- Insights de IA en tiempo real
- Actividad reciente del equipo
- Progreso de proyectos activos

### Gestión de Proyectos
- Vista de tarjetas, lista y calendario
- Filtros avanzados por estado, prioridad, equipo
- Creación y edición de proyectos
- Seguimiento de progreso visual

### Tablero Kanban
- Drag & drop para gestión de tareas
- Columnas personalizables
- Filtros y búsqueda avanzada
- Asignación de responsables

### Analíticas
- Gráficos interactivos de productividad
- Métricas de rendimiento del equipo
- Reportes exportables
- Análisis de tendencias

### Gestión de Equipo
- Perfiles de miembros del equipo
- Seguimiento de carga de trabajo
- Sistema de invitaciones
- Comunicación integrada

## 🔧 Configuración

### Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3001
VITE_AI_API_KEY=your_ai_api_key
VITE_WEBSOCKET_URL=ws://localhost:3001
```

### Personalización
- Temas personalizables en `src/index.css`
- Configuración de colores en `tailwind.config.js`
- Ajustes de comportamiento en `src/components/Settings.tsx`

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Despliegue en Vercel
```bash
npm install -g vercel
vercel --prod
```

### Despliegue en Netlify
```bash
npm run build
# Subir la carpeta 'dist' a Netlify
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Para soporte y preguntas:
- Crear un issue en GitHub
- Contactar al equipo de desarrollo
- Consultar la documentación

---

**Modern Project Manager** - Transformando la gestión de proyectos con IA para equipos del futuro 🚀