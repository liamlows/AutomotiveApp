# We are using MySQL 8
FROM mysql

# Establish MySQL DB as environment variable
ENV MYSQL_DATABASE=AutomotiveApp
ENV MYSQL_RANDOM_ROOT_PASSWORD=1

# Copy in first run SQL scripts
COPY ./SQL-SCRIPTS/CreateTable.sql /docker-entrypoint-initdb.d/

EXPOSE 3306
