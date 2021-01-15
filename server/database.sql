drop table if exists students;
drop table if exists mentors;
drop table if exists results;
drop table if exists quiz_questions;
drop table if exists quiz;


CREATE TABLE quiz (
  id            SERIAL PRIMARY KEY,
  quiz_name     VARCHAR(120)
);

CREATE TABLE quiz_questions (
  id                SERIAL PRIMARY KEY,
  quiz_id           INT REFERENCES quiz(id),
  question          VARCHAR(120) NOT NULL,
  correct_answer    VARCHAR(120) NOT NULL,
  wrong_answer_1    VARCHAR(120) NOT NULL,
  wrong_answer_2    VARCHAR(120),
  wrong_answer_3    VARCHAR(120),
  wrong_answer_4    VARCHAR(120),
  wrong_answer_5    VARCHAR(120)
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

CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  quiz_id INT NOT NULL REFERENCES quiz(id),
  student_id INT NOT NULL REFERENCES students(id), 
  score INT NOT NULL,  
  quiz_length INT NOT NULL 
);

INSERT INTO quiz (quiz_name) VALUES ('HTML');

INSERT INTO students (student_name, student_email) VALUES ('Daniel Carter', 'carterdaniel@hotmail.com');
INSERT INTO students (student_name, student_email) VALUES ('Gabriel', 'gab@gmail.com');
INSERT INTO students (student_name, student_email) VALUES ('Ekip Kalir', 'ekipkalir@gmail.com');

INSERT INTO mentors (mentor_email) VALUES ('carterdaniel@hotmail.com');
INSERT INTO mentors (mentor_email) VALUES ('gab@gmail.com');
INSERT INTO mentors (mentor_email) VALUES ('ekipkalir@gmail.com');

INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'What does HTML stand for?', 'Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Text Mixing Language');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3, wrong_answer_4) VALUES (1, 'Who is making the Web standards?', 'The World Wide Web Consortium', 'Microsoft', 'Mozilla', 'Google', 'Elon Musk');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3, wrong_answer_4) VALUES (1, 'Which is the correct answer for the line break?', '<hr>', '<h1>', '<dr>', '<span>', '<a>');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3, wrong_answer_4) VALUES (1, 'What is the correct HTML for adding a background colour?', '<body style=”background-color:yellow;”>', '<body bg=”yellow”>', '<background> yellow<background>', '<background-color= style=”background-color:yellow;”>', '<body style:”background-color:yellow;”>');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'Which one is used to define important text?', '<strong>', '<important>', '<b>', '<i>');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3, wrong_answer_4) VALUES (1, 'Which one is used to define emphasized text?', '<em>', '<important>', '<italic>', '<bold>', '<emp>');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2) VALUES (1, 'What is the correct sequence of HTML tags for starting a webpage?', 'HTML, Head, Title', 'Head, Title, HTML', 'Title, Head, HTML');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'Choose the correct HTML tag for the largest heading.', 'h1', 'heading', 'head', 'h6');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'Choose the correct HTML tag to make the text italic.', 'i', 'italic', 'it', 'ita');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'What is the correct HTML for creating a hyperlink?', '<a href="http://www.google.com"> Google </a>', '<a url="http://www.google.com"> Google.com </a>', '<a name="http://www.google.com"> Google.com </a>', '<a http://www.google.com /a>');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'How can you create an email link?', 'a href="mailto:xxx@yyy"', 'a href="xxx@yyy"', 'mail>xxx@yyy', 'mail href="xxx@yyy"');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'How can you make a list that lists the items with numbers?', 'ol', 'dl', 'ul', 'list');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'How can you make a list that lists the items with bullets?', 'ul', 'dl', 'ol', 'list');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1,  wrong_answer_2,  wrong_answer_3) VALUES (1, 'What is the correct HTML for inserting an image?', '<img src="image.gif" />', '<img href="image.gif" />', '<image src="image.gif" />', 'img>image.gif');
INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1) VALUES (1, 'A "radio" button used on a web page, would allow a person to select:', 'Only one item', 'More than one item'); 