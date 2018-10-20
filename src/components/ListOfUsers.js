import React from 'react';

class ListOfUsers extends React.Component{

	removeUser(){
		const {sendUserId, userData} = this.props;
		sendUserId(userData.userId);
	}

	editUser(){
		const {setEditingData, userData} = this.props;
		setEditingData(userData);
		this.removeUser();
	}


	render(){
		const {userData} = this.props;
		return (
			<div>

				<ul className="userList">
					<li>{userData.fullname}</li>
					<li>
						{userData.dateOfBirth.day + " " } 
						{userData.dateOfBirth.month}, 
						{userData.dateOfBirth.year}
					</li>
					{userData.city && <li>{userData.city}</li>}
					{userData.address && <li>{userData.address}</li>}
					{userData.phoneNumber  && <li>{userData.phoneNumber}</li>}
				</ul>

				<div className="btn-group btn-group-sm">
					<button className="btn btn-primary" onClick={this.editUser.bind(this)}>Редактировать</button>
					<button className="btn btn-danger" onClick={this.removeUser.bind(this)}>Удалить</button>
				</div>

			</div>
		)
	}
}

export default ListOfUsers;