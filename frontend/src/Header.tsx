import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

function Header() {
	const authContext = useContext(AuthContext);

	if (!authContext) {
		throw new Error("AuthContext must be used within an AuthProvider");
	}

	const { user, logoutUser } = authContext;

	return (
		<header className="w-full bg-white shadow-md py-4 px-16 flex justify-between items-center fixed z-50">
			{/* Logo Section */}
			<Link to="/">
				<div className="flex items-center gap-3">
					<img
						src="/logos/golf-ball.svg" // Replace this with your golf-themed logo
						alt="Swing Stats Logo"
						className="h-12 w-12 object-contain"
					/>
					<h1 className="text-3xl font-extrabold text-green-700 tracking-wide">Swing Stats</h1>
				</div>
			</Link>

			{/* Authentication Section */}
			<div>
				{user ? (
					<div className="flex items-center gap-4">
						<FaUserCircle className="text-green-700 text-2xl" />
						<button onClick={logoutUser} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
							Logout
						</button>
					</div>
				) : (
					<div className="flex gap-4 items-center">
						<Link to="/signup">
							<button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Sign Up</button>
						</Link>
						<Link to="/login">
							<button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">Login</button>
						</Link>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
