import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import { 
	sendUserData,
	removeUser } from '../actions'


const mapStateToProps = state =>{
	return {
		users: state.usersData
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		sendData: (data)=>{
			dispatch(sendUserData(data))
		},
		sendUserId: (userId)=>{
			dispatch(removeUser(userId))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserForm);