export default function Contact({ profile }) {
    return (
        <footer style={{ padding: "2.5rem 10%", textAlign: "center", color: "#6b7280" }}>
            <p>Open to opportunities in software engineering and full stack roles.</p>
            <p style={{ marginTop: "0.5rem" }}>
                Email: <a href={`mailto:${profile.email}`} style={{ color: "#60a5fa" }}>{profile.email}</a>
            </p>
            <p>Phone: {profile.phone}</p>
            <p>Made using React and SpringBoot</p>
        </footer>
    );
}
