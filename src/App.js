import "./App.css";
import { Footer, Header } from "./components";
import { circles, editorM, phone, laptop, editor, laptopM } from "./images";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "./utils/motion";
function App() {
	return (
		<div className="App overflow-x-hidden">
			<div className="intro-gradient   relative z-20 text-text pt-10 pb-40 rounded-bl-[6rem]">
				<Header className="lg:hidden" />

				<div className="z-20">
					<h1 className="text-4xl z-20 w-[70%] mx-auto tracking-wide font-medium pt-20 lg:text-6xl">
						{" "}
						A modern publishing platform
					</h1>
					<p className=" mt-6 tracking-wider z-20 text-lg lg:text-xl lg:mt-8">
						{" "}
						Grow your audience and build your <br className="lg:hidden" />
						online brand
					</p>
					<div className=" flex gap-2 z-20 mx-auto justify-center items-center mt-12 lg:w-[40%] lg:gap-4">
						<button className="bg-white rounded-full text-cta font-semibold p-2 w-[30%]">
							Start for Free
						</button>
						<button className="border-2 border-white rounded-full p-2 w-[30%] font-semibold">
							Learn More
						</button>
					</div>
				</div>
			</div>
			<motion.main
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.2 }}
				className="bg-text mt-12 text-text flex flex-col justify-center items-center mx-auto "
			>
				{/* Benefits Section */}
				{/* Benefits Title */}
				<h2 className="overpass text-heading text-3xl lg:text-4xl font-semibold mt-32 mb-12 lg:mb-[-4rem]">
					Designed for the future
				</h2>
				{/* Editor Image */}
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="lg:flex flex flex-col items-center justify-center mx-auto lg:flex-row-reverse lg:w-[100%] lg:overflow-hidden lg:items-center lg:justify-center"
				>
					<img
						src={editorM}
						alt="mobile editor"
						className="lg:hidden block w-[100%]"
					/>

					<img
						src={editor}
						alt="desktop editor"
						className="hidden lg:block lg:w-[100%]  lg:mr-[-18rem]"
					/>
					{/* Benefit #1 */}
					<div className="lg:flex lg:flex-col lg:text-left lg:ml-[10rem] lg:mx-auto lg:items-center w-[90%] lg:w-[80%]">
						<div className="flex flex-col mx-auto justify-center items-center mt-12 lg:items-start lg:text-left  ">
							<h2 className="overpass text-heading text-3xl tracking-wide font-semibold mt-6 mb-6 w-[80%]">
								Introducing an extensible editor
							</h2>
							<p className="w-[70%] text-md z-20 text-body leading-8 tracking-wide lg:w-[80%]">
								{" "}
								Blogr features an exceedingly intuitive interface which lets you
								focus on one thing: creating content. The editor supports
								management of multiple blogs and allows easy manipulation of
								embeds such as images, videos, and Markdown. Extensibility with
								plugins and themes provide easy ways to add functionality or
								change the looks of a blog.
							</p>
						</div>

						{/* Benefit #2 */}
						<div className="flex flex-col  mx-auto justify-center items-center mt-4 lg:items-start lg:text-left lg:mt-10">
							<h2 className="overpass text-heading text-3xl font-semibold mt-6 mb-6 w-[80%]">
								Robust content management
							</h2>
							<p className="w-[70%] text-md z-20 text-body leading-8 tracking-wide lg:w-[80%]">
								{" "}
								Flexible content management enables users to easily move through
								posts. Increase the usability of your blog by adding customized
								categories, sections, format, or flow. With this functionality,
								you’re in full control.
							</p>
						</div>
					</div>
				</motion.div>
				{/* Phones */}
				<img
					src={phone}
					alt="phones"
					className="mb-[-18rem] mt-24 w-[90%] z-20 lg:w-[40%] lg:mr-[47rem] lg:mb-[-35rem]"
				/>
				{/* Infrastructure Section */}
				<div className="body-gradient relative  overflow-hidden z-10 rounded-tr-[6rem] py-28 rounded-bl-[6rem] lg:w-[100%] lg:my-2  my-12 lg:flex">
					{/* Circles BG Img */}
					<img
						src={circles}
						alt="circles"
						className="absolute top-[-9rem] z-0"
					/>
					{/* Infrastructure Details */}
					<div className="z-20 flex mt-2 flex-col justify-center items-center mx-auto lg:mt-0 lg:w-[50%] lg:text-left lg:items-start lg:align-middle lg:mx-0 lg:ml-[50rem]">
						{/* Details Title */}
						<h1 className="text-5xl font-semibold leading-[4rem] z-20 mt-28 w-[80%] lg:mt-0 lg:text-4xl">
							State of the Art Infrastructure
						</h1>
						{/* Details Description */}
						<p className="w-[70%] text-md z-20 text-text leading-8 mt-12 tracking-wide lg:mt-8">
							{" "}
							With reliability and speed in mind, worldwide data centers provide
							the backbone for ultra-fast connectivity. This ensures your site
							will load instantly, no matter where your readers are, keeping
							your site competitive.
						</p>
					</div>
				</div>
				{/* Feature Section */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.25 }}
					className="py-12 mb-10 lg:flex lg:w-[100%] lg:items-center lg:mt-12"
				>
					<motion.div
						variants={slideIn("left", "tween", 0.2, 1)}
						className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:text-left lg:ml-24"
					>
						<img
							src={laptopM}
							alt="Mobile Laptop"
							className="lg:hidden block"
						/>
						<img
							src={laptop}
							alt="Desktop Laptop"
							className="hidden lg:block lg:w-[80%] lg:ml-[-24rem]"
						/>
						<div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
							<div className="flex flex-col mx-auto justify-center items-center  lg:items-start lg:text-left">
								<h2 className="text-heading overpass text-3xl font-semibold mt-6 mb-6">
									Free, open, simple
								</h2>
								<p className="w-[70%] overpass text-md z-20 text-body leading-8 tracking-wide">
									{" "}
									Blogr is a free and open source application backed by a large
									community of helpful developers. It supports features such as
									code syntax highlighting, RSS feeds, social media integration,
									third-party commenting tools, and works seamlessly with Google
									Analytics. The architecture is clean and is relatively easy to
									learn.
								</p>
							</div>
							<div className="flex flex-col mx-auto justify-center items-center mt-4  lg:items-start lg:text-left">
								<h2 className="overpass text-heading text-3xl font-semibold mt-6 mb-6">
									Powerful Tooling
								</h2>
								<p className="w-[70%] text-md z-20 text-body leading-8 tracking-wide">
									{" "}
									Batteries included. We built a simple and straightforward CLI
									tool that makes customization and deployment a breeze, but
									capable of producing even the most complicated sites.
								</p>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</motion.main>
			{/* FOOTER */}
			<Footer />
		</div>
	);
}

export default App;
