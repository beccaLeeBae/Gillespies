import React, { Component } from "react";
import NavBar from "./nav";
import Venue from "./detailsVenue";
import Accom from "./detailsAccom";
import Things from "./detailsThings";
import WeddingParty from "./detailsWeddingParty";
import "../App.css";

class Details extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<Venue />
				<hr />
				<Accom />
				<hr />
				<WeddingParty
					renderParty={this.props.renderParty}
					side={"br"}
					title={"Bridesmaids"}
				/>
				<hr />
				<WeddingParty
					renderParty={this.props.renderParty}
					side={"gr"}
					title={"Groomsmen"}
				/>
				<hr />
				<Things
					title={"Things To Do in Chattanooga"}
					renderThingsNav={this.props.renderThingsNav}
					toggleThings={this.props.toggleThings}
					renderThings={this.props.renderThings}
					currentThings={this.props.currentThings}
				/>
				<footer className="nav navbar-fixed-bottom d-flex flex-column align-items center justify-content-center">
					<p className="copy-p m-0">
						Made with &hearts; by{" "}
						<a
							href="http://www.beccaleebae.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							Becca Lee Bae
						</a>
					</p>
					<p className="copy-p">
						Copyright &copy; 2018 Grace Kling & Damon Gillespie. All Rights
						Reserved.
					</p>
				</footer>
			</div>
		);
	}
}

export default Details;