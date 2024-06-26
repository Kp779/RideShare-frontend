import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/sendotp`,data)
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}

export const sendAuthorDetails = async(data) =>{
    return await commonrequest("POST",`${BACKEND_URL}/user/requestRide`,data)
}

export const sendConfirmMail = async(data) =>{
    return await commonrequest("POST",`${BACKEND_URL}/user/confirmRide`,data)
}

export const sendRejectMail = async(data) =>{
    return await commonrequest("POST",`${BACKEND_URL}/user/rejectRide`,data)
}