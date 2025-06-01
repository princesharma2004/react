import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ece9f7 0%, #cfd9df 100%)', padding: '2rem' }}>
      <div style={{ maxWidth: 500, margin: '2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: '#5a189a', marginBottom: '2rem', fontWeight: 700, letterSpacing: 1 }}>
          Learn about Redux Toolkit
        </h1>
        <AddTodo />
        <div style={{ marginTop: '2rem' }}>
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default App
