import React, { useState } from "react";
import { logo, hamburger, close, arrow, arrowL } from "../images";

const Header = ({ className }) => {
	const [isOpen, isSetOpen] = useState(false);
	function toggleMenu() {
		isSetOpen(!isOpen);
	}
	// Transform Arrow
	// Arrow #1
	const [isArrowToggled, setIsArrowToggled] = useState(false);

	function toggleDropDown() {
		setIsArrowToggled(!isArrowToggled);
	}
	// Features Dropdown Toggle
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleDropMenu() {
		setIsMenuOpen(!isMenuOpen);
		toggleDropDown();
	}
	// Arrow #2
	const [isArrowToggled2, setIsArrowToggled2] = useState(false);

	function toggleDropDown2() {
		setIsArrowToggled2(!isArrowToggled2);
	}

	const [isMenuOpen2, setIsMenuOpen2] = useState(false);

	function toggleDropMenu2() {
		setIsMenuOpen2(!isMenuOpen2);
		toggleDropDown2();
	}
	// Arrow #3
	const [isArrowToggled3, setIsArrowToggled3] = useState(false);

	function toggleDropDown3() {
		setIsArrowToggled3(!isArrowToggled3);
	}
	const [isMenuOpen3, setIsMenuOpen3] = useState(false);

	function toggleDropMenu3() {
		setIsMenuOpen3(!isMenuOpen3);
		toggleDropDown3();
	}

	return (
		// Mobile Menu
		<div className="py-4 px-8 flex justify-between  border-bl-rounded items-center z-20 lg:py-0 lg:px-40 ">
			<img src={logo} alt="logo" />
			<button onClick={toggleMenu}>
				<img
					src={hamburger}
					alt="hamburger"
					className={`${isOpen ? "hidden" : "block"} lg:hidden`}
				/>
				<img
					src={close}
					alt="close"
					className={`${isOpen ? "block" : "hidden"} lg:hidden`}
				/>
			</button>
			{/* Mobile Menu */}
			<div
				className={` ${
					isOpen
						? "absolute bg-white top-[80px] right-[20px] w-[90%] rounded-md  shadow-2xl text-center overflow-hidden py-8 gap-12 flex flex-col mt-12  lg:overflow-auto  items-center lg:bg-transparent lg:flex lg:flex-row lg:shadow-none lg:top-[5rem] lg:left-[20rem] lg:mt-0 lg:w-[100%] lg:mr-60 lg:items-start"
						: "hidden lg:flex lg:items-center"
				}`}
			>
				{/* PRODUCTS CONTAINER */}
				<div>
					{/* Product DropDown */}
					<button
						className="flex items-center justify-center mx-auto pt-6 lg:pt-0 lg:px-2 "
						onClick={toggleDropMenu}
					>
						<p className="text-2xl text-heading overpass font-semibold lg:text-white lg:text-xl">
							Product
						</p>
						<img
							src={arrow}
							alt="arrow"
							className={`${
								isArrowToggled ? "transform rotate-180 ml-2" : "ml-2"
							} lg:hidden`}
						/>
						<img
							src={arrowL}
							alt="arrow"
							className={`${
								isArrowToggled ? "transform rotate-180 ml-2" : "ml-2 "
							} hidden lg:block`}
						/>
					</button>
					{/* Products DropDown Links */}
					<div
						className={`${
							isMenuOpen
								? " mt-2 rounded-md flex flex-col items-center justify-center shadow-lg bg-slate-100 text-body py-6 px-28 lg:px-0 lg:shadow-none lg:items-start"
								: "hidden"
						} lg:absolute `}
					>
						<div className="flex items-center justify-center my-4 lg:mx-2 hover:cursor-pointer lg:my-2">
							<p className="overpass lg:text-xl text-lg font-semibold  text-body">
								Overview
							</p>
						</div>

						<div className="flex items-center  justify-center my-4 hover:cursor-pointer  lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Pricing
							</p>
						</div>

						<div className="flex items-center justify-center my-4 hover:cursor-pointer  lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Marketplace
							</p>
						</div>
						<div className="flex items-center justify-center my-4 hover:cursor-pointer  lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Features
							</p>
						</div>
						<div className="flex items-center justify-center my-4 hover:cursor-pointer  lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Integrations
							</p>
						</div>
					</div>
				</div>
				{/* COMPANY CONTAINER */}
				<div>
					{/* Company DropDown */}
					<button
						className="flex items-center justify-center mx-auto pt-6 lg:pt-0 lg:px-2  "
						onClick={toggleDropMenu2}
					>
						<p className="text-2xl lg:text-white text-heading overpass font-semibold lg:text-xl">
							Company
						</p>
						<img
							src={arrow}
							alt="arrow"
							className={`${
								isArrowToggled2 ? "transform rotate-180 ml-2" : "ml-2"
							} lg:hidden`}
						/>
						<img
							src={arrowL}
							alt="arrow"
							className={`${
								isArrowToggled ? "transform rotate-180 ml-2" : "ml-2"
							} hidden lg:block`}
						/>
					</button>
					<div
						className={`${
							isMenuOpen2
								? " mt-2 rounded-md flex flex-col items-center justify-center mx-auto shadow-lg bg-slate-100 text-body py-6 px-28 lg:px-2 lg:shadow-none lg:items-start lg:ml-4"
								: "hidden"
						} lg:absolute`}
					>
						<div className="flex items-center justify-center flex-row-reverse gap-2 my-4 hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">About</p>
						</div>

						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">Team</p>
						</div>

						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">Blog</p>
						</div>
						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Careers
							</p>
						</div>
					</div>
				</div>
				{/* CONNECT CONTAINER */}
				<div>
					{/* Connect DropDown */}
					<button
						className="flex items-center justify-center mx-auto pt-6 lg:pt-0 lg:px-2 "
						onClick={toggleDropMenu3}
					>
						<p className="text-2xl lg:text-white text-heading overpass font-semibold lg:text-xl">
							Connect
						</p>
						<img
							src={arrow}
							alt="arrow"
							className={`${
								isArrowToggled3 ? "transform rotate-180 ml-2" : "ml-2"
							} lg:hidden`}
						/>
						<img
							src={arrowL}
							alt="arrow"
							className={`${
								isArrowToggled ? "transform rotate-180 ml-2" : "ml-2"
							} hidden lg:block`}
						/>
					</button>
					<div
						className={`${
							isMenuOpen3
								? " mt-2 rounded-md flex flex-col items-center justify-center shadow-lg bg-slate-100 text-body py-6 px-28 lg:px-0 lg:shadow-none lg:items-start"
								: "hidden"
						}  lg:absolute`}
					>
						<div className="flex items-center justify-center flex-row-reverse gap-2 my-4  hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Contact
							</p>
						</div>

						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								Newsletter
							</p>
						</div>

						<div className="flex items-center flex-row-reverse gap-2 justify-center my-4 hover:cursor-pointer lg:my-2 lg:mx-2">
							<p className="overpass text-lg font-semibold  text-body">
								LinkedIn
							</p>
						</div>
					</div>
				</div>
				<hr className="w-[90%] bg-body lg:hidden" />
				{/* Mobile CTA Container - Hidden on Desktop */}
				<div className="flex flex-col justify-center text-center items-center lg:flex-row lg:gap-8 lg:hidden">
					{/* Maybe Adding Padding right to the Button container ^^^ */}
					<button className="lg:text-white text-2xl text-heading overpass font-semibold">
						Login
					</button>
					<button className="cta-gradient rounded-full my-6 py-4 px-12  unbuntu font-semibold shadow-lg text-xl text-text">
						Sign Up
					</button>
				</div>
			</div>{" "}
			{/* Desktop Nav CTA Container - Hidden on Mobile */}
			<div className="lg:flex flex-col justify-center text-center items-center lg:flex-row lg:gap-8 hidden ">
				{/* Maybe Adding Padding right to the Button container ^^^ */}
				<button className="lg:text-white text-2xl text-heading overpass font-semibold lg:text-xl">
					Login
				</button>
				<button className="bg-ctabg  lg:bg-white rounded-full my-6 py-4 px-12  unbuntu font-semibold shadow-lg text-xl lg:py-2 lg:px-6 lg:text-cta">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Header;
