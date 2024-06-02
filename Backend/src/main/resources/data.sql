CREATE TABLE company
(
    id   BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
CREATE TABLE service
(
    id          BIGINT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    company_id  BIGINT,
    FOREIGN KEY (company_id) REFERENCES company (id)
);
CREATE TABLE users
(
    id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO company (name)
VALUES ('Company A');
INSERT INTO service (name, description, company_id)
VALUES ('Service A', 'Description A', 1);
INSERT INTO users (name, email)
VALUES ('User A', 'usera@example.com');
