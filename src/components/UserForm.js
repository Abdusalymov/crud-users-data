import React from 'react';
import ListOfUsers from './ListOfUsers';
let uniqid = require('uniqid');

class UserForm extends React.Component{

	formHandler(e){
		e.preventDefault();

		const user = {
			userId: uniqid(),
			fullname: this.refs.fullName.value,
			city: this.refs.city.value,
			dateOfBirth: {
				day: this.refs.birthday.value,
				month: this.refs.monthOfBirth.value,
				year: this.refs.yearOfBirth.value
			},
			address: this.refs.address.value,
			phoneNumber: this.refs.numberPhone.value
		}

		this.props.sendData(user);
		this.refs.userForm.reset();
	}

	getEditingData(data){
		this.refs.fullName.value = data.fullname;
		this.refs.city.value = data.city;
		this.refs.birthday.value=  data.dateOfBirth.day;
		this.refs.monthOfBirth.value= data.dateOfBirth.month;
		this.refs.yearOfBirth.value= data.dateOfBirth.year;
		this.refs.address.value = data.address; 
		this.refs.numberPhone.value = data.phoneNumber;
	}

	render(){
		const daysOption =  Array.from({length: 31}, (v, k) => k+1).map((item)=>
			<option key={uniqid()}>{item}</option>
		);

		const yearsOption =  Array.from({length: 98}, (v, k) => k+1920).map((item)=>
			<option key={uniqid()}>{item}</option>
		);

		const monthsOption = ['January', "February", "March", "April", "May", 
		"June", "July", "August", "September",
		 "October", "November", "December"].map((item)=>
		 <option key={uniqid()}>{item}</option>
	 );

		return(
			<div className="wrapper"> 

				 <form ref="userForm">

					<div className="form-group">
					  <label  htmlFor="usr">Full Name:*</label>
						<input required  type="text" ref="fullName"
						 className="form-control form-control-sm " id="usr"
						 maxLength="100"
						 pattern="[A-Za-z]{3}"
						/>
					</div>

					<div className="form-group">
						<label  htmlFor="birday">Date of Birth:*</label>
						<div className="form-row">

					    <div className="col">
								<select id="birday" ref="birthday"  className="form-control form-control-sm">
								{daysOption}
								</select>
					    </div>

					    <div className="col">
								<select ref="monthOfBirth"  className="form-control form-control-sm">
			  					{monthsOption}
								</select>
					    </div>

							<div className="col">
								<select  ref="yearOfBirth" className="form-control form-control-sm">
			  					{yearsOption}
								</select>
					    </div>

	 					</div>
					</div>

					<div className="form-group">
					  <label  htmlFor="adr">Address:</label>
						<input type="text" ref="address" 
							className="form-control form-control-sm"
							id="adr"
							required
						/>
					</div> 

					<div className="form-group">
					  <label  htmlFor="city">City:</label>
						<input type="text" ref="city" className="form-control form-control-sm" id="city"/>
					</div> 

					<div className="form-group">
					  <label  htmlFor="phone">Phone:</label>
						<div className="input-group">
			        <div className="input-group-prepend">
			          <span className="input-group-text" id="inputGroupPrepend2">+7</span>
			        </div>
							<input type="tel" className="form-control" ref="numberPhone" 
						 	// pattern="[0-9]{10}"
							required/>
      			</div>
					</div> 

	 				 <button type="submit" className="btn btn-primary" onClick={this.formHandler.bind(this)}>Submit</button>
				</form> 

				{ 
					this.props.users.length !== 0 && this.props.users.map((item)=>
						<ListOfUsers
							key={uniqid()} 
							userData={item}
							sendUserId={this.props.sendUserId}
							getEditingData={this.getEditingData.bind(this)}
						/>
					)
				} 
			</div>
		)
	}
}

export default UserForm;