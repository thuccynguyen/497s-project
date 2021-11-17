CREATE TABLE IF NOT EXISTS users 
(
    userId varchar(255), 
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