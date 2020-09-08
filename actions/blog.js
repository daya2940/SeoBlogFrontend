import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createBlog = (blog, token) => {
  return fetch(`${API}/blog`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: blog
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};


export const listBlog = (skip,limit) => {
  const data ={limit,skip}
  return fetch(`${API}/blogs-categories-tags`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json'
    },

    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).catch(err => {
    console.log(err);
  });
};


export const singleBlog = slug => {
  console.log(slug);
  return fetch(`${API}/blogs/${slug}`,{
    method: 'GET',
  })
  .then(response => {
    return response.json();
  })
  .catch(e => console.log(e));
}





