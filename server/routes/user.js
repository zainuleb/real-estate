/* The routes/Users.js file will act as the glue between the URI 
and the corresponding function in the services/Users.js service. */

const express = require("express");
const router = express.Router();
const user = require("../services/user");

/* GET User */
router.get("/", async function (req, res, next) {
	try {
		res.json(await user.getMultiple(req.query.page));
	} catch (err) {
		console.error(`Error while getting users `, err.message);
		next(err);
	}
});

/* POST User */
router.post("/", async function (req, res, next) {
	try {
		res.json(await user.create(req.body));
	} catch (err) {
		console.error(`Error while creating User`, err.message);
		next(err);
	}
});

/* PUT User */
router.put("/:id", async function (req, res, next) {
	try {
		res.json(await user.update(req.params.id, req.body));
	} catch (err) {
		console.error(`Error while updating User`, err.message);
		next(err);
	}
});

/* DELETE Users */
router.delete("/:id", async function (req, res, next) {
	try {
		res.json(await user.remove(req.params.id));
	} catch (err) {
		console.error(`Error while deleting User`, err.message);
		next(err);
	}
});

module.exports = router;
