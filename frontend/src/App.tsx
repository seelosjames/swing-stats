import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Header from "./Header";
import { AuthProvider } from "./context/AuthContext";
import GolfRoundForm from "./GolfRoundForm";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="h-screen flex flex-col">
					<Header />
					<main className="grow bg-green-50">
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/add-round" element={<GolfRoundForm />} />
						</Routes>
					</main>
				</div>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
