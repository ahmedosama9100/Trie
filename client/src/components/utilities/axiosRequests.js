import queryString from "querystring";
import axios from "axios";

export { postRequest };

// configrations
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

//make post request

function postRequest(url, body) {
  return axios.post(url, queryString.stringify(body));
}
