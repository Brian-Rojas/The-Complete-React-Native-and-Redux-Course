import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ user, name, phone, shift }) => {
    return (dispatch) => {
        firebase.database().ref(`/users/${user.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_CREATE
                });

                Actions.pop();
            });
    };
};

export const employeesFetch = (user) => {
    return (dispatch) => {
        firebase.database().ref(`/users/${user.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    };
};

export const employeeSave = ({ name, phone, shift, employeeId, userId }) => {
    return (dispatch) => {
        firebase.database().ref(`/users/${userId}/employees/${employeeId}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_SAVE_SUCCESS
                });
                
                Actions.pop();
            });
    };
};  
