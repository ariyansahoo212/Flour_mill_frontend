import React from "react";

function Footer() {
	return (
		<footer className="bg-white/90 text-black py-8 rounded-t-md">
			<div className="container mx-auto flex flex-col sm:flex-row justify-around items-center px-4">
				<div className="mb-4 lg:mb-0">
					<h2 className="text-2xl font-semibold">Flour Mill</h2>
					<p className="text-sm">
						Providing Quality Milling Services
					</p>
				</div>
				<div className="flex space-x-6">
					<div>
						<h3 className="text-lg font-semibold mb-2">Explore</h3>
						<ul>
							<li className="mb-1">
								<a href="#" className="hover:text-red-500">
									Home
								</a>
							</li>
							<li className="mb-1">
								<a href="#" className="hover:text-red-500">
									Shop
								</a>
							</li>
							<li className="mb-1">
								<a href="about" className="hover:text-red-500">
									About Us
								</a>
							</li>
							<li className="mb-1">
								<a
									href="contact"
									className="hover:text-red-500"
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2">Connect</h3>
						<ul>
							<li className="mb-1">
								<a href="https://m.facebook.com/profile.php/?id=100052603958277&name=xhp_nt_" className="hover:text-red-500">
									Facebook
								</a>
							</li>
							<li className="mb-1">
								<a href="https://x.com/DipeshDwi77615?t=JYAQumm39k_vcRY8AZ2g_Q&s=09" className="hover:text-red-500">
									Twitter
								</a>
							</li>
							<li className="mb-1">
								<a href="https://www.instagram.com/dynamic_dipeshh/" className="hover:text-red-500">
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-gray-800 py-2">
				<div className="container mx-auto text-center text-sm text-white">
					&copy; {new Date().getFullYear()} Dipesh Dwivedi. All
					rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
