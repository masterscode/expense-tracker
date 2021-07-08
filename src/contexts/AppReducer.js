export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        dummyTransactions: state.dummyTransactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };
      case 'ADD_TRANSACTION':
          return{
              ...state, dummyTransactions:[payload, ...state.dummyTransactions]
          }
    default:
      return state;
  }
};
