export default function ExperienceSection({ experiences }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Experience</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {experiences.map((exp) => (
                    <article
                        key={exp.company + exp.title}
                        style={{
                            padding: "1.5rem",
                            borderRadius: "0.75rem",
                            background: "#020617",
                            border: "1px solid #1f2933",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                            <div>
                                <h4 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{exp.title}</h4>
                                <p style={{ color: "#9ca3af" }}>
                                    {exp.company} · {exp.location}
                                </p>
                            </div>
                            <div style={{ color: "#6b7280", whiteSpace: "nowrap" }}>
                                {exp.startDate} - {exp.endDate}
                            </div>
                        </div>
                        <ul style={{ marginTop: "0.75rem", color: "#9ca3af" }}>
                            {exp.bulletPoints.map((b, index) => (
                                <li key={index} style={{ marginBottom: "0.35rem" }}>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
