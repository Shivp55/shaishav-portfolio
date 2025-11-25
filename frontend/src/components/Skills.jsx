export default function Skills({ skills }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Skills</h3>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1.5rem",
                }}
            >
                {skills.map((cat) => (
                    <div
                        key={cat.category}
                        style={{
                            padding: "1.25rem",
                            borderRadius: "0.75rem",
                            background: "#020617",
                            boxShadow: "0 10px 30px rgba(15,23,42,0.8)",
                            border: "1px solid #1f2933",
                        }}
                    >
                        <h4 style={{ fontWeight: 600, marginBottom: "0.75rem" }}>{cat.category}</h4>
                        <ul style={{ listStyle: "none", paddingLeft: 0, color: "#9ca3af", fontSize: "0.95rem" }}>
                            {cat.items.map((item) => (
                                <li key={item} style={{ marginBottom: "0.25rem" }}>
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
