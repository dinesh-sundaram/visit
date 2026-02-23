import React from "react";

export default function Footer({ navigation, onNavigate }) {
	const socialLinks = [
		{
			name: "LinkedIn",
			icon: "💼",
			url: "https://www.linkedin.com/company/your-company",
		},
		{
			name: "Facebook",
			icon: "📘",
			url: "https://www.facebook.com/yourpage",
		},
		{
			name: "Twitter",
			icon: "🐦",
			url: "https://twitter.com/yourhandle",
		},
	];

	return (
		<footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
			<div className="container mx-auto px-4 py-12">
				<div className="grid md:grid-cols-12 gap-8 mb-8">
					{/* ── Brand Section with Logo (Left - Wider) ── */}
					<div className="md:col-span-5">
						{/* Logo Image */}
						<div className="mb-6">
							<img
								src="/visit-logo.jpeg"
								alt="VISIT Vietnam India Services"
								className="w-full max-w-md rounded-lg shadow-xl"
							/>
						</div>

						{/* Extracted Text Content */}
					</div>

					{/* ── Quick Links (Middle) ── */}
					<div className="md:col-span-3">
						<h3 className="text-lg font-bold mb-4 text-teal-400">
							Quick Links
						</h3>
						<nav className="space-y-2">
							{navigation.map(({ id, label }) => (
								<button
									key={id}
									onClick={() => onNavigate(id)}
									className="block text-gray-400 hover:text-teal-300 transition-colors text-sm font-medium group"
								>
									<span className="group-hover:translate-x-1 inline-block transition-transform">
										→ {label}
									</span>
								</button>
							))}
						</nav>
					</div>

					{/* ── Contact Section (Right) ── */}
					<div className="md:col-span-4">
						<h3 className="text-lg font-bold mb-4 text-teal-400">
							Get In Touch
						</h3>
						<div className="space-y-3 text-gray-300 text-sm">
							<div className="flex items-start gap-3">
								<span className="text-xl">📧</span>
								<div>
									<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
										Email
									</p>
									<a
										href="mailto:info@vietnamindiaservices.com"
										className="hover:text-teal-300 transition-colors"
									>
										contact@visitgroup.info
									</a>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<span className="text-xl">📞</span>
								<div>
									<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
										Phone
									</p>
									<p>[+84 94 660 32 32]</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<span className="text-xl">📍</span>
								<div>
									<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
										Locations
									</p>
									<p>Vietnam & India</p>
								</div>
							</div>

							{/* Social Links */}
							<div className="pt-4">
								<p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
									Follow Us
								</p>
								<div className="flex gap-3">
									{socialLinks.map(({ name, icon, url }) => (
										<a
											key={name}
											href={url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={name}
											className="bg-gray-800 hover:bg-teal-600 text-gray-300 hover:text-white 
                   px-3 py-1.5 rounded text-xs font-medium transition-all 
                   hover:scale-105 flex items-center gap-1.5"
										>
											<span>{icon}</span>
											{name}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── Bottom Bar ── */}
				<div className="border-t border-gray-700/50 pt-6 mt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
						<p>
							© {new Date().getFullYear()} Vietnam India Services, Investment,
							and Trading. All rights reserved.
						</p>
						<div className="flex gap-4">
							<button className="hover:text-teal-300 transition-colors">
								Privacy Policy
							</button>
							<span>•</span>
							<button className="hover:text-teal-300 transition-colors">
								Terms of Service
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
