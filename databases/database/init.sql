CREATE TABLE IF NOT EXISTS users 
(
    userId varchar(255),
    username varchar(255), 
    password varchar(255)
);

INSERT INTO users VALUES 
(
    '0', 'Johan', 'jthomassajan'
);

INSERT INTO users VALUES 
(
    '1', 'Thuccy', 'tnguyen'
);

INSERT INTO users VALUES 
(
    '2', 'Jess', 'jgreen'
);

INSERT INTO users VALUES 
(
    '3', 'Zack', 'zsimonelli'
);

CREATE TABLE IF NOT EXISTS posts 
(
    userId varchar(255),
    postId varchar(255), 
    post varchar(255),
    tag varchar(255)
);

INSERT INTO posts VALUES 
(
    '0', '0', 'Post 0', 'Berk'
);

INSERT INTO posts VALUES 
(
    '1', '1', 'Post 1', 'Berk'
);

INSERT INTO posts VALUES 
(
    '2', '2', 'Post 2', 'Hamp'
);

INSERT INTO posts VALUES 
(
    '3', '3', 'Post 3', 'Frank'
);

CREATE TABLE IF NOT EXISTS comments 
(   
    commentId varchar(255),
    postId varchar(255),
    comment varchar(255),
    status varchar(255)
);

INSERT INTO comments VALUES 
(
    '0', '0', 'Comment 0', 'Created'
);

INSERT INTO comments VALUES 
(
    '1', '1', 'Comment 1', 'Created'
);

INSERT INTO comments VALUES 
(
    '2', '2', 'Comment 2', 'Created'
);

INSERT INTO comments VALUES 
(
    '3', '3', 'Comment 3', 'Created'
);

CREATE TABLE IF NOT EXISTS likes 
(   
    postId varchar(255),
    liked varchar(255),
    totaLikes int
);

INSERT INTO likes VALUES 
(
    '0', 'true', '1'
);

INSERT INTO likes VALUES 
(
    '1', 'true', '1'
);

INSERT INTO likes VALUES 
(
    '2', 'true', '1'
);

INSERT INTO likes VALUES 
(
    '3', 'true', '1'
);