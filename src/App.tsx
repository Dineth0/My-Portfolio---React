import './App.css'
import AboutSection from './components/about_section'
import EducationSection from './components/education_section'
import Header from './components/header'
import HeroSection from './components/hero_section'


function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Header />

      <main>
        <HeroSection />
        <AboutSection/>
        <EducationSection/>
      </main>

    </div>
  )
}

export default App