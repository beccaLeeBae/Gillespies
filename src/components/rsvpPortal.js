import React, { Component } from "react";
import "../App.css";

class RsvpPortal extends Component {
	render() {
		let admitNum = this.props.admitNum;

		return (
			<div className="row rsvp-content d-flex flex-column justify-content-start align-items-center">
				<p className="section-header-p mt-5">RSVP</p>
				<p className="copy-p p-3 mb-4">
					{admitNum === 0
						? "Please select the number of allowed guests from your invitation."
						: "Kindly RSVP before August 31. Thank you!"}
				</p>
				{admitNum === 0 ? (
					<div className="d-flex flex-column">
						<button
							className="admit-btn"
							onClick={e => this.props.changeAdmitNum(1)}
						>
							&nbsp;Admit 1
						</button>
						<button
							className="admit-btn"
							onClick={e => this.props.changeAdmitNum(2)}
						>
							&nbsp;Admit 2
						</button>
						<button
							className="admit-btn"
							onClick={e => this.props.changeAdmitNum(3)}
						>
							&nbsp;Admit 3
						</button>
						<button
							className="admit-btn"
							onClick={e => this.props.changeAdmitNum(4)}
						>
							&nbsp;Admit 4
						</button>
						<button
							className="admit-btn"
							onClick={e => this.props.changeAdmitNum(5)}
						>
							&nbsp;Admit 5
						</button>
					</div>
				) : (
					<form onSubmit={e => this.props.sendRsvp(e)}>
						<div className="row">
							<div className="col-md-6 col-xs-12">
								<input
									type="text"
									className="form-control mb-2"
									placeholder={this.props.admitText0}
									autoComplete="given-name"
									onChange={e => this.props.changeInput(e, "first_name")}
									required
								/>
							</div>
							<div className="col-md-6 col-xs-12">
								<input
									type="text"
									className="form-control mb-2"
									placeholder={this.props.admitText1}
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
								value="ATTENDING"
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
								value="NOT_ATTENDING"
								autoComplete="off"
								onChange={e => this.props.changeInput(e, "rsvp_status")}
								required
							/>
							<label className="custom-control-label" htmlFor="customRadio2">
								Regretfully declines
							</label>
						</div>
						<button
							onClick={e => this.props.sendRsvp(e)}
							className="mt-4 mb-5 mini-button"
						>
							RSVP
						</button>
					</form>
				)}
			</div>
		);
	}
}

export default RsvpPortal;