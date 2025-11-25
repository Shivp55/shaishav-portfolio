export default function EducationSection({ education }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Education</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {education.map((edu) => (
                    <article key={edu.degree} style={{ color: "#d1d5db" }}>
                        <h4 style={{ fontSize: "1.15rem", fontWeight: 600 }}>{edu.degree}</h4>
                        <p style={{ color: "#9ca3af" }}>
                            {edu.institution} · {edu.location}
                        </p>
                        <p style={{ color: "#6b7280" }}>
                            {edu.period} · Grade: {edu.grade}
                        </p>
                        <p style={{ color: "#9ca3af", fontSize: "0.95rem" }}>
                            Specialization: {edu.specialization}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}
