import React, { Component } from 'react';
import "../App.css";

class GuestList extends Component {
	componentDidMount(){
		this.props.getGuestList();
	}
	renderList(){
		return this.props.list.map(guestInfo => {
			var firstName = guestInfo.first_name;
			var lastName = guestInfo.last_name;
			var status = "";
			if (guestInfo.rsvp_status === true) {
				status = "ATTENDING";
			};
			if (guestInfo.rsvp_status === false) {
				status = "NOT ATTENDING";
			}
			return (
				<div className="row guest-row mt-2 mb-2" key={guestInfo.id}>
				<div className="col">
				<p className="copy-p">{firstName} {lastName}</p>
				</div>
				<div className="col">
				<p className="copy-p">{status}</p>
				</div>
				<div className='col'>
				<button className="mini-button" onClick={e => this.props.removeGuest(e, guestInfo.id)}>Delete</button>
				</div>
				</div>
				)
		})
	}
	render(){
	return(
		<div className="container-fluid">
		{this.props.listLoaded ? (
			<div>
					<p className="section-header-p mt-5 mb-2">Guest List</p>
		<button className="mini-button mb-5" onClick={this.props.sortByStatus}>Sort List</button>
		<div className="row">
		<div className="col">
		<p className="list-header-p">Name</p>
		</div>
		<div className="col">
		<p className="list-header-p">RSVP</p>
		</div>
		<div className="col">
		<p className="list-header-p">Options</p>
		</div>
		</div>
		{this.renderList()}
			</div>
			) : (<p className="section-header-p mt-5 mb-2">Guest List Loading...</p>)}
		</div>
		)
}
}

export default GuestList;