drop table if exists quiz;
drop table if exists quiz_questions;
drop table if exists results;

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
  student_name VARCHAR(120) NOT NULL,
  student_email VARCHAR(120) NOT NULL,
  score INT  
);

INSERT INTO quiz (quiz_name, quiz_url) VALUES ('HTML_1', 1);

INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer) VALUES (1, 'What does HTML mean?', 'Hyper-Text Markup Language', 'Hyper-Text Market Language' );
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer) VALUES (1, 'What does CSS mean?', 'Cascading Style Sheet', 'Compiled Style Sheet' );

INSERT INTO results (quiz_id, student_name, student_email, score) VALUES (1, 'Joe Blogs', 'JoeBlogs@gmail.com', 10);
