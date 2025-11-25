export default function Certifications({ certifications }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Certifications</h3>
            <ul style={{ color: "#9ca3af" }}>
                {certifications.map((cert) => (
                    <li key={cert} style={{ marginBottom: "0.4rem" }}>
                        {cert}
                    </li>
                ))}
            </ul>
        </section>
    );
}
