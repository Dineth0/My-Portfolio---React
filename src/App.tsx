import './App.css'
import Header from './components/header'
import HeroSection from './components/hero_section'


function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Header />

      <main>
        <HeroSection />
       
      </main>

    </div>
  )
}

export default App