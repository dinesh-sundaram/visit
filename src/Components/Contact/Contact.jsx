import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "../SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactItems = [
	{
		icon: MapPin,
		iconBg: "bg-blue-600",
		title: "Office Address",
		lines: ["[Your Office Address]", "[City, State, Postal Code]"],
	},
	{
		icon: Phone,
		iconBg: "bg-green-600",
		title: "Contact Numbers",
		lines: [
			"Phone: [Your Phone Number]",
			"Mobile: [Your Mobile Number]",
			"Fax: [Your Fax Number]",
		],
	},
	{
		icon: Mail,
		iconBg: "bg-purple-600",
		title: "Email",
		lines: [
			"info@vietnamindiaservices.com",
			"contact@vietnamindiaservices.com",
		],
	},
];

const locations = {
	vietnam: [
		{ city: "Hanoi", address: "[Address]" },
		{ city: "Ho Chi Minh City", address: "[Address]" },
		{ city: "Da Nang", address: "[Address]" },
	],
	india: [
		{ city: "New Delhi", address: "[Address]" },
		{ city: "Mumbai", address: "[Address]" },
		{ city: "Bangalore", address: "[Address]" },
	],
};

export default function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [infoRef, infoVisible] = useScrollReveal(0.1);
	const [locRef, locVisible] = useScrollReveal(0.1);
	const [formRef, formVisible] = useScrollReveal(0.1);
	const [hoursRef, hoursVisible] = useScrollReveal(0.1);

	const handleChange = (e) =>
		setForm({ ...form, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Thank you! We will get back to you shortly.");
		setForm({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<div className="space-y-10">
			{/* Animated page header */}
			<SectionHeader
				title="Contact Us"
				subtitle="Get in touch with our team"
				align="center"
				accent="bg-blue-600"
			/>

			{/* Contact info + locations */}
			<div className="grid md:grid-cols-2 gap-8">
				{/* Info */}
				<div
					ref={infoRef}
					className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-card p-8"
				>
					<h2
						className={`text-2xl font-bold text-gray-800 mb-6 card-heading ${infoVisible ? "card-heading-in" : ""}`}
					>
						Contact Information
					</h2>
					<div className="space-y-6">
						{contactItems.map(({ icon: Icon, iconBg, title, lines }) => (
							<div key={title} className="flex items-start gap-4">
								<div className={`${iconBg} p-3 rounded-lg shrink-0`}>
									<Icon className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="font-bold text-gray-800 mb-1">{title}</h3>
									{lines.map((line) => (
										<p key={line} className="text-gray-600 text-sm">
											{line}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Locations */}
				<div
					ref={locRef}
					className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-card p-8"
				>
					<h2
						className={`text-2xl font-bold text-gray-800 mb-6 card-heading ${locVisible ? "card-heading-in" : ""}`}
					>
						Operating Locations
					</h2>
					<div>
						<h3
							className={`text-lg font-bold text-green-700 mb-3 card-heading ${locVisible ? "card-heading-in" : ""}`}
							style={{ animationDelay: "0.1s" }}
						>
							🇻🇳 Vietnam
						</h3>
						<dl className="space-y-1 mb-6">
							{locations.vietnam.map(({ city, address }) => (
								<div key={city} className="flex gap-2 text-sm text-gray-700">
									<dt className="font-semibold shrink-0">{city}:</dt>
									<dd>{address}</dd>
								</div>
							))}
						</dl>
						<div className="divider" />
						<h3
							className={`text-lg font-bold text-orange-700 mb-3 card-heading ${locVisible ? "card-heading-in" : ""}`}
							style={{ animationDelay: "0.2s" }}
						>
							🇮🇳 India
						</h3>
						<dl className="space-y-1">
							{locations.india.map(({ city, address }) => (
								<div key={city} className="flex gap-2 text-sm text-gray-700">
									<dt className="font-semibold shrink-0">{city}:</dt>
									<dd>{address}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>

			{/* Contact form */}
			<div ref={formRef} className="card">
				<h2
					className={`text-2xl font-bold text-gray-800 mb-6 card-heading ${formVisible ? "card-heading-in" : ""}`}
				>
					Send Us a Message
				</h2>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div className="grid sm:grid-cols-2 gap-5">
						<div>
							<label className="form-label" htmlFor="name">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								placeholder="Your name"
								className="form-input"
								value={form.name}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								placeholder="your@email.com"
								className="form-input"
								value={form.email}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div>
						<label className="form-label" htmlFor="subject">
							Subject
						</label>
						<input
							id="subject"
							name="subject"
							type="text"
							required
							placeholder="What is this about?"
							className="form-input"
							value={form.subject}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label className="form-label" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={6}
							required
							placeholder="Your message..."
							className="form-input resize-none"
							value={form.message}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn-primary">
						Send Message
					</button>
				</form>
			</div>

			{/* Business hours */}
			<div
				ref={hoursRef}
				className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl shadow-card p-8"
			>
				<h2
					className={`text-2xl font-bold text-gray-800 mb-4 card-heading ${hoursVisible ? "card-heading-in" : ""}`}
				>
					Business Hours
				</h2>
				<div className="grid sm:grid-cols-2 gap-4 text-gray-700">
					<div className="space-y-1 text-sm">
						<p>
							<span className="font-semibold">Monday – Friday:</span> 9:00 AM –
							6:00 PM
						</p>
						<p>
							<span className="font-semibold">Saturday:</span> 9:00 AM – 1:00 PM
						</p>
						<p>
							<span className="font-semibold">Sunday:</span> Closed
						</p>
					</div>
					<p className="text-sm text-gray-500 italic self-center">
						Available for urgent inquiries 24 / 7 via email.
					</p>
				</div>
			</div>
		</div>
	);
}
