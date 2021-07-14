import * as api from '../api';

export const getApplicants = () => async (dispatch) => {
  try {
    const { data } = await api.fetchApplicants();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getApplicant = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchApplicant(id);
    dispatch({ type: 'FETCH_ONE', payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
export const createApplicant = (newApplicant) => async (dispatch) => {
  try {
    const { data } = await api.createApplicant(newApplicant);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.response);
  }
};
