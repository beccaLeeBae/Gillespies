import React, { Component } from "react";
import NavBar from "./nav";
import Blueprint from "../assets/blueprint.png";
import "../App.css";

class Registry extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="row h-75 d-flex flex-column justify-content-center align-items-center">
					<p className="copy-header-p">
						Shop Grace &amp; Damon's registry at Blueprint.
					</p>
					<a
						href="https://www.blueprintregistry.com/registry/Gillespie-wedding-registry-10-20-2018"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={Blueprint}
							className="rounded-circle w-25"
							alt="Blueprint Registry"
						/>
					</a>
				</div>
				<footer className="navbar fixed-bottom d-flex flex-column align-items-center justify-content-center">
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
					<p className="copy-p">Copyright &copy; 2018 Grace Kling & Damon Gillespie. All Rights Reserved.</p>
				</footer>
			</div>
		);
	}
}

export default Registry;