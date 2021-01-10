import { Router } from "express";
import { pool } from "./db";
const router = new Router();

router.get("/quiz/:name", function (req, res, next) {
  const name = req.params.name;

  pool
    .query("SELECT id FROM quiz WHERE quiz_name= $1 ", [name])
    .then((result) => res.json(result.rows))
    .catch((e) => next(e));
});

router.get("/quizlist", function (req, res, next) {

    pool
      .query("SELECT * FROM quiz ORDER BY id DESC ")
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });


router.get("/questions/:id", function (req, res, next) {


    const id = req.params.id;
    pool
      .query("SELECT * FROM quiz_questions WHERE quiz_id = $1", [id])
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });


router.put("/questions/:id", function (req, res, next) {


    const id = req.params.id;
    const question = req.body.question;
    const correctAnswer = req.body.correct_answer;
    const wrongAnswer1 = req.body.wrong_answer_1;
    const wrongAnswer2 = req.body.wrong_answer_2;
    const wrongAnswer3 = req.body.wrong_answer_3;
    const wrongAnswer4 = req.body.wrong_answer_4;
    const wrongAnswer5 = req.body.wrong_answer_5;

    pool
      .query(
        "UPDATE quiz_questions SET question=$1, correct_answer=$2, wrong_answer_1=$3, wrong_answer_2=$4, wrong_answer_3=$5, wrong_answer_4=$6, wrong_answer_5=$7 WHERE id=$8",
        [
          question,
          correctAnswer,
          wrongAnswer1,
          wrongAnswer2,
          wrongAnswer3,
          wrongAnswer4,
          wrongAnswer5,
          id,
        ]
      )
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.delete("/questions/:id", function (req, res, next) {


    const id = req.params.id;

    pool
      .query("DELETE FROM  quiz_questions WHERE id=$1", [id])
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.get("/students/:studentEmail", function (req, res, next) {


    const studentEmail = req.params.studentEmail;
    pool
      .query("SELECT id FROM students WHERE student_email = $1", [studentEmail])
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.post("/quizname", function (req, res, next) {


    const quizName = req.body.quiz_name;
    const quizUrl = req.body.quiz_url;

    const query = "INSERT INTO quiz (quiz_name, quiz_url) VALUES ($1, $2)";
    pool
      .query(query, [quizName, quizUrl])
      .then(() => res.send("Quiz name is added!"))
      .catch((e) => next(e));
  });

router.post("/quiz", function (req, res, next) {


    const question = req.body.question;
    const correctAnswer = req.body.correct_answer;
    const wrongAnswer1 = req.body.wrong_answer_1;
    const wrongAnswer2 = req.body.wrong_answer_2;
    const wrongAnswer3 = req.body.wrong_answer_3;
    const wrongAnswer4 = req.body.wrong_answer_4;
    const wrongAnswer5 = req.body.wrong_answer_5;
    const quizName = req.body.quiz_id;

    const query =
      "INSERT INTO quiz_questions (quiz_id, question, correct_answer, wrong_answer_1," +
      "wrong_answer_2, wrong_answer_3, wrong_answer_4, wrong_answer_5) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
    pool
      .query(query, [
        quizName,
        question,
        correctAnswer,
        wrongAnswer1,
        wrongAnswer2,
        wrongAnswer3,
        wrongAnswer4,
        wrongAnswer5,
      ])
      .then(() => res.send("Question added!"))
      .catch((e) => next(e));
  });

router.post("/results", function (req, res, next) {


    const quizId = req.body.quiz_id;
    const studentId = req.body.student_id;
    const score = req.body.score;
    const quizLength = req.body.quiz_length;

    const query =
      "INSERT INTO results (quiz_id, student_id, score, quiz_length) VALUES ($1, $2, $3, $4)";
    pool
      .query(query, [quizId, studentId, score, quizLength])
      .then(() => res.send("Results added!"))
      .catch((e) => next(e));
  });

router.get("/studentresults", function (req, res, next) {


    pool
      .query(
        "SELECT quiz.quiz_name, results.score FROM results" +
          " INNER JOIN students ON students.id = results.student_id INNER JOIN quiz ON results.quiz_id = quiz.id"
      )
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.get("/studentresults/student/:id", function (req, res, next) {

    const id = req.params.id;

    pool
      .query(
        "SELECT students.student_name, quiz.quiz_name, results.score FROM results INNER JOIN students ON students.id = results.student_id INNER JOIN quiz ON results.quiz_id = quiz.id WHERE student_id = $1 ORDER BY results.id DESC",
        [id]
      )
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.get("/studentresults/:id", function (req, res, next) {


    const id = req.params.id;

    pool
      .query(
        "SELECT * FROM results WHERE student_id = $1 ORDER BY id DESC LIMIT 1",
        [id]
      )
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.get("/mentorresults", function (req, res, next) {


    pool
      .query(
        "SELECT quiz.quiz_name, students.student_name, results.score FROM results" +
          " INNER JOIN students ON students.id = results.student_id INNER JOIN quiz ON results.quiz_id = quiz.id" +
          " ORDER BY results.score"
      )
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

router.get("/mentorresults/:id", function (req, res, next) {


    const id = req.params.id;

    pool
      .query(
        "SELECT results.id, quiz.quiz_name, students.student_name, results.score FROM results" +
          " INNER JOIN students ON students.id = results.student_id INNER JOIN quiz ON results.quiz_id = quiz.id" +
          " WHERE results.quiz_id = $1 ORDER BY results.score",
        [id]
      )
      .then((result) => res.json(result.rows))
      .catch((e) => next(e));
  });

// router.post("/students", function (req, res, next) {
//   const studentName = req.body.student_name;
//   const studentEmail = req.body.student_email;

//   pool.connect().then((client) => {
//     return client
//       .query("SELECT * FROM students WHERE student_email=$1", [studentEmail])
//       .then((result) => {
//         if (result.rows.length > 0) {
//           client.release();
//           return res
//             .status(200)
//             .send(`There is a student  with that ${studentEmail}`);
//         } else {
//           const query =
//             "INSERT INTO students (student_name, student_email) VALUES ($1, $2)";
//           client
//             .query(query, [studentName, studentEmail])
//             .then(() => {
//               client.release();
//               return res.send("Student details added!");
//             })
//             .catch((e) => next(e));
//         }
//       });
//   });
// });

router.post("/mentors", async function (req, res, next) {
  const mentorEmail = req.body.mentor_email;

  const client = await pool.connect();
  try {
    const mentorResult = await client.query(
      "SELECT * FROM mentors WHERE mentor_email=$1",
      [mentorEmail]
    );
    if (mentorResult.rows.length > 0) {
      return res.status(200).send(`There is a mentor with that ${mentorEmail}`);
    }
    await client.query("INSERT INTO mentors (mentor_email) VALUES ($1)", [
      mentorEmail,
    ]);

    return res.send("Mentor details added!");
  } catch (error) {
    next(error);
  } finally {
    client.release();
  }
});


router.post("/students", async function (req, res, next) {
  const studentEmail = req.body.student_email;
  const studentName = req.body.student_name;

  const client = await pool.connect();
  try {
    const studentResult = await client.query(
      "SELECT * FROM students WHERE student_email=$1",
      [studentEmail]
    );
    if (studentResult.rows.length > 0) {
      return res.status(200).send(`There is a student with that ${studentEmail}`);
    }
    await client.query("INSERT INTO students (student_name, student_email) VALUES ($1, $2)", [
      studentName, studentEmail
    ]);

    return res.send("Student details added!");
  } catch (error) {
    next(error);
  } finally {
    client.release();
  }
});


export default router;
