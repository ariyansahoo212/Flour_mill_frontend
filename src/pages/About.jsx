import React from "react";
import about_us from "../assests/aboutMill.jpg";

function About() {
	return (
		<section className="bg-gray-100 py-16" id="about">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap  justify-between items-center -mx-4">
					<div className="w-full lg:w-1/2 max-w-[480px] px-4">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">
							About Our Flour Mill
						</h2>
						<p className="text-slate-600 leading-relaxed mb-8 font-medium italic ">
							At Flour and Spices Mill Services, we're passionate about redefining the milling experience. 
							With a rich legacy of craftsmanship, we blend tradition with innovation.
							 Our commitment extends beyond precision we strive to create a community 
							 where expertise meets convenience. Join us in shaping the future of milling. 
							 Welcome to a world where excellence is not just a standard; it's a way of milling.
						</p>
						<p className="text-slate-600 leading-relaxed mb-8 font-medium italic">
						Embrace the purity of nature with Flour and Spices Mill Services. 
						Our commitment extends to the meticulous cold press technique in oil extraction. 
						Preserving the essence of each seed, this method ensures the highest quality oils, 
						rich in flavor and nutrition. Experience the difference where tradition and technology converge 
						to deliver oils that stand out in freshness and health. Welcome to a journey where every drop 
						tells a story of craftsmanship and care.
						</p>
						
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<img
							src={about_us} // Replace with your image URL
							alt="About Us"
							className="rounded-lg shadow-lg h-96 w-[90%]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
