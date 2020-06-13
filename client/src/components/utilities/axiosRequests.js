import queryString from "querystring";
import axios from "axios";

export { postRequest, getRequest };

//make post request
function postRequest(url, body) {
  return axios.post(url, queryString.stringify(body));
}

//make get request
function getRequest(url) {
  return axios.get(url);
}
