import queryString from "querystring";
import axios from "axios";

export { postRequest };

//make post request
function postRequest(url, body) {
  return axios.post(url, queryString.stringify(body));
}
