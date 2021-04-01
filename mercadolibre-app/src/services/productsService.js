import {API_URL} from '../utils/constants';
import axios from 'axios';

export const getItems = (query) => {
    console.log(API_URL)
   var config = {
     method: 'get',
     url: `${API_URL}?q=${query}`,
     headers: {
       'Content-Type': 'application/json; charset=UTF-8',
       Accept: 'application/json'
     },
   };
   return axios(config);
 };

 export const getItemDetail = (productId) => {
    console.log(API_URL)
   var config = {
     method: 'get',
     url: `${API_URL}/${productId}`,
     headers: {
       'Content-Type': 'application/json; charset=UTF-8',
       Accept: 'application/json'
     },
   };
   return axios(config);
 };