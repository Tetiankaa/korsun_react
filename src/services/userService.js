import {axiosServices} from '../services/axiosServices';

const userService = {
    getAll:() => axiosServices.get('/users'),
}
export {userService}