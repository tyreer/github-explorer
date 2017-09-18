import axios from 'axios';

export function getProfile (username) {
  return axios.get(`https://api.github.com/users/${username}`)
    .then(function(user) {
      return user.data;
    })
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos?per_page=100`)
    .then(function(user) {
      return user.data;
    })
}

function getStarCount (repos) {
  return repos.reduce(function(count, repo) {
    return count + repo.stargazers_count
  }, 0);
}

function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

function handleError (error) {
  console.warn(error);
  return null;
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then( function (data) {
    let profile = data[0];
    let repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  });
}

function sortPlayers (players) {
  return players.sort(function (a,b) {
    return b.score - a.score;
  });
}

function getFollowers (username) {
  return axios.get(`https://api.github.com/users/${username}/followers`)
    .then(function(user) {
      return user.data;
    })
}

const APICallLimit = 5;

function getFollowersData (follower, index) {
  if (index < APICallLimit) {
    return axios.get(`https://api.github.com/users/${follower.login}`)
  }
}

export function getAllFollowersData (username) {
  return getFollowers(username)
    .then(function(followersArray) {
      return axios.all(followersArray.map(getFollowersData))
    }).then(function(followersDataArray) {
      return followersDataArray.slice(0, APICallLimit);
    });
}

export function battle (players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  }

export function fetchPopularRepos (language) {
      let encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

      return axios.get(encodedURI)
        .then((response) => {
          return response.data.items;
        });
  }
