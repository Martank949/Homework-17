const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: "Exercise Type",
				},
				name: {
					type: String,
					trim: true,
					required: "Exercise Name",
				},
				duration: {
					type: Number,
					required: "Exercise Duration (Measured In Minutes)",
				},
				weight: {
					type: Number,
					required: "Exercise Weight (Measured In Pounds)",
				},
				reps: {
					type: Number,
					required: "Repetition Count (Amount Of Times)",
				},
				sets: {
					type: Number,
					required: "Set Count (Amount Of Times = 1 Set)",
				},
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	},
);

workoutSchema.virtual("totalDuration").get(function () {
	return this.exercises.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});

//Export Workout
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
