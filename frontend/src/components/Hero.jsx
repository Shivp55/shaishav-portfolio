export default function Hero({ profile }) {
    return (
        <section style={{ padding: "4rem 10%", borderBottom: "1px solid #1f2933" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{profile.name}</h1>
            <h2 style={{ fontSize: "1.25rem", color: "#9ca3af", marginBottom: "0.5rem" }}>
                {profile.headline}
            </h2>
            <p style={{ color: "#6b7280", marginBottom: "0.75rem" }}>
                {profile.location}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={`mailto:${profile.email}`} style={buttonStyle}>
                    Email
                </a>
                <a
                    href="https://www.linkedin.com/in/shaishav-parekh"
                    target="_blank"
                    rel="noreferrer"
                    style={buttonOutlineStyle}
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/your-github-here"
                    target="_blank"
                    rel="noreferrer"
                    style={buttonOutlineStyle}
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}

const buttonStyle = {
    padding: "0.6rem 1.4rem",
    borderRadius: "999px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
};

const buttonOutlineStyle = {
    ...buttonStyle,
    background: "transparent",
    border: "1px solid #3b82f6",
    color: "#bfdbfe",
};
