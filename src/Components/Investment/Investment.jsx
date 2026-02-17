import React from "react";
import { TrendingUp, Building2 } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const consultancySteps = [
	"Market research and feasibility studies",
	"Legal entity formation and registration",
	"Licensing and regulatory compliance",
	"Site selection and location analysis",
	"Partner identification and due diligence",
	"Investment incentives and tax planning",
	"Project implementation support",
	"Post-investment services and support",
];

const realEstateServices = [
	{
		title: "Real Estate Consulting",
		description:
			"Expert advice on property investments, market trends, and strategic real estate decisions in Vietnam and India.",
	},
	{
		title: "Real Estate Brokerage",
		description:
			"Professional brokerage services for commercial, industrial, and residential properties with extensive market networks.",
	},
	{
		title: "Real Estate Management",
		description:
			"Comprehensive property management including tenant relations, maintenance, and asset optimisation.",
	},
];

const sectors = [
	{
		label: "Manufacturing",
		color: "border-blue-600",
		desc: "Electronics, automotive, textiles, and industrial production",
	},
	{
		label: "Technology",
		color: "border-green-600",
		desc: "IT services, software development, and digital innovation",
	},
	{
		label: "Real Estate",
		color: "border-orange-600",
		desc: "Commercial, industrial, and residential developments",
	},
	{
		label: "Agriculture",
		color: "border-purple-600",
		desc: "Agribusiness, food processing, and agricultural technology",
	},
	{
		label: "Healthcare",
		color: "border-red-600",
		desc: "Medical facilities, pharmaceuticals, and healthcare services",
	},
	{
		label: "Infrastructure",
		color: "border-indigo-600",
		desc: "Transportation, energy, and urban development projects",
	},
];

export default function Investment() {
	const [consultRef, consultVisible] = useScrollReveal(0.1);
	const [realRef, realVisible] = useScrollReveal(0.1);
	const [sectorsRef, sectorsVisible] = useScrollReveal(0.1);

	return (
		<div className="space-y-10">
			{/* Animated page header */}
			<SectionHeader
				title="Investment Services"
				subtitle="Your gateway to investment opportunities in Vietnam and India"
				align="center"
				accent="bg-blue-600"
			/>

			{/* Two-column cards */}
			<div className="grid md:grid-cols-2 gap-8">
				{/* Consultancy */}
				<div
					ref={consultRef}
					className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-card p-8"
				>
					<div className="flex items-center gap-4 mb-6">
						<div className="icon-badge bg-blue-600 self-start">
							<TrendingUp className="w-6 h-6 text-white" />
						</div>
						<h2
							className={`text-2xl font-bold text-gray-800 card-heading ${consultVisible ? "card-heading-in" : ""}`}
						>
							Investment Consultancy
						</h2>
					</div>
					<p className="font-semibold text-gray-700 mb-4">
						A to Z Investment Process Support:
					</p>
					<ul className="space-y-2">
						{consultancySteps.map((step) => (
							<li
								key={step}
								className="flex items-start gap-2 text-gray-700 text-sm"
							>
								<span className="text-blue-600 mt-0.5">✓</span>
								{step}
							</li>
						))}
					</ul>
				</div>

				{/* Real Estate */}
				<div
					ref={realRef}
					className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-card p-8"
				>
					<div className="flex items-center gap-4 mb-6">
						<div className="icon-badge bg-green-600 self-start">
							<Building2 className="w-6 h-6 text-white" />
						</div>
						<h2
							className={`text-2xl font-bold text-gray-800 card-heading ${realVisible ? "card-heading-in" : ""}`}
						>
							Real Estate Services
						</h2>
					</div>
					<div className="space-y-5">
						{realEstateServices.map(({ title, description }, i) => (
							<div key={title}>
								<h3
									className={`font-bold text-gray-800 mb-1 card-heading ${realVisible ? "card-heading-in" : ""}`}
									style={{ animationDelay: `${0.1 + i * 0.1}s` }}
								>
									{title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Key sectors */}
			<div ref={sectorsRef} className="card">
				<h2
					className={`text-2xl font-bold text-gray-800 mb-6 card-heading ${sectorsVisible ? "card-heading-in" : ""}`}
				>
					Key Investment Sectors
				</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
					{sectors.map(({ label, color, desc }, i) => (
						<div key={label} className={`border-l-4 ${color} pl-4`}>
							<h4
								className={`font-bold text-gray-800 mb-1 card-heading ${sectorsVisible ? "card-heading-in" : ""}`}
								style={{ animationDelay: `${i * 0.08}s` }}
							>
								{label}
							</h4>
							<p className="text-gray-500 text-sm">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
