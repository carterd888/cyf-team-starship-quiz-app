drop table if exists quiz;
drop table if exists quiz_questions;
drop table if exists results;
drop table if exists students;
drop table if exists mentors;

CREATE TABLE quiz (
  id       SERIAL PRIMARY KEY,
  quiz_name     VARCHAR(120),
  quiz_url VARCHAR(120)
);

CREATE TABLE quiz_questions (
  id       SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES quiz(id),
  question     VARCHAR(120) NOT NULL,
  correct_answer    VARCHAR(120) NOT NULL,
  wrong_answer    VARCHAR(120) NOT NULL
);

CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  quiz_id INT REFERENCES quiz(id),
  student_id INT REFERENCES students(id), 
  score INT  
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR(120) NOT NULL,
  student_email VARCHAR(120) NOT NULL
);

CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  mentor_email VARCHAR(120) NOT NULL
);

INSERT INTO quiz (quiz_name, quiz_url) VALUES ('HTML', 1);
INSERT INTO quiz (quiz_name, quiz_url) VALUES ('CSS', 2);
INSERT INTO quiz (quiz_name, quiz_url) VALUES ('JS', 3);
INSERT INTO quiz (quiz_name, quiz_url) VALUES ('REACT', 4);
INSERT INTO quiz (quiz_name, quiz_url) VALUES ('NODE', 5);
INSERT INTO quiz (quiz_name, quiz_url) VALUES ('SQL', 6);


INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer) VALUES (1, 'What does HTML mean?', 'Hyper-Text Markup Language', 'Hyper-Text Market Language' );
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer) VALUES (1, 'What does CSS mean?', 'Cascading Style Sheet', 'Compiled Style Sheet' );

INSERT INTO students (student_name, student_email) VALUES ('Daniel Carter', 'dan@gmail.com');
INSERT INTO students (student_name, student_email) VALUES ('Gabriel Gabriewski', 'gab@gmail.com');
INSERT INTO students (student_name, student_email) VALUES ('Ekip Kalir', 'eki@gmail.com');


INSERT INTO mentors (mentor_email) VALUES ('eki@gmail.com');
INSERT INTO mentors (mentor_email) VALUES ('den@gmail.com');
INSERT INTO mentors (mentor_email) VALUES ('gab@gmail.com');


INSERT INTO results (quiz_id, student_id, score) VALUES (1, 1, 10);
