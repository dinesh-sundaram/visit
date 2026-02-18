import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Investment from "./Components/Investment";
import Trading from "./Components/Trading";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const navigation = [
	{ id: "home", label: "Home" },
	{ id: "services", label: "Services" },
	{ id: "investment", label: "Investment" },
	{ id: "trading", label: "Trading" },
	{ id: "contact", label: "Contact" },
];

export default function App() {
	const [currentPage, setCurrentPage] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const pages = {
		home: <Home />,
		services: <Services />,
		investment: <Investment />,
		trading: <Trading />,
		contact: <Contact />,
	};

	const handleNavigate = (pageId) => {
		setCurrentPage(pageId);
		setMobileMenuOpen(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<NavBar
				navigation={navigation}
				currentPage={currentPage}
				onNavigate={handleNavigate}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>

			<main className="flex-1 container mx-auto px-4 py-10 animate-fade-in">
				{pages[currentPage] ?? <Home />}
			</main>

			<Footer navigation={navigation} onNavigate={handleNavigate} />
		</div>
	);
}
