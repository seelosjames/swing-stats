import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Define the Course type based on what your backend returns
interface Course {
	id: number;
	name: string;
	city: string;
	state: string;
}

function Landing() {
	const [courses, setCourses] = useState<Course[]>([]);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const response = await fetch("/api/courses/"); // adjust to your actual endpoint
				const data: Course[] = await response.json(); // type the response as Course[]
				setCourses(data);
			} catch (error) {
				console.error("Error fetching courses:", error);
			}
		};

		fetchCourses();
	}, []);

	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 p-6 pt-24 relative">


			{/* Course List */}
			<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
				{courses.length > 0 ? (
					courses.map((course) => (
						<div key={course.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
							<h2 className="text-2xl font-bold text-green-800">{course.name}</h2>
							<p className="text-gray-600">
								{course.city}, {course.state}
							</p>
						</div>
					))
				) : (
					<p className="text-center col-span-full text-gray-500">No courses found.</p>
				)}
			</div>

			{/* Floating Add Course Button (FAB) */}
			<Link to="/add-course">
				<button
					className="fixed bottom-8 right-8 bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:bg-green-700 text-3xl flex items-center justify-center"
					title="Add Course"
				>
					+
				</button>
			</Link>
		</div>
	);
}

export default Landing;
