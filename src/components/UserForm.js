import React from 'react';
import ListOfUsers from './ListOfUsers';
let uniqid = require('uniqid');

class UserForm extends React.Component{

	formHandler(e){
		e.preventDefault();

		const user = { //save data about user from form
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
		//form validation
		if(this.refs.userForm.checkValidity() === false) {
			this.refs.userForm.classList.add('was-validated')
		}else{
			this.refs.userForm.classList.remove('was-validated')
			this.props.sendData(user);
			this.refs.userForm.reset();
		}
		
	}

	setEditingData(data){ //set data user for edit in form
		this.refs.fullName.value = data.fullname;
		this.refs.city.value = data.city;
		this.refs.birthday.value=  data.dateOfBirth.day;
		this.refs.monthOfBirth.value= data.dateOfBirth.month;
		this.refs.yearOfBirth.value= data.dateOfBirth.year;
		this.refs.address.value = data.address; 
		this.refs.numberPhone.value = data.phoneNumber.replace(/\+7/,'');
	}

	render(){
		//create list of options for date of birth field
		let daysOption =  Array.from({length: 31}, (v, k) => k+1).map((item, index)=>
			<option key={index}>{item}</option> 
		);

		let yearsOption =  Array.from({length: 98}, (v, k) => k+1920).map((item, index)=>
			<option key={index}>{item}</option>
		);

		let monthsOption = ["Января", "Февраля", "Марта", "Апреля", "Мая", 
		"Июня", "Июля", "Августа", "Сентября",
		 "Октября", "Ноября", "Декабря"].map((item, index)=>
		 <option key={index}>{item}</option>
	 );

		return(
			// for styles used bootstrap-4
			<div className="wrapper"> 

				 <form ref="userForm"  noValidate >
					<div className="form-group">
					  <label  htmlFor="usr">ФИО:*</label>
						<input type="text" ref="fullName"
						 className="form-control form-control-sm " id="usr"
						 maxLength="100"
						 autoFocus
						 pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
						 required
						/>
						<div className="invalid-feedback">
							Пожалуйста, укажите вашу фамилию, имя, отчество.
						</div>

					</div>

					<div className="form-group">

						<label  htmlFor="birday">Дата Рождения:*</label>
						<div className="form-row">

					    <div className="col">
								<select required id="birday" ref="birthday" 
									class="custom-select custom-select-sm"  
									>
									{[<option key={'45id'} value='' hidden>День</option>,...daysOption]}
								</select>
								<div className="invalid-feedback">
									Пожалуйста, укажите дату рождения.
								</div>
					    </div>

					    <div className="col">
								<select ref="monthOfBirth"  class="custom-select custom-select-sm"  required>
			  					{[<option key={'46id'}  value='' hidden>Месяц</option>,...monthsOption]}
								</select>
					    </div>

							<div className="col">
								<select  ref="yearOfBirth" class="custom-select custom-select-sm"  required>
									{[<option key={'54id'}  value=''  hidden>Год</option>,...yearsOption]}
								</select>
					    </div>
							
	 					</div>
					</div>

					<div className="form-group">
					  <label  htmlFor="adr">Адрес:</label>
						<input type="text" ref="address" 
							className="form-control form-control-sm"
							id="adr"
						/>
					</div> 

					<div className="form-group">
					  <label  htmlFor="city">Город:</label>
						<input type="text" ref="city" className="form-control form-control-sm" id="city"/>
					</div> 

					<div className="form-group">
					  <label  htmlFor="phone">Номер Телефона:</label>
						<div className="input-group">
			        <div className="input-group-prepend">
			          <span className="input-group-text" id="inputGroupPrepend2">+7</span>
			        </div>
							<input type="tel" className="form-control" ref="numberPhone" 
						 	pattern="[0-9]{10}"
							/>
      			</div>
					</div> 
						<button type="submit" className="btn btn-primary"
						 onClick={this.formHandler.bind(this)}>
						 Отправить
						</button>
				</form> 
					
				{ 
					this.props.users.length !== 0 && this.props.users.map((item, index)=> //create list with data about user
						<ListOfUsers
							key={index} 
							userData={item}
							sendUserId={this.props.sendUserId}
							setEditingData={this.setEditingData.bind(this)}
						/>
					)
				} 
			</div>
		)
	}
}

export default UserForm;