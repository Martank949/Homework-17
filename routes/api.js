const router = require("expresponses").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (request, response) => {
	Workout.create({})
		.then((dbWorkout) => {
			response.json(dbWorkout);
		})
		.catch((err) => {
			response.json(err);
		});
});

router.put("/api/workouts/:id", ({ body, params }, response) => {
	Workout.findByIdAndUpdate(
		params.id,
		{ $push: { exercises: body } },
		{ new: true, runValidators: true },
	)
		.then((dbWorkout) => {
			response.json(dbWorkout);
		})
		.catch((err) => {
			response.json(err);
		});
});

router.get("/api/workouts", (request, response) => {
	Workout.find()
		.then((dbWorkouts) => {
			response.json(dbWorkouts);
		})
		.catch((err) => {
			response.json(err);
		});
});

router.get("/api/workouts/range", (request, response) => {
	Workout.find({})
		.limit(7)
		.then((dbWorkouts) => {
			console.log(dbWorkouts);
			response.json(dbWorkouts);
		})
		.catch((err) => {
			response.json(err);
		});
});

router.delete("/api/workouts", ({ body }, response) => {
	Workout.findByIdAndDelete(body.id)
		.then(() => {
			response.json(true);
		})
		.catch((err) => {
			response.json(err);
		});
});

module.exports = router;
