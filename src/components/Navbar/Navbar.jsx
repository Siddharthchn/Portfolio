import React, { useState, useEffect } from "react";
import NavLogo from "../../assets/images/nav-logo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import './Navbar.scss'

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState("");
	const [linkColor, setLinkColor] = useState("#1f2937");
	

	const handleNav = () => {
		setNav((prevState) => !prevState);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100]"
					: "fixed w-full h-20 z-[100]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 app__navbar">
				
					<a>
						<img
							src={NavLogo}
							alt="/"
							height="60"
							width="55"
							className="cursor-pointer"
						/>
					</a>
				
				<div className="flex items-center justify-center">
					<ul style={{ color: `${linkColor}` }} className="hidden md:flex">
						<a href="/">
							<li className="ml-10 text-sm uppercase hover:text-[#1E90FF]">
								Home
							</li>
						</a>
						<a href="/#about">
							<li className="ml-10 text-sm uppercase hover:text-[#1E90FF]">
								About
							</li>
						</a>
						<a href="/#skills">
							<li className="ml-10 text-sm uppercase hover:text-[#1E90FF]">
								Skills
							</li>
						</a>
						<a href="/#projects">
							<li className="ml-10 text-sm uppercase hover:text-[#1E90FF]">
								Projects
							</li>
						</a>
						<a href="/#contact">
							<li className="ml-10 text-sm uppercase hover:text-[#1E90FF]">
								Contact
							</li>
						</a>
					</ul>

					<div className="ml-10 hidden md:flex">
						<a target="_blank" href="/resume.pdf">
							<button
								type="button"
								className="inline-block px-5 py-3 border-2 rounded-md border-[#1E90FF] text-[#1E90FF] font-bold text-sm leading-tight normal-case hover:bg-[#1E90FF] hover:text-[white] focus:outline-none transition duration-150 ease-in-out"
							>
								Resume
							</button>
						</a>
					</div>

					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}

			<div
				className={
					nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							
								<a>
									<img
										className="cursor-pointer"
										src={NavLogo}
										alt="/"
										width="60"
										height="50"
									/>
								</a>
							
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-3">
								Let&apos;s build something Legendary Together
							</p>
						</div>
					</div>
					<div className="py-2 flex flex-col">
						<ul className="uppercase">
							<a href="/">
								<li onClick={() => setNav(false)} className="py-3 text-sm">
									Home
								</li>
							</a>
							<a href="/#about">
								<li onClick={() => setNav(false)} className="py-3 text-sm">
									About
								</li>
							</a>
							<a href="/#skills">
								<li onClick={() => setNav(false)} className="py-3 text-sm">
									Skills
								</li>
							</a>
							<a href="/#projects">
								<li onClick={() => setNav(false)} className="py-3 text-sm">
									Projects
								</li>
							</a>
							<a href="/#contact">
								<li onClick={() => setNav(false)} className="py-3 text-sm">
									Contact
								</li>
							</a>
						</ul>

						<div className="py-3 flex flex-col">
							<a target="_blank" href="/resume.pdf">
								<button
									type="button"
									className="inline-block max-w-[50%] px-5 py-3 border-2 rounded-md border-[#1E90FF] text-[#1E90FF] font-bold text-sm leading-tight normal-case hover:bg-[#1E90FF] hover:text-[white] focus:outline-none transition duration-150 ease-in-out"
								>
									Resume
								</button>
							</a>
						</div>

						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#1E90FF]">
								Let&apos;s connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<a
									href="https://www.linkedin.com/in/siddharthchauhan08/"
									target="_blank"
									rel="noreferrer"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaLinkedinIn />
									</div>
								</a>
								<a
									href="https://github.com/Siddharthchn/"
									target="_blank"
									rel="noreferrer"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub />
									</div>
								</a>
								<a href="/#contact">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiOutlineMail />
									</div>
								</a>
								<a target="_blank" href="/resume.pdf">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
										<BsFillPersonLinesFill />
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
