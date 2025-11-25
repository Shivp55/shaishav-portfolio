package com.shaishav.portfolio.portfolio.controller;

import com.shaishav.portfolio.portfolio.model.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // adjust if CRA (http://localhost:3000)
public class ProfileController {

    @GetMapping("/api/profile")
    public Profile getProfile() {
        Profile profile = new Profile();
        profile.setName("Shaishav Deepeshkumar Parekh");
        profile.setLocation("Dublin, Ireland");
        profile.setEmail("shaishav.parekh2@mail.dcu.ie");
        profile.setPhone("+353 89 963 6097");
        profile.setHeadline("Full-stack Software Engineer - Java, Spring Boot, React");
        profile.setSummary(
                "Full-stack Software Engineer with hands-on experience building and deploying scalable, " +
                        "cloud-native applications using Java, Spring Boot, and React. Skilled in microservice " +
                        "architecture, RESTful API design, and AWS-based deployments with CI/CD automation."
        );

        // skills
        SkillCategory languages = new SkillCategory(
                "Languages & Frameworks",
                List.of(
                        "Java", "Spring Boot", "React", "Angular", "AngularJS", "PHP", "Python",
                        "Go (in progress)", "CodeIgniter", "Laravel", "Three.js", "OpenGL",
                        "3D Web Development", "Data Structures and Algorithms"
                )
        );

        SkillCategory backend = new SkillCategory(
                "Backend & Databases",
                List.of(
                        "Microservices", "Event-driven Architecture", "REST API Development",
                        "Scalable Back-End Services", "MySQL", "MongoDB", "PostgreSQL",
                        "DynamoDB", "Redis", "Kafka"
                )
        );

        SkillCategory cloud = new SkillCategory(
                "Cloud & DevOps",
                List.of(
                        "AWS EC2", "AWS Lambda", "SQS", "SNS", "CloudFormation",
                        "Docker", "Jenkins", "New Relic", "Sumo Logic"
                )
        );

        SkillCategory ai = new SkillCategory(
                "AI & Data Science",
                List.of("Machine Learning", "Deep Learning", "TensorFlow", "Keras", "PyTorch", "Real-time Detection")
        );

        SkillCategory tools = new SkillCategory(
                "Testing & Tools",
                List.of("JUnit", "Jest", "Playwright", "Git", "Agile Methodologies", "SDLC")
        );

        profile.setSkills(List.of(languages, backend, cloud, ai, tools));

        // experience
        Experience greyslate = new Experience();
        greyslate.setTitle("Full Stack Developer");
        greyslate.setCompany("GreySlate Technologies");
        greyslate.setLocation("Gujarat, India");
        greyslate.setStartDate("Feb 2023");
        greyslate.setEndDate("Dec 2023");
        greyslate.setBulletPoints(List.of(
                "Built and deployed full-stack applications using Spring Boot and React.js with RESTful APIs.",
                "Deployed and monitored applications on AWS EC2 using Docker and Jenkins.",
                "Designed responsive and accessible front ends using React, TypeScript, HTML5, and CSS3.",
                "Implemented JWT-based authentication and secure API communication.",
                "Worked in an Agile environment with code reviews and sprint planning."
        ));

        Experience tatvasoft = new Experience();
        tatvasoft.setTitle("Junior Java Developer");
        tatvasoft.setCompany("Tatvasoft");
        tatvasoft.setLocation("Ahmedabad, Gujarat, India");
        tatvasoft.setStartDate("Mar 2022");
        tatvasoft.setEndDate("Feb 2023");
        tatvasoft.setBulletPoints(List.of(
                "Developed and maintained Spring Boot microservices integrated with REST APIs and AWS services.",
                "Built CI/CD pipelines with Jenkins for automated testing and deployment.",
                "Contributed to front-end enhancements with JavaScript and React components.",
                "Participated in daily Scrum meetings with distributed teams."
        ));

        profile.setExperiences(List.of(greyslate, tatvasoft));

        // projects
        Project live1 = new Project();
        live1.setName("Accounting System");
        live1.setRole("Tatvasoft | Live Client Project");
        live1.setDescription(
                "Designed and built an internal accounting system for a construction company using Java. " +
                        "The solution handled invoicing, payment tracking, and financial reporting. " +
                        "Source code and detailed features are not publicly available due to company privacy policies, " +
                        "but I can explain the architecture and technologies in detail during a discussion."
        );
        live1.setTechnologies(List.of("Java", "Spring Boot", "MongoDB"));

        Project live2 = new Project();
        live2.setName("Nutrition Platform (Keto App)");
        live2.setRole("GreySlate Technologies | Live Client Project");
        live2.setDescription(
                "Developed a nutrition-focused website that provided structured food information, macros, and dietary values. " +
                        "Included custom logic for nutrition tracking and a clean user interface. " +
                        "Full implementation details cannot be shared publicly, but the design, features, and tech stack can be discussed further."
        );
        live2.setTechnologies(List.of("Java", "Spring Boot", "MySQL"));

        Project live3 = new Project();
        live3.setName("Pet Shop Website");
        live3.setRole("GreySlate Technologies | Live Client Project");
        live3.setDescription(
                "Created a WordPress based website for a dog pet shop showcasing various breeds, detailed pet profiles, and a CMS for content updates. " +
                        "Due to privacy guidelines, full project specifics are not publicly available, but I can walk through the system design and workflows if needed."
        );
        live3.setTechnologies(List.of("WordPress", "PHP"));


        Project pedestrian = new Project();
        pedestrian.setName("Pedestrian Collision System Detection for Cyclists");
        pedestrian.setRole("Master's Project - Image Processing and Analysis");
        pedestrian.setDescription(
                "Built a deep learning model using TensorFlow for real-time detection. " +
                        "Deployed with Flask API on AWS EC2 and integrated monitoring for uptime and latency using CloudWatch."
        );
        pedestrian.setTechnologies(List.of("TensorFlow", "Python", "Flask", "AWS EC2", "CloudWatch"));
        pedestrian.setLink(null);

        Project internetBanking = new Project();
        internetBanking.setName("Internet Banking System");
        internetBanking.setRole("DCU Project - Secure Web Application");
        internetBanking.setDescription(
                "Developed a secure web application using Spring Boot and MySQL, focusing on transactional integrity " +
                        "and fail-safe API handling. Improved response time by about 30 percent through query optimization and caching."
        );
        internetBanking.setTechnologies(List.of("Spring Boot", "Java", "MySQL", "HTML", "CSS", "JavaScript"));
        internetBanking.setLink(null);

        Project library = new Project();
        library.setName("Library Management System");
        library.setRole("Capstone Project");
        library.setDescription("Full stack library management application with role-based features.");
        library.setTechnologies(List.of("HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"));
        library.setLink(null);

        profile.setProjects(List.of(live1,live2, live3, pedestrian, internetBanking, library));

        // education
        Education masters = new Education();
        masters.setDegree("Master of Engineering in Electronic and Computer Engineering");
        masters.setInstitution("Dublin City University");
        masters.setLocation("Dublin, Ireland");
        masters.setGrade("First Class Honours");
        masters.setPeriod("2024 - 2025");
        masters.setSpecialization("3D Interface Technologies, Computer Vision, Image Processing, Spring Boot Full Stack");

        Education bachelors = new Education();
        bachelors.setDegree("Bachelor in Computer Engineering");
        bachelors.setInstitution("Gujarat Technological University (GTU)");
        bachelors.setLocation("Gujarat, India");
        bachelors.setGrade("9.12 / 10");
        bachelors.setPeriod("2019 - 2023");
        bachelors.setSpecialization("Web Development, Data Analysis, Machine Learning, Artificial Intelligence, Java, JavaScript");

        profile.setEducation(List.of(masters, bachelors));

        profile.setCertifications(List.of(
                "Amazon Full Stack Java Developer",
                "IBM Backend Engineer",
                "IBM Data Analytics",
                "AWS Cloud Architect - In Progress",
                "Generative AI in Software Development"
        ));

        profile.setInterests(List.of(
                "Exploring new technologies in AI and NLP",
                "Building innovative software solutions",
                "Football, Cricket, Badminton",
                "Networking and collaborative team work"
        ));

        return profile;
    }
}
