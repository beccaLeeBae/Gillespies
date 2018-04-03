import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Home from "./home";
import Details from "./details";
import RSVP from "./rsvp";
import Registry from "./registry";
import GuestList from "./guestList";
import LandingImg from "../assets/main.jpg";
import E2 from "../assets/engP-100.jpg";
import E4 from "../assets/engP-116.jpg";
import E7 from "../assets/engP-13.jpg";
import E10 from "../assets/engP-168.jpg";
import E11 from "../assets/engP-178.jpg";
import E12 from "../assets/engP-180.jpg";
import E14 from "../assets/engP-188.jpg";
import E16 from "../assets/engP-195.jpg";
import E17 from "../assets/engP-196.jpg";
import E18 from "../assets/engP-20.jpg";
import E20 from "../assets/engP-202.jpg";
import E23 from "../assets/engP-40.jpg";
import E25 from "../assets/engP-45.jpg";
import E26 from "../assets/engP-48.jpg";
import E27 from "../assets/engP-6.jpg";
import E28 from "../assets/engP-62.jpg";
import E29 from "../assets/engP-8.jpg";
import E30 from "../assets/engP-92.jpg";
import E31 from "../assets/engP-99.jpg";
import moment from "moment";
import axios from "axios";
import "../App.css";

class Router extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "http://localhost:3000",
			today: moment(),
			daysUntil: null,
			// Set rsvpReady to true when invitations are sent
			rsvpReady: false,
			listLoaded: false,
			inputs: {
				first_name: null,
				last_name: null,
				rsvp_status: false
			},
			guestList: [],
			carouselPhotos: [
				{ src: E2 },
				{ src: E4 },
				{ src: E7 },
				{ src: E10 },
				{ src: E11 },
				{ src: E12 },
				{ src: E14 },
				{ src: E16 },
				{ src: E17 },
				{ src: E18 },
				{ src: E20 },
				{ src: E23 },
				{ src: E25 },
				{ src: E26 },
				{ src: E27 },
				{ src: E28 },
				{ src: E29 },
				{ src: E30 },
				{ src: E31 }
			]
		};
		this.changeInput = this.changeInput.bind(this);
		this.sendRsvp = this.sendRsvp.bind(this);
		this.removeGuest = this.removeGuest.bind(this);
		this.getGuestList = this.getGuestList.bind(this);
		this.sortByStatus = this.sortByStatus.bind(this);
		this.editGuest = this.editGuest.bind(this);
	}
	// Set wedding date countdown
	componentDidMount() {
		var weddingDate = moment("2018-10-21");
		var days = weddingDate.diff(this.state.today, "days");
		this.setState({ daysUntil: days });
	}
	// Engagement photos carousel
	renderCarousel() {
		return this.state.carouselPhotos.map((photo, index) => {
			return (
				<div className="carousel-item" key={index}>
					<img className="d-block w-100" src={photo.src} alt="Grace & Damon" />
				</div>
			);
		});
	}
	// Grab RSVP input data
	changeInput(e, input) {
		const val = e.target.value;
		this.setState(prev => {
			prev.inputs[input] = val.toUpperCase();
			return prev;
		});
	}
	// Post RSVP input data
	sendRsvp(e) {
		e.preventDefault();
		axios
			.post(`${this.state.url}/rsvp`, this.state.inputs)
			.then(res => {
				alert("Thanks! Your RSVP has been saved.");
				window.location.reload();
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	}
	// Get guest list
	getGuestList() {
		axios
			.get(`${this.state.url}/guests`)
			.then(res => {
				this.setState({ guestList: res.data, listLoaded: true });
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	}
	// Delete guest
	removeGuest(e, id) {
		e.preventDefault();
		axios
			.delete(`${this.state.url}/delete_guest/${id}`)
			.then(res => {
				alert("Guest deleted.");
				window.location.reload();
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	}
	// Edit guest RSVP info
	editGuest(e, id) {
		e.preventDefault();
		axios
			.put(`${this.state.url}/edit/${id}`, this.state.inputs)
			.then(res => {
				alert("Guest updated!");
				window.location.reload();
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	}
	// Sort guests by RSVP status
	sortByStatus() {
		var statusList = this.state.guestList.sort((a, b) => {
			return b.rsvp_status - a.rsvp_status;
		});
		this.setState({ guestList: statusList });
	}
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={props => <Landing {...props} landingImg={LandingImg} />}
				/>
				<Route
					path="/home"
					render={props => (
						<Home
							{...props}
							daysUntil={this.state.daysUntil}
							renderCarousel={this.renderCarousel.bind(this)}
						/>
					)}
				/>
				<Route path="/details" render={props => <Details {...props} />} />
				<Route
					path="/rsvp"
					render={props => (
						<RSVP
							{...props}
							rsvpReady={this.state.rsvpReady}
							changeInput={(e, input) => this.changeInput(e, input)}
							sendRsvp={e => {
								this.sendRsvp(e);
							}}
						/>
					)}
				/>
				<Route path="/registry" render={props => <Registry {...props} />} />
				<Route
					path="/smokedsalmon"
					render={props => (
						<GuestList
							{...props}
							getGuestList={this.getGuestList}
							removeGuest={(e, id) => this.removeGuest(e, id)}
							changeInput={(e, input) => this.changeInput(e, input)}
							editGuest={(e, id) => this.editGuest(e, id)}
							sortByStatus={this.sortByStatus}
							list={this.state.guestList}
							listLoaded={this.state.listLoaded}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default Router;