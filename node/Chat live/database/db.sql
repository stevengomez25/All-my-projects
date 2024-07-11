CREATE DATABASE database_links;

USE database_links;

--Users Table

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    full_name VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

DESCRIBE users;



--Link Table

CREATE TABLE link(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE link
    ADD PRIMARY KEY (id);

ALTER TABLE link
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =2;

DESCRIBE link;


-- Creando tabla de chats

CREATE TABLE chats (
    id INT(11) NOT NULL AUTO_INCREMENT,
    user1_id INT(11) NOT NULL,
    user2_id INT(11) NOT NULL,
    message TEXT NOT NULL,
    sent_by INT(11) NOT NULL, -- ID del usuario que envió el mensaje
    sent_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    INDEX idx_users (user1_id, user2_id), -- Índice para facilitar búsquedas
    CONSTRAINT fk_user1 FOREIGN KEY (user1_id) REFERENCES users(id),
    CONSTRAINT fk_user2 FOREIGN KEY (user2_id) REFERENCES users(id)
);