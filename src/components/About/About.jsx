import React from "react";
import AboutImg from "../../assets/images/about.svg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16"
        data-aos="fade-right"
        data-aos-offset="230"
        data-aos-delay="450"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        >
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#1E90FF]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						Hi there!, I’m Siddharth, a curious software developer who’s trying to
						get a bit better every day.
					</p>
					<p className="py-2 text-gray-600">
						I have always had a knack for technology and working with computers.
						Fascinated with how intricate programming can be I was quickly drawn
						to learn more. I started learning javascript and was even more
						enthused with making websites interactive.
					</p>
					<p className="py-2 text-gray-600">
                    I have a keen eye for detail and am always seeking ways
            to improve the performance and functionality of a website. Outside
            of work, I enjoy staying up-to-date on the latest web development
            trends and techniques through online learning. I am always looking
            for new challenges and opportunities to expand my skillset.
					</p>
					<p className="py-2 text-gray-600">
						 I hope to join a team of talented individuals I can learn
						from and build engaging digital experiences with. I spend my time learning on technology especially Frontend
            Development I consistently learn the concepts and tools behind and
            building projects around it.
					</p>
					<a href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects
						</p>
					</a>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<img src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
