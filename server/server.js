import http from "http";

import app from "./app";

const port = parseInt(process.env.PORT || "3000");

const server = http.createServer(app);

app.get("/quiz", function (req, res) {
  pool
    .query("SELECT * FROM quiz")
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

server.listen(port);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
});
