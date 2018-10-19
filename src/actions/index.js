export function sendUserData(data) {
  return {
    type: "ADD_USER",
		userId: 		 data.userId,
		fullname: 	 data.fullname,
		dateOfBirth: data.dateOfBirth,
		city: 			 data.city,
		address: 		 data.address,
		phoneNumber: data.phoneNumber
  }
}

export function removeUser(userId){
	return{
		type: "REMOVE_USER",
		userId: userId
	}
}