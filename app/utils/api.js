import axios from 'axios';

export async function getProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return await response.json();
    }
  } catch (error) {
    return error;
  }
}


function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(user => user.data);
}

function getStarCount(repos) {
  return repos.reduce((count, repo) => count + repo.stargazers_count, 0);
}

function calculateScore(profile, repos) {
  const { followers } = profile;
  const totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([
    getProfile(player),
    getRepos(player),
  ]).then((data) => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile,
      score: calculateScore(profile, repos),
    };
  });
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

function getFollowers(username) {
  return axios.get(`https://api.github.com/users/${username}/followers`)
    .then(user => user.data);
}

const APICallLimit = 7;

function getFollowersData(follower, index) {
  if (index < APICallLimit) {
    return axios.get(`https://api.github.com/users/${follower.login}`);
  }
  return null;
}

export function getAllFollowersData(username) {
  return getFollowers(username)
    .then(followersArray => axios.all(followersArray.map(getFollowersData))).then(followersDataArray => followersDataArray.slice(0, APICallLimit));
}

export function battle(players) {
  return axios.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

export function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return axios.get(encodedURI)
    .then(response => response.data.items);
}
