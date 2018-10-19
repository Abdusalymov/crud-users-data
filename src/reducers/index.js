export const usersData = (state=[], action) =>{

	switch(action.type){
		case "ADD_USER":

			return [
				...state,
				{
					userId: action.userId,
					fullname: action.fullname,
					dateOfBirth: action.dateOfBirth,
					city: action.city,
					address: action.address,
					phoneNumber: "+7"+ action.phoneNumber
				}
			];

		case "REMOVE_USER":
		return state.filter((item)=> item.userId !== action.userId);
		
		default:
			return state;
			
	}
}