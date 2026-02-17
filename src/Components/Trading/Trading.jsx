import React from "react";
import SectionHeader from "../SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const products = [
	{
		emoji: "🌾",
		title: "Agricultural Products",
		bg: "from-green-50 to-lime-50",
		icon: "bg-green-600",
		desc: "Rice, spices, coffee, tea, fruits, vegetables, and other agricultural commodities.",
	},
	{
		emoji: "🐟",
		title: "Seafood",
		bg: "from-blue-50 to-cyan-50",
		icon: "bg-blue-600",
		desc: "Fresh and processed seafood including shrimp, fish, crab, and other marine products.",
	},
	{
		emoji: "👗",
		title: "Garments",
		bg: "from-purple-50 to-pink-50",
		icon: "bg-purple-600",
		desc: "Textiles, ready-made garments, fashion accessories, and clothing for all segments.",
	},
	{
		emoji: "👜",
		title: "Leather Products",
		bg: "from-amber-50 to-orange-50",
		icon: "bg-amber-600",
		desc: "Leather goods, footwear, bags, belts, and premium leather accessories.",
	},
	{
		emoji: "⚡",
		title: "Electrical Appliances",
		bg: "from-yellow-50 to-amber-50",
		icon: "bg-yellow-600",
		desc: "Home appliances, consumer electronics, and electrical equipment.",
	},
	{
		emoji: "🍱",
		title: "Food & Beverages",
		bg: "from-red-50 to-orange-50",
		icon: "bg-red-600",
		desc: "Processed foods, beverages, snacks, and specialty food products.",
	},
	{
		emoji: "🚜",
		title: "Agricultural Machinery",
		bg: "from-emerald-50 to-teal-50",
		icon: "bg-emerald-600",
		desc: "Farm equipment, machinery, spare parts, and agricultural technology solutions.",
	},
	{
		emoji: "💻",
		title: "Computers & IT Equipment",
		bg: "from-indigo-50 to-blue-50",
		icon: "bg-indigo-600",
		desc: "Computers, software, electronic and telecommunication equipment and components.",
	},
	{
		emoji: "🌲",
		title: "Forestry Raw Materials",
		bg: "from-stone-50 to-neutral-50",
		icon: "bg-stone-600",
		desc: "Timber, wood products, furniture, and forestry-based raw materials.",
	},
	{
		emoji: "💊",
		title: "Pharmaceuticals",
		bg: "from-rose-50 to-pink-50",
		icon: "bg-rose-600",
		desc: "Pharmaceutical products, medical devices, and healthcare equipment.",
	},
	{
		emoji: "💄",
		title: "Perfumes & Cosmetics",
		bg: "from-fuchsia-50 to-purple-50",
		icon: "bg-fuchsia-600",
		desc: "Fragrances, beauty products, personal care items, and cosmetics.",
	},
	{
		emoji: "💍",
		title: "Jewelry & Handicrafts",
		bg: "from-yellow-50 to-amber-50",
		icon: "bg-yellow-700",
		desc: "Gold jewelry, silver, precious & semi-precious stones, souvenirs, and handicrafts.",
	},
];

function ProductCard({ emoji, title, bg, icon, desc, index }) {
	const [ref, visible] = useScrollReveal(0.08);
	return (
		<div
			ref={ref}
			className={`bg-gradient-to-br ${bg} rounded-xl shadow-card p-6 hover:shadow-card-hover transition-shadow duration-300`}
		>
			<div
				className={`${icon} w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4`}
			>
				{emoji}
			</div>
			<h3
				className={`text-lg font-bold text-gray-800 mb-2 card-heading ${visible ? "card-heading-in" : ""}`}
				style={{ animationDelay: `${index * 0.05}s` }}
			>
				{title}
			</h3>
			<p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
		</div>
	);
}

export default function Trading() {
	return (
		<div className="space-y-10">
			<SectionHeader
				title="Trading Services"
				subtitle="Connecting businesses across borders with quality products"
				align="center"
				accent="bg-emerald-600"
			/>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((p, i) => (
					<ProductCard key={p.title} {...p} index={i} />
				))}
			</div>
		</div>
	);
}
