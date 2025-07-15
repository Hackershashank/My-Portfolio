import { HeroSection } from "../components/HeroSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/Navbar"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home=()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle - dark and light */}

            <ThemeToggle/>

            {/* Background effect - animation */}

            <StarBackground/>

            {/* Navbar */}

            <Navbar/>

            {/* Main content */}

            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    )
}