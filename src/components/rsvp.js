import React, { Component } from "react";
import NavBar from "./nav";
import "../App.css";

class RSVP extends Component {
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				{this.props.rsvpReady ? (
					<div className="row d-flex flex-column justify-content-center align-items-center">
						<p className="section-header-p mt-5">RSVP</p>
						<p className="copy-p mb-5">Kindly reply on or before August 25.<br/>
						<small>If you are RSVPing for multiple guests or a family, please add all first names of guests in the First Name field.</small></p>
						<form onSubmit={e => this.props.sendRsvp(e)}>
							<div className="row">
								<div className="col">
									<input
										type="text"
										className="form-control mb-2"
										placeholder="First name"
										autoComplete="given-name"
										onChange={e => this.props.changeInput(e, "first_name")}
										required
									/>
								</div>
								<div className="col">
									<input
										type="text"
										className="form-control mb-2"
										placeholder="Last name"
										autoComplete="family-name"
										onChange={e => this.props.changeInput(e, "last_name")}
										required
									/>
								</div>
							</div>
							<div className="custom-control custom-radio mt-3 text-left">
								<input
									type="radio"
									id="customRadio1"
									name="customRadio"
									className="custom-control-input"
									autoComplete="off"
									value="Attending"
									onChange={e => this.props.changeInput(e, "rsvp_status")}
									required
								/>
								<label className="custom-control-label" htmlFor="customRadio1">
									Accepts with pleasure
								</label>
							</div>
							<div className="custom-control custom-radio mb-3 text-left">
								<input
									type="radio"
									id="customRadio2"
									name="customRadio"
									className="custom-control-input"
									value="Not attending"
									autoComplete="off"
									onChange={e => this.props.changeInput(e, "rsvp_status")}
									required
								/>
								<label className="custom-control-label" htmlFor="customRadio2">
									Regretfully declines
								</label>
							</div>
							<button
								type="submit"
								data-toggle="modal"
								data-target="#exampleModal"
								className="mini-button"
							>
								RSVP
							</button>
						</form>
					</div>
				) : (
					<div className="row h-75 d-flex flex-column justify-content-center align-items-center">
						<p className="copy-header-p">Coming in August.</p>
						<div className="things-circle d-flex justify-content-center align-items-center rounded-circle">
							<i className="far fa-envelope" />
						</div>
					</div>
				)}
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

export default RSVP;