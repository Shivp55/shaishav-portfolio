FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN ./mvnw -q -DskipTests package

CMD ["java", "-jar", "target/shaishav-portfolio-backend-0.0.1-SNAPSHOT.jar"]
