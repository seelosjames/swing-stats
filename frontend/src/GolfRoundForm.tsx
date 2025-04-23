// src/components/GolfRoundForm.tsx
import React, { useEffect, useState } from "react";

interface Course {
	id: number;
	name: string;
	tees: string[]; // Assuming each course has an array of tee names
}

const GolfRoundForm: React.FC = () => {
	const [courses, setCourses] = useState<Course[]>([]);
	const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
	const [selectedTee, setSelectedTee] = useState<string>("");
	const [holeCount, setHoleCount] = useState<"9" | "18">("18");
	const [roundDate, setRoundDate] = useState<string>("");

	useEffect(() => {
		fetch("http://localhost:8000/api/courses/")
			.then((res) => res.json())
			.then((data) => setCourses(data))
			.catch((err) => console.error("Error fetching courses:", err));
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const payload = {
			courseId: selectedCourse,
			tee: selectedTee,
			holes: holeCount,
			date: roundDate,
		};
		console.log("Form Submitted:", payload);
		// You could POST this to your backend
	};

	const selectedCourseTees = courses.find((course) => course.id === selectedCourse)?.tees || [];

	return (
		<form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md space-y-4">
			<h2 className="text-xl font-semibold mb-4">Post Your Golf Round</h2>

			<div>
				<label className="block mb-1 font-medium">Course</label>
				<select
					className="w-full border border-gray-300 rounded-md px-3 py-2"
					value={selectedCourse ?? ""}
					onChange={(e) => {
						const courseId = parseInt(e.target.value);
						setSelectedCourse(courseId);
						setSelectedTee(""); // Reset tee when course changes
					}}
					required
				>
					<option value="" disabled>
						Select a course
					</option>
					{courses.map((course) => (
						<option key={course.id} value={course.id}>
							{course.name}
						</option>
					))}
				</select>
			</div>

			{selectedCourse && (
				<div>
					<label className="block mb-1 font-medium">Tee</label>
					<select
						className="w-full border border-gray-300 rounded-md px-3 py-2"
						value={selectedTee}
						onChange={(e) => setSelectedTee(e.target.value)}
						required
					>
						<option value="" disabled>
							Select a tee
						</option>
						{selectedCourseTees.map((tee, index) => (
							<option key={index} value={tee}>
								{tee}
							</option>
						))}
					</select>
				</div>
			)}

			<div>
				<label className="block mb-1 font-medium">Holes</label>
				<select
					className="w-full border border-gray-300 rounded-md px-3 py-2"
					value={holeCount}
					onChange={(e) => setHoleCount(e.target.value as "9" | "18")}
				>
					<option value="9">9 Holes</option>
					<option value="18">18 Holes</option>
				</select>
			</div>

			<div>
				<label className="block mb-1 font-medium">Date</label>
				<input
					type="date"
					className="w-full border border-gray-300 rounded-md px-3 py-2"
					value={roundDate}
					onChange={(e) => setRoundDate(e.target.value)}
					required
				/>
			</div>

			<button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
				Submit Round
			</button>
		</form>
	);
};

export default GolfRoundForm;
