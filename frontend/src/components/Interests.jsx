export default function Interests({ interests }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Interests</h3>
            <ul style={{ color: "#9ca3af" }}>
                {interests.map((item) => (
                    <li key={item} style={{ marginBottom: "0.35rem" }}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}
