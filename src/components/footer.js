import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
	render() {
		return (
			<footer className="nav navbar-fixed-bottom d-flex flex-column align-items-center justify-content-center mt-2">
				<p className="copy-p m-0">
					Made with &hearts; by{" "}
					<a
						href="http://www.beccaleebae.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Becca Lee Bae
					</a>
				</p>
				<p className="copy-p">
					Copyright &copy; 2019 Grace Kling & Damon Gillespie. All Rights
					Reserved.
				</p>
			</footer>
		);
	}
}

export default Footer;