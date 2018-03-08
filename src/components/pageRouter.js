import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Home from "./home";
import Details from "./details";
import RSVP from "./rsvp";
import Registry from "./registry";
import GuestList from "./guestList";
// import E1 from '../assets/engP-1.jpg';
import E2 from '../assets/engP-100.jpg';
// import E3 from '../assets/engP-104.jpg';
import E4 from '../assets/engP-116.jpg';
// import E5 from '../assets/engP-121.jpg';
// import E6 from '../assets/engP-127.jpg';
import E7 from '../assets/engP-13.jpg';
// import E8 from '../assets/engP-143.jpg';
// import E9 from '../assets/engP-152.jpg';
import E10 from '../assets/engP-168.jpg';
import E11 from '../assets/engP-178.jpg';
import E12 from '../assets/engP-180.jpg';
// import E13 from '../assets/engP-185-Edit.jpg';
import E14 from '../assets/engP-188.jpg';
// import E15 from '../assets/engP-193.jpg';
import E16 from '../assets/engP-195.jpg';
import E17 from '../assets/engP-196.jpg';
import E18 from '../assets/engP-20.jpg';
// import E19 from '../assets/engP-201.jpg';
import E20 from '../assets/engP-202.jpg';
// import E21 from '../assets/engP-28.jpg';
// import E22 from '../assets/engP-31.jpg';
import E23 from '../assets/engP-40.jpg';
// import E24 from '../assets/engP-42.jpg';
import E25 from '../assets/engP-45.jpg';
import E26 from '../assets/engP-48.jpg';
import E27 from '../assets/engP-6.jpg';
import E28 from '../assets/engP-62.jpg';
import E29 from '../assets/engP-8.jpg';
import E30 from '../assets/engP-92.jpg';
import E31 from '../assets/engP-99.jpg';

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
			rsvpReady: false,
			rsvpAllowGuestField: false,
			inputs: {
				first_name: null,
				last_name: null,
				rsvp_status: false,
				guest_name: "NONE"
			},
			guestEmail: null,
			guestList: [],
			carouselPhotos: [
			// { src: E1 },
			{ src: E2 },
			// { src: E3 },
			{ src: E4 },
			// { src: E5 },
			// { src: E6 },
			{ src: E7 },
			// { src: E8 },
			// { src: E9 },
			{ src: E10 },
			{ src: E11 },
			{ src: E12 },
			// { src: E13 },
			{ src: E14 },
			// { src: E15 },
			{ src: E16 },
			{ src: E17 },
			{ src: E18 },
			// { src: E19 },
			{ src: E20 },
			// { src: E21 },
			// { src: E22 },
			{ src: E23 },
			// { src: E24 },
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
		this.changeEmailInput = this.changeEmailInput.bind(this);
		this.sendRsvp = this.sendRsvp.bind(this);
		this.removeGuest = this.removeGuest.bind(this);
		this.getGuestList = this.getGuestList.bind(this);
		this.sortByStatus = this.sortByStatus.bind(this);
		this.editGuest = this.editGuest.bind(this);
	}
	componentDidMount() {
		var weddingDate = moment("2018-10-20");
		var days = weddingDate.diff(this.state.today, "days");
		this.setState({ daysUntil: days });
	}
	changeInput(e, input) {
		const val = e.target.value;
		this.setState(prev => {
			prev.inputs[input] = val.toUpperCase();
			return prev;
		});
	}
	changeEmailInput(e, email) {
		const val = e.target.value;
		this.setState({ guestEmail: val });
	}
	sendRsvp(e) {
		e.preventDefault();
		axios
			.post(`${this.state.url}/rsvp`, this.state.inputs)
			.then(res => {
				alert("Thanks! Your RSVP has been saved.");
				window.location.reload();
			})
			.catch(err => {console.log("Error: ", err)});
	}
	getGuestList() {
		axios
			.get(`${this.state.url}/guests`)
			.then(res => {
				this.setState({ guestList: res.data });
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	}
	removeGuest(e, id) {
		e.preventDefault();
		axios
			.delete(`${this.state.url}/delete_guest/${id}`)
			.then(res => {
				alert("Guest deleted.");
				window.location.reload();
			}).catch(err => {
				console.log("Error: ", err);
			});
	}
	editGuest(e, id){
		e.preventDefault();
		axios.put(`${this.state.url}/edit/${id}`, this.state.inputs).then(res => {
			alert("Guest updated!");
			window.location.reload();
		}).catch(err => {
			console.log("Error: ", err);
		})
	}
	sortByStatus() {
		var statusList = this.state.guestList.sort((a, b) => {
			return b.rsvp_status - a.rsvp_status;
		});
		this.setState({ guestList: statusList });
	}
	render() {
		return (
			<Switch>
				<Route exact path="/" render={props => <Landing {...props} />} />
				<Route
					path="/home"
					render={props => <Home {...props} daysUntil={this.state.daysUntil} carouselPhotos={this.state.carouselPhotos} />}
				/>
				<Route path="/details" render={props => <Details {...props} />} />
				<Route
					path="/rsvp"
					render={props => (
						<RSVP
							{...props}
							rsvpReady={this.state.rsvpReady}
							changeInput={(e, input) => this.changeInput(e, input)}
							changeEmailInput={(e, email) => this.changeEmailInput(e, email)}
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
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default Router;