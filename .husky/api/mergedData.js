import { deleteSinglePlayer, getSinglePlayer } from "./playerData";
import { deleteSingleTeam, getSingleTeam, getTeamPlayers } from "./teamData";


const viewTeamDetails = (teamFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleTeam(teamFirebaseKey), getTeamPlayers(teamFirebaseKey)])
    .then(([teamObject, teamPlayersArray]) => {
      resolve({ ...teamObject, players: teamPlayersArray });
    }).catch((error) => reject(error));
});

const deleteTeamPlayers = (teamId) => new Promise((resolve, reject) => {
  getTeamPlayers(teamId).then((playersArray) => {
    console.warn(playersArray, 'Team Players');
    const deletePlayerPromises = playersArray.map((player) => deleteSinglePlayer(book.firebaseKey));

    Promise.all(deletePlayerPromises).then(() => {
      deleteSingleTeam(teamId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { deleteTeamPlayers, viewTeamDetails, }
