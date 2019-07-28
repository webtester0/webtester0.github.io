const initialState = {
    fio: '',
    myPhoto: '',
    friendOne: '',
    friendTwo: '',
    friendThree: '',
    isLoading: false,
    error: ''
};

const UserInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_INFO':
            return {
                ...state,
                isLoading: true
            };
        case 'INFO_SUCCESS':
            return {
                ...state,
                fio: `${action.payload[0]['first_name']} ${action.payload[0]['last_name']}`,
                myPhoto: action.payload[0]['photo_200']
            };
        case 'INFO_FAILED':
            return {
                ...state,
                error: action.payload
            };
        case 'FRIENDS_INFO_SUCCESS':
            return {
                ...state,
                friendOne: action.payload[0]['photo_200'],
                friendTwo: action.payload[1]['photo_200'],
                friendThree: action.payload[2]['photo_200'],
            };
        case 'FRIENDS_INFO_FAILED':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state
    }
};

export default UserInfo


