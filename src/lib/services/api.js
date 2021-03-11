import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_API_TOKEN}`
  }
});

export const github = {
  getUsers: async ({ page, per_page}) => {
    return await instance.get('/users', {
      params: { per_page, page }
    });
  },
  getUser: async ({ username }) => {
    return await instance.get(`/users/${username}`);
  },
  getUserRepositories: async ({ username }) => {
    return await instance.get(`/users/${username}/repos`);
  }
}