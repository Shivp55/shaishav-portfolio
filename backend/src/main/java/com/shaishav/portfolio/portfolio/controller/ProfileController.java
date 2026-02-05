package com.shaishav.portfolio.portfolio.controller;

import com.shaishav.portfolio.portfolio.model.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfileController {

    @GetMapping("/api/profile")
    public Profile getProfile() {
        Profile profile = new Profile();
        profile.setName("Shaishav Deepeshkumar Parekh");
        profile.setLocation("Dublin, Ireland");
        profile.setEmail("shaishav.parekh2@mail.dcu.ie");
        profile.setPhone("+353 89 963 6097");

        profile.setHeadline("Software Engineer (Java 21, Spring Boot) | Cloud, APIs, Testing | React (Full Stack)");

        profile.setSummary(
                "Software Engineer with 3+ years of experience building and operating Java (Java 21) and Spring Boot " +
                        "server-side applications for high-traffic, customer-facing platforms. Strong foundation in data structures " +
                        "and algorithms, RESTful API design, relational and NoSQL databases, and automated testing. Proven ability to own " +
                        "services end-to-end, from design through production support, in globally distributed agile teams."
        );

        //SKILLS

        SkillCategory languages = new SkillCategory(
                "Languages & Frameworks",
                List.of(
                        "Java 21", "Spring Boot", "Spring MVC", "Spring Data JPA", "Maven",
                        "React", "JavaScript", "Python", "HTML", "CSS", "TypeScript (basic)", "Tailwind CSS"
                )
        );

        SkillCategory backend = new SkillCategory(
                "Backend & Databases",
                List.of(
                        "Scalable server-side web applications",
                        "Microservices", "Event-driven Architecture", "REST API Development",
                        "MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Kafka"
                )
        );

        SkillCategory cloud = new SkillCategory(
                "Cloud & DevOps",
                List.of(
                        "Microsoft Azure (Certification in Progress)",
                        "AWS EC2", "CloudWatch",
                        "Docker", "Jenkins (CI/CD)",
                        "New Relic", "Sumo Logic"
                )
        );

        SkillCategory tools = new SkillCategory(
                "Testing & Tools",
                List.of(
                        "Test-Driven Development (TDD)",
                        "JUnit 5", "Mockito",
                        "Integration Testing", "API Testing",
                        "Full SDLC", "Agile and traditional development methodologies"
                )
        );

        SkillCategory additionalExposure = new SkillCategory(
                "Additional Exposure",
                List.of("Angular", "Three.js", "OpenGL", "Data Structures & Algorithms")
        );

        SkillCategory softSkills = new SkillCategory(
                "Additional Skillset",
                List.of(
                        "Adaptable", "Learning-Oriented", "Time Management", "Delivery-Focused",
                        "Detail-Oriented", "Problem Solver", "Ownership-Driven", "Collaborative",
                        "Effective Communication", "Agile Mindset", "Continuous Improvement", "Analytical Thinking"
                )
        );

        profile.setSkills(List.of(languages, backend, cloud, tools, additionalExposure, softSkills));

        // EXPERIENCE

        Experience greyslate = new Experience();
        greyslate.setTitle("Full Stack Software Engineer");
        greyslate.setCompany("GreySlate Technologies");
        greyslate.setLocation("Gujarat, India");
        greyslate.setStartDate("Feb 2023");
        greyslate.setEndDate("Dec 2023");
        greyslate.setBulletPoints(List.of(
                "Designed, developed, and maintained full-stack applications using Spring Boot on the backend and React on the frontend, supporting secure, customer-facing workflows with end-to-end ownership.",
                "Implemented robust authentication and authorization using Spring Security, JWT access and refresh tokens, role-based access control, and secured REST APIs.",
                "Built and evolved RESTful services integrated with PostgreSQL, optimizing SQL queries and transactional logic for scalability, performance, and data consistency.",
                "Developed React components and API integrations for authenticated user flows, including token handling, protected routes, and session management on the client side.",
                "Deployed and operated services in AWS cloud environments using Docker, CI/CD pipelines, and monitoring tools, supporting reliable releases and rapid issue resolution.",
                "Owned services across development, deployment, and production support, troubleshooting authentication issues, API failures, and performance bottlenecks.",
                "Collaborated with the team in an agile environment, contributing to code reviews, engineering standards, and continuous improvement."
        ));

        Experience tatvasoft = new Experience();
        tatvasoft.setTitle("Java Software Engineer");
        tatvasoft.setCompany("Tatvasoft");
        tatvasoft.setLocation("Ahmedabad, Gujarat, India");
        tatvasoft.setStartDate("Mar 2022");
        tatvasoft.setEndDate("Feb 2023");
        tatvasoft.setBulletPoints(List.of(
                "Developed and maintained Java-based backend services using Spring Boot and Spring Data JPA, supporting business-critical workflows.",
                "Designed and optimized JPA entity mappings, repository layers, and transactional service logic backed by relational databases.",
                "Built and consumed RESTful APIs, ensuring proper validation, error handling, and API versioning.",
                "Wrote unit and integration tests using JUnit and Mockito, improving reliability of existing services.",
                "Contributed to CI/CD pipelines using Jenkins, supporting automated builds and deployments.",
                "Reduced recurring production issues by identifying root causes and improving service configuration and error handling.",
                "Worked in an Agile Scrum team, participating in sprint planning, daily stand-ups, and code reviews."
        ));

        Experience android = new Experience();
        android.setTitle("Android Developer Intern");
        android.setCompany("BrainyBeam Technologies");
        android.setLocation("Ahmedabad, Gujarat, India");
        android.setStartDate("Dec 2021");
        android.setEndDate("Feb 2022");
        android.setBulletPoints(List.of(
                "Designed and developed Android application features using Java and Android Studio.",
                "Integrated RESTful APIs for real-time data fetching and smooth in-app interactions.",
                "Worked with Firebase (Auth, Firestore, Cloud Messaging) to support user management and notifications.",
                "Optimized UI components using XML layouts, RecyclerViews, and Material Design guidelines.",
                "Performed debugging, unit testing, and performance tuning to improve app stability.",
                "Collaborated with the team during daily Scrum meetings and contributed to feature planning."
        ));

        profile.setExperiences(List.of(
                greyslate,
                tatvasoft,
                android
        ));

        // PROJECTS

        Project flinkAnomaly = new Project();
        flinkAnomaly.setName("Flink Clickstream Anomaly Detection");
        flinkAnomaly.setRole("Distributed Streaming System | Freelance Project");
        flinkAnomaly.setDescription(
                "Built a distributed backend system using Kafka and Apache Flink to process real-time events. " +
                        "Implemented windowed aggregations and anomaly detection logic. Deployed using Docker Compose " +
                        "to simulate a multi-service environment, and exposed APIs consumed by web-based frontends for monitoring."
        );
        flinkAnomaly.setTechnologies(List.of("Apache Flink", "Kafka", "Zookeeper", "Java", "Docker", "Streaming ETL"));
        flinkAnomaly.setLink("https://github.com/Shivp55/flink-clickstream-anomaly-detection");

        Project hadoopPipeline = new Project();
        hadoopPipeline.setName("Clickstream Hadoop Pipeline");
        hadoopPipeline.setRole("Big Data Engineering | Freelance Project");
        hadoopPipeline.setDescription(
                "Developed a scalable clickstream processing pipeline using the Hadoop ecosystem. Implemented multi-zone HDFS storage " +
                        "(raw, clean, aggregated), built Hive external tables, and ran batch processing using MapReduce for structured reporting."
        );
        hadoopPipeline.setTechnologies(List.of("HDFS", "Hive", "HiveQL", "MapReduce", "Bash", "Distributed ETL"));
        hadoopPipeline.setLink("https://github.com/Shivp55/clickstream-hadoop-pipeline");

        Project pedestrian = new Project();
        pedestrian.setName("Pedestrian Collision System Detection for Cyclists");
        pedestrian.setRole("Master's Project - Image Processing and Analysis");
        pedestrian.setDescription(
                "Built a deep learning model using TensorFlow for real-time detection. Deployed with a Flask API on AWS EC2 and " +
                        "integrated monitoring for uptime and latency using CloudWatch."
        );
        pedestrian.setTechnologies(List.of("TensorFlow", "Python", "Flask", "AWS EC2", "CloudWatch"));
        pedestrian.setLink(null);

        Project internetBanking = new Project();
        internetBanking.setName("Internet Banking System");
        internetBanking.setRole("DCU Project - Secure Web Application");
        internetBanking.setDescription(
                "Developed a secure web application with Spring Boot and MySQL, focusing on transactional integrity and fail-safe API handling. " +
                        "Improved response time by 30% through query optimization and caching logic."
        );
        internetBanking.setTechnologies(List.of("Spring Boot", "Java", "MySQL", "HTML", "CSS", "JavaScript"));
        internetBanking.setLink(null);

        Project library = new Project();
        library.setName("Library Management System");
        library.setRole("Amazon Software Developer Capstone Project");
        library.setDescription("Full stack library management application built with PHP and MySQL.");
        library.setTechnologies(List.of("HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"));
        library.setLink(null);

        profile.setProjects(List.of(
                flinkAnomaly,
                hadoopPipeline,
                pedestrian,
                internetBanking,
                library
        ));

        // EDUCATION

        Education masters = new Education();
        masters.setDegree("Master’s in Electronic and Computer Engineering");
        masters.setInstitution("Dublin City University");
        masters.setLocation("Dublin, Ireland");
        masters.setGrade("First Class Honours");
        masters.setPeriod("2024 - 2025");
        masters.setSpecialization("3D Interface Technologies, Computer Vision, Image Processing and Analysis, Full Stack Web Development (Spring Boot)");

        Education bachelors = new Education();
        bachelors.setDegree("Bachelor in Computer Engineering");
        bachelors.setInstitution("Gujarat Technological University (GTU)");
        bachelors.setLocation("Gujarat, India");
        bachelors.setGrade("9.12 / 10");
        bachelors.setPeriod("2019 - 2023");
        bachelors.setSpecialization("Web Development, Data Analysis, Visualization and Machine Learning, Artificial Intelligence, Java, JavaScript");

        profile.setEducation(List.of(masters, bachelors));

        // CERTIFICATIONS

        profile.setCertifications(List.of(
                "Amazon Full Stack Java Developer",
                "Java Full Stack Development (Spring Boot, React, MySQL, Tailwind CSS, Redux, Cloud Deployment) - Udemy",
                "IBM Data Analytics",
                "Generative AI in Software Development"
        ));

        profile.setInterests(List.of(
                "Exploring new technologies in AI and NLP",
                "Building innovative software solutions",
                "Football, Cricket, Badminton",
                "Networking and collaborative team engagements"
        ));

        return profile;
    }
}
