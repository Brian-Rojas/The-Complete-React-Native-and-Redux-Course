import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
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
                })
                Actions.pop();
            });
    };
};
