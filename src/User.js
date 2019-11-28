import React, { useEffect } from 'react';

import './user.scss';

function User() {
	useEffect(() => {
		document.title = 'Info | Marylin Monroe';
	});

	return (
		<React.Fragment>
			<h1 className="name">Marilyn Monroe</h1>
			<span className="localization">Poznan, PL</span>
			<section className="description">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque. Interdum consectetur libero id
					faucibus nisl.
				</p>
				<blockquote className="description__quote">
					I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong
					so that you appreciate them when they’re right, you believe lies so you eventually learn to trust no one but
					yourself, and sometimes good things fall apart so better things can fall together.
				</blockquote>
				<p>
					Adipiscing bibendum est ultricies integer quis. Bibendum enim facilisis gravida neque convallis a cras semper
					auctor. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Sapien pellentesque
					habitant morbi tristique senectus.
				</p>
			</section>
		</React.Fragment>
	);
}

export default User;
