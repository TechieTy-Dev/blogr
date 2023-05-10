import React from "react";
import { logo } from "../images";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
const Footer = () => {
	return (
		<motion.div
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="bg-footerbg text-footertext flex flex-col justify-center items-center mx-auto rounded-tr-[6rem] py-20 lg:grid lg:grid-cols-4 lg:align-top lg:justify-start lg:items-start lg:text-left"
		>
			<img
				src={logo}
				alt="logo"
				className="lg:justify-center lg:items-center lg:mx-auto"
			/>
			<div className="lg:mt-0 mt-16">
				<p className="font-bold text-text mb-6">Product</p>
				<ul className="flex flex-col gap-2">
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Overview
					</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Pricing
					</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Marketplace
					</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Features
					</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Integrations
					</li>
				</ul>
			</div>
			<div className="mt-6 lg:mt-0">
				<p className="font-bold text-text mb-6">Company</p>
				<ul className="flex flex-col gap-2">
					<li className="lg:hover:underline lg:hover:cursor-pointer">About</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">Team</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">Blog</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Careers
					</li>
				</ul>
			</div>
			<div className="mt-6 lg:mt-0">
				<p className="font-bold text-text mb-6">Connect</p>
				<ul className="flex flex-col gap-2">
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Contact
					</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						Newsletter
					</li>
					<li className="lg:hover:underline lg:hover:cursor-pointer">
						LinkedIn
					</li>
				</ul>
			</div>
		</motion.div>
	);
};

export default Footer;
