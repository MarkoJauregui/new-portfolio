import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { urlFor, client } from '../../client';

import './About.scss';

// const abouts = [
// 	{
// 		title: 'Blockchain Development',
// 		description:
// 			'I specialize in blockchain development with Solidity, Truffle and Hardhat.',
// 		imgUrl: images.crypto,
// 	},
// 	{
// 		title: 'Full Stack Development',
// 		description:
// 			'I am a React developer and also know Node.JS, Redux and Python. I love building beautiful web applications.',
// 		imgUrl: images.webDev,
// 	},

// 		title: 'Game Development',
// 		description:
// 			'I also have some experience with Unity and UE4 Game Development',
// 		imgUrl: images.games,
// 	},
// ];

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				We Know That <span>Web3</span>
				<br />
				will be <span>The Future</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{' '}
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{' '}
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default About;
