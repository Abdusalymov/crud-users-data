import React from 'react';

class ListOfUsers extends React.Component{

	removeUser(){
		const {sendUserId, userData} = this.props;
		sendUserId(userData.userId);
	}

	editUser(){
		const {getEditingData, userData} = this.props;
		getEditingData(userData);
		this.removeUser();
	}


	render(){
		const {userData} = this.props;
		return (
			<div>

				<ul className="userList">
					<li>{userData.fullname}</li>
					<li>{userData.dateOfBirth.day} {userData.dateOfBirth.month}, {userData.dateOfBirth.year}</li>
					<li>{userData.city}</li>
					<li>{userData.address}</li>	
					<li>{userData.phoneNumber}</li>
				</ul>

				<div className="btn-group btn-group-sm">
					<button className="btn btn-primary" onClick={this.editUser.bind(this)}>EDIT</button>
					<button className="btn btn-danger" onClick={this.removeUser.bind(this)}>DELETE</button>
				</div>

			</div>
		)
	}
}

export default ListOfUsers;