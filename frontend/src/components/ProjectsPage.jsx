import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";

export default function ProjectsPage({ profile }) {
    return (
        <>
            {/* Reuse hero for consistency */}
            <Hero profile={profile} />
            <section style={{ padding: "2rem 10%", borderBottom: "1px solid #1f2933" }}>
                <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>All Projects</h3>
                <p style={{ color: "#9ca3af", maxWidth: "40rem" }}>
                    These are the projects I am able to share, highlighting my work with Java, Spring Boot, React, and AI driven systems. I have built other production solutions as well, but they are not publicly available due to company confidentiality.
                </p>
            </section>
            <ProjectsSection projects={profile.projects} />
        </>
    );
}
