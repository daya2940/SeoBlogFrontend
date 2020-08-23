import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const create = (tag, token) => {
  return fetch(`${API}/tag`, {
    method: 'POST',
    headers: {
      Accept: 'application/json', 'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(tag)
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};

export const getAllTags = () => {
  return fetch(`${API}/categories`, {
    method: 'GET',
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};


export const removeTag = (slug, token) => {
  return fetch(`${API}/category/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json', 'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};




