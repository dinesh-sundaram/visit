import React from "react";
import { Building2, Globe, Package, TrendingUp } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useScrollReveal } from "./useScrollReveal";

const services = [
	{
		icon: Building2,
		iconBg: "bg-blue-100",
		iconColor: "text-blue-600",
		title: "Back Office Support",
		description:
			"Complete back office solutions for foreign companies including administrative support, documentation, compliance, and operational management.",
	},
	{
		icon: Globe,
		iconBg: "bg-purple-100",
		iconColor: "text-purple-600",
		title: "Website & IT Solutions",
		description:
			"Professional web development, software solutions, digital transformation, and IT consulting services tailored to your business needs.",
	},
	{
		icon: Package,
		iconBg: "bg-green-100",
		iconColor: "text-green-600",
		title: "Event Support Services",
		description:
			"End-to-end event management including planning, coordination, logistics, and execution for corporate events, conferences, and trade shows.",
	},
	{
		icon: Globe,
		iconBg: "bg-orange-100",
		iconColor: "text-orange-600",
		title: "Translation Services",
		description:
			"Professional translation and interpretation in Vietnamese, English, Hindi, and other languages for business documents and communications.",
	},
	{
		icon: Package,
		iconBg: "bg-red-100",
		iconColor: "text-red-600",
		title: "Printing Services",
		description:
			"High-quality printing for business cards, brochures, marketing materials, and corporate documentation.",
	},
	{
		icon: Building2,
		iconBg: "bg-indigo-100",
		iconColor: "text-indigo-600",
		title: "Office Administrative Services",
		description:
			"General office management, secretarial services, document handling, scheduling, and day-to-day administrative support.",
	},
	{
		icon: TrendingUp,
		iconBg: "bg-yellow-100",
		iconColor: "text-yellow-600",
		title: "Trade Promotion & Marketing",
		description:
			"Market research, business matchmaking, trade mission organisation, and marketing activities to promote your products and services.",
	},
	{
		icon: Package,
		iconBg: "bg-pink-100",
		iconColor: "text-pink-600",
		title: "Catering Services",
		description:
			"Professional catering for meetings, corporate parties, weddings, and special events with diverse menu options and excellent service.",
	},
];

function ServiceCard({
	icon: Icon,
	iconBg,
	iconColor,
	title,
	description,
	index,
}) {
	const [ref, visible] = useScrollReveal(0.1);
	return (
		<div ref={ref} className="card flex gap-4">
			<div className={`icon-badge ${iconBg} self-start`}>
				<Icon className={`w-6 h-6 ${iconColor}`} />
			</div>
			<div>
				<h3
					className={`text-lg font-bold text-gray-800 mb-1 card-heading ${visible ? "card-heading-in" : ""}`}
					style={{ animationDelay: `${index * 0.07}s` }}
				>
					{title}
				</h3>
				<p className="text-gray-600 text-sm leading-relaxed">{description}</p>
			</div>
		</div>
	);
}

export default function Services() {
	return (
		<div className="space-y-10">
			<SectionHeader
				title="Our Services"
				subtitle="Comprehensive business support solutions"
				align="center"
				accent="bg-purple-600"
			/>
			<div className="grid sm:grid-cols-2 gap-6">
				{services.map((svc, i) => (
					<ServiceCard key={svc.title} {...svc} index={i} />
				))}
			</div>
		</div>
	);
}
