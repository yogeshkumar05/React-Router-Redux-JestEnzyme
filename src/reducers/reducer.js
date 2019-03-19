const initialState = {
     name: 'initial name',
     showLoader: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
           return { ...state, showLoader: true};
      case 'DATA_RECEIVED':
           return { ...state, name: action.data.name, showLoader: false}
      default: 
           return state;
    }
   };
   export default reducer;