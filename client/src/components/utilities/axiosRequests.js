import axios from "axios";
import queryString from "querystring";

//make post request
function postRequest(url, body) {
  return axios.post(url, queryString.stringify(body));
}

//make get request
function getRequest(url) {
  return axios.get(url);
}

export { postRequest, getRequest };
