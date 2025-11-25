export default function ProjectsSection({ projects }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Projects</h3>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1.5rem",
                }}
            >
                {projects.map((project) => (
                    <article
                        key={project.name}
                        style={{
                            padding: "1.5rem",
                            borderRadius: "0.75rem",
                            background: "#020617",
                            border: "1px solid #1f2933",
                        }}
                    >
                        <h4 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{project.name}</h4>
                        <p style={{ color: "#9ca3af", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                            {project.role}
                        </p>
                        <p style={{ color: "#d1d5db", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                            {project.description}
                        </p>
                        <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                            <strong>Tech:</strong> {project.technologies.join(", ")}
                        </p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: "inline-block",
                                    marginTop: "0.75rem",
                                    fontSize: "0.9rem",
                                    color: "#60a5fa",
                                    textDecoration: "underline",
                                }}
                            >
                                View project
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
