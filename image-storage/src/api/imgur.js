import axios from 'axios';
import qs from 'qs';

const IMGUR_CLIENT_ID = '11821b8778e97c4';
//const IMGUR_CLIENT_SECRET = 'a51d4a83c97739f074196b60863ff00d71d9eb69';

const ROOT_URL = `https://api.imgur.com`;

// This file contains all interactions with the imgur API

export default {
  login() {
    const queryString = {
      client_id: IMGUR_CLIENT_ID,
      response_type: 'token'
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  uploadImages(token, images) {
    const promises = Array.from(images).map(image => {
      const formData = new FormData();
      formData.append('image', image);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    });
    return Promise.all(promises);
  }
};
