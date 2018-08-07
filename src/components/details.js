import React, { Component } from "react";
import NavBar from "./nav";
import Footer from './footer';
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
				<Footer/>
			</div>
		);
	}
}

export default Details;