FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw

RUN ./mvnw -q -DskipTests package

CMD ["sh", "-c", "java -jar target/*.jar"]
