import {axiosService} from "./axiosService";
import {urls} from "../configs";

const jsonService = {
    getAll:() => axiosService.get(urls.comments),
    create:(newUser) => axiosService.post(urls.comments, newUser)
}

export {jsonService}