import axios from "axios";
import { clientCredentials } from "../../utils/client";

const dbUrl = clientCredentials.databaseURL;

// Create Team
const createTeam = (teamObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/teams.json`, teamObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/teams/${response.data.name}.json`, payload)
        .then(() => {
          getAllTeams(teamObj.uid).then(resolve);
        });
    }).catch(reject);
});

// Update Team
const updateTeam = (teamObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/teams/${teamObj.firebaseKey}.json`, teamObj)
    .then(() => getAllTeams(teamObj.uid).then(resolve))
    .catch(reject);
});

//Delete Team
const deleteSingleTeam = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/teams/${firebaseKey}.json`)
    .then(() => {
      getAllTeams().then((teamsArray) => resolve(teamsArray));
    })
    .catch((error) => reject(error));
});

// Get All Teams
const getAllTeams = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/teams.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// Get Single Team
const getSingleTeam = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/teams/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Get a Single Team's Players
const getTeamPlayers = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json?orderBy="team_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getAllTeams,
  getSingleTeam,
  createTeam,
  updateTeam,
  getTeamPlayers,
  deleteSingleTeam,
}
