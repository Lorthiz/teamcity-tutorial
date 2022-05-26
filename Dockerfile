FROM openjdk:11
                        
COPY backend/spring-starter/target/spring-starter-0.0.1-SNAPSHOT.jar app.jar
COPY frontend/build /frontend/static

EXPOSE 3001
                        
ENTRYPOINT ["java", "-jar", "app.jar"]