import { Link, NavLink } from "react-router-dom";

const linkBase = {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    borderRadius: "999px",
    fontSize: "0.9rem",
};

export default function NavBar() {
    return (
        <header
            style={{
                padding: "1rem 10%",
                borderBottom: "1px solid #1f2933",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "sticky",
                top: 0,
                zIndex: 20,
                background: "#020617",
            }}
        >
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    color: "#e5e7eb",
                }}
            >
                Shaishav Parekh
            </Link>

            <nav style={{ display: "flex", gap: "0.5rem" }}>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        ...linkBase,
                        color: isActive ? "#0f172a" : "#e5e7eb",
                        background: isActive ? "#3b82f6" : "transparent",
                        border: "1px solid #3b82f6",
                    })}
                >
                    Home
                </NavLink>

                <NavLink
                    to="/projects"
                    style={({ isActive }) => ({
                        ...linkBase,
                        color: isActive ? "#0f172a" : "#e5e7eb",
                        background: isActive ? "#3b82f6" : "transparent",
                        border: "1px solid #3b82f6",
                    })}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    );
}
