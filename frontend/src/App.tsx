import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Landing from "./Landing";
import Header from "./Header";
import { AuthProvider } from "./context/AuthContext";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					
					</Routes>
				</main>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
