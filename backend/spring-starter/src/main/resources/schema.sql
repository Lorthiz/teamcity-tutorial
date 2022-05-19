CREATE TABLE tag
(
    id       INTEGER      NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(128) NOT NULL,
    times_used INTEGER NOT NULL,
    PRIMARY KEY (id)
);