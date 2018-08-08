import React, { Component } from "react";
import NavBar from "./nav";
import Footer from "./footer";
import Blueprint from "../assets/blueprint.png";
import "../App.css";

class Registry extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="row rsvp-content h-75 d-flex flex-column justify-content-center align-items-center">
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
							className="rounded-circle"
							alt="Blueprint Registry"
						/>
					</a>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Registry;