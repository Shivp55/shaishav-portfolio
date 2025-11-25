export default function About({ profile }) {
    return (
        <section style={{ padding: "3rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h3 style={titleStyle}>About</h3>
            <p style={{ color: "#9ca3af", maxWidth: "60rem", lineHeight: 1.6 }}>
                {profile.summary}
            </p>
        </section>
    );
}

const titleStyle = {
    fontSize: "1.75rem",
    marginBottom: "1rem",
};
