export default (applicants = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'FETCH_ONE':
      return action.payload;
    case 'CREATE':
      return [...applicants, action.payload];
    default:
      return applicants;
  }
};
