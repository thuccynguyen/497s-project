CREATE TABLE IF NOT EXISTS users 
(
    userId varchar(255) PRIMARY KEY, 
    firstName varchar(255), 
    lastName varchar(255), 
    emailAddress varchar(255),
    password varchar(255),
    numberFollowers int,
    numberFollowing int
);

INSERT INTO users VALUES 
(
    '0', 'Johan', 'Thomas Sajan', 'jthomassajan@umass.edu', 'jthomassajan', 0, 0
);

INSERT INTO users VALUES 
(
    '1', 'Thuccy', 'Nguyen', 'tnguyen@umass.edu', 'tnguyen', 0, 0
);

INSERT INTO users VALUES 
(
    '2', 'Jess', 'Green', 'jgreen@umass.edu', 'jgreen', 0, 0
);

INSERT INTO users VALUES 
(
    '3', 'Zack', 'Simonelli', 'zsimonelli@umass.edu', 'zsimonelli', 0, 0
);

CREATE TABLE IF NOT EXISTS posts 
(
    postId varchar(255) PRIMARY KEY, 
    postCategory varchar(255), 
    numberLikes int,
    numberComments int,
    userId varchar(255) REFERENCES users(userId)
);

INSERT INTO posts VALUES 
(
    '0', 'Dining', 0, 0, '0'
);

INSERT INTO posts VALUES 
(
    '1', 'Blue Wall', 0, 0, '1'
);

INSERT INTO posts VALUES 
(
    '2', 'Dining', 0, 0, '2'
);

INSERT INTO posts VALUES 
(
    '3', 'Blue Wall', 0, 0, '3'
);

CREATE TABLE IF NOT EXISTS comments 
(   
    userId varchar(255) REFERENCES users(userId),
    postId varchar(255) REFERENCES posts(postId)
);

INSERT INTO comments VALUES 
(
    '0', '0'
);

INSERT INTO comments VALUES 
(
    '1', '1'
);

INSERT INTO comments VALUES 
(
    '2', '2'
);

INSERT INTO comments VALUES 
(
    '3', '3'
);

CREATE TABLE IF NOT EXISTS likes 
(   
    userId varchar(255) REFERENCES users(userId),
    postId varchar(255) REFERENCES posts(postId)
);

INSERT INTO likes VALUES 
(
    '0', '0'
);

INSERT INTO likes VALUES 
(
    '1', '1'
);

INSERT INTO likes VALUES 
(
    '2', '2'
);

INSERT INTO likes VALUES 
(
    '3', '3'
);