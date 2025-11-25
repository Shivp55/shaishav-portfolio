import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import Certifications from "./Certifications";
import Interests from "./Interests";
import Contact from "./Contact";

export default function HomePage({ profile }) {
    return (
        <>
            <Hero profile={profile} />
            <About profile={profile} />
            <Skills skills={profile.skills} />
            <ExperienceSection experiences={profile.experiences} />

            {/* Optional: only show a few projects on the home page */}
            <ProjectsSection projects={profile.projects} />

            <EducationSection education={profile.education} />
            <Certifications certifications={profile.certifications} />
            <Interests interests={profile.interests} />
            <Contact profile={profile} />
        </>
    );
}
