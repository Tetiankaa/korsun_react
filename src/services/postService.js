import {axiosServices} from './axiosServices';

const postService =  {
    // getElementById:(userId)=>axiosServices.get(`/posts?userId=${userId}`)
    getElementById:(userId)=>axiosServices.get(`/posts`,{params:{userId}})
}
export {postService};