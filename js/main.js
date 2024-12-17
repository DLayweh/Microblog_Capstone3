//only 2 - insecure token free actions
//create user - sign up

//login and store username and token recieved
//All the others need a token in the header

const BASE_URL = "http://microbloglite.us-east-2.elasticbeanstalk.com";
const NO_AUTH_HEADERS = { 'accept': 'application/json', 'Content-Type': 'application/json' };
// ONLY 2 - INSECURE TOKEN FREE ACTIONS

//create user - sign up
/*
curl -X 'POST' \
  'http://microbloglite.us-east-2.elasticbeanstalk.com/api/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "string",
  "fullName": "string",
  "password": "string"
}'
*/
async function signUp(username, fullName, password) {
    const payload = JSON.stringify(
        { "username": username, "fullName": fullName, "password": password }
    );

    const response = await fetch(BASE_URL + "/api/users", {
        method: "POST",
        headers: NO_AUTH_HEADERS,
        body: payload
    }); //end fetch

    //TODO check for error response status codes
    if (response.status != 201) {
        console.log(response.status, response.statusText);
        return response.statusText;
    }
    const object = await response.json(); //COnvert body to object
    return object;
}


//login and store username and token received
/*
curl -X 'POST' \
  'http://microbloglite.us-east-2.elasticbeanstalk.com/auth/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "string",
  "password": "string"
}'
*/
async function login(username, password) {
    const payload = JSON.stringify({ "username": username, "password": password });
    const response = await fetch(BASE_URL + "/auth/login", {
        method: "POST",
        headers: NO_AUTH_HEADERS,
        body: payload
    }); //end fetch

    //TODO check for error response status codes
    if (response.status != 200) {
        console.log(response.status, response.statusText);
        return response.statusText;
    }
    const object = await response.json(); //COnvert body to object
    localStorage.token = object.token;
    localStorage.username = object.username;
    return object;
}

// ALL THE OTHERS NEED A TOKEN IN THE HEADER

// get secure list of message using token

// r = await fetch(url, {
//     method: "GET",
//     headers: {
//         Authorization: `Bearer ${loginData.token}`,
//     },
// })