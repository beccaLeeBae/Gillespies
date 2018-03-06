import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing";
import Home from "./home";
import Details from "./details";
import RSVP from "./rsvp";
import Registry from "./registry";
import GuestList from "./guestList";
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
			rsvpReady: true,
			rsvpAllowGuestField: false,
			inputs: {
				first_name: null,
				last_name: null,
				rsvp_status: false,
				guest_name: "NONE"
			},
			guestEmail: null,
			guestList: []
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
					render={props => <Home {...props} daysUntil={this.state.daysUntil} />}
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