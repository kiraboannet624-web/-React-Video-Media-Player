import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://youtube-v31.p.rapidapi.com',
  params: { maxResults: '50' },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});

export const fetchFromAPI = async (url) => {
  const { data } = await apiClient.get(`/${url}`);
  return data;
};
