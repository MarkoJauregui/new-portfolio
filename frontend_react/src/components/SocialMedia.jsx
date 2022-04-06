import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://twitter.com/marko_jauregui">
					<BsTwitter />
				</a>
			</div>

			<div>
				<a href="https://github.com/MarkoJauregui">
					<BsGithub />
				</a>
			</div>

			<div>
				<a href="https://www.linkedin.com/in/marko-jauregui-baa639230/">
					<GrLinkedinOption />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
