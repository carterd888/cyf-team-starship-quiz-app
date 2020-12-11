
import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

router.get("/", (_, res, next) => {

	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Hello, world!" });
	});
});

router.get("/quiz", function (req, res, next) {
	Connection.connect((err, pool) => {
		if (err) {
			return next(err);
		}
		pool
			.query("SELECT * FROM quiz")
			.then((result) => res.json(result.rows))
			.catch((e) => console.error(e));
		/* res.json({ message: "Hello, world!" }); */
	});

});

export default router;
