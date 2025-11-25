import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import NavBar from "./components/NavBar";

function App() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Later we will switch this URL to the deployed backend
        fetch("http://localhost:8080/api/profile")
            .then((res) => res.json())
            .then((data) => setProfile(data))
            .catch((err) => console.error("Error fetching profile", err));
    }, []);

    if (!profile) {
        return (
            <div
                style={{
                    padding: "2rem",
                    color: "#e5e7eb",
                    background: "#020617",
                    minHeight: "100vh",
                }}
            >
                Loading profile...
            </div>
        );
    }

    return (
        <div
            style={{
                fontFamily: "system-ui, sans-serif",
                background: "#020617",
                color: "#e5e7eb",
                minHeight: "100vh",
            }}
        >
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage profile={profile} />} />
                <Route path="/projects" element={<ProjectsPage profile={profile} />} />
            </Routes>
        </div>
    );
}

export default App;
