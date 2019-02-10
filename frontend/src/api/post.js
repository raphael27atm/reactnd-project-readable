import baseurl from '../config/baseurl'
import headers from '../config/headers'

export const createNewPost = (content) => {
  fetch(`${baseurl}/posts/`, {
    method: 'POST', 
    headers: headers, 
    body: JSON.stringify(content)
  }).
  then((response) => response.json())
}

export const createNewComment = (content) => {
  fetch(`${baseurl}/comments/`, {
    method: 'POST', 
    headers: headers, 
    body: JSON.stringify(content)
  }).
  then((response) => response.json())
}

export const getAllPosts = () => {
  fetch(`${baseurl}/posts`, {headers}).
  then((response) => response.json())
}

export const getPosts = (category) => {
  if (category === 'all') {
    url = `${baseurl}/posts`
  }
  else {
    url = `${baseurl}/${category}/posts`
  }
  fetch(url, {headers}).
  then((response) => response.json())
}

export const getPost = (id) => {
  fetch(`${baseurl}/posts/${id}`, {headers}).
  then((response) => response.json())
}

export const getComment = (id) => {
  fetch(`${baseurl}/comments/${id}`, {headers}).
  then((response) => response.json())
}

export const getComments = (id) => {
  fetch(`${baseurl}/posts/${id}/comments`, {headers}).
  then((response) => response.json())
}

export const updatePostVoter = (id, type) => {
  fetch(`${baseurl}/posts/${id}`, {
    method: 'POST', 
    headers: headers, 
    body: JSON.stringify({option: type})
  }).
  then((response) => response.json())
}

export const updatePostContent = (id, content) => {
  fetch(`${baseurl}/posts/${id}`, {
    method: 'PUT', 
    headers: headers, 
    body: JSON.stringify(content)
  }).
  then((response) => response.json())
}

export const updateAllPostContent = (id, content, category, tab) => {
  fetch(`${baseurl}/posts/${id}`, {
    method: 'PUT', 
    headers: headers, 
    body: JSON.stringify(content)
  }).
  then((response) => response.json())
}

export const deletePostsAllUpdate = (id, category, tab) => {
  fetch(`${baseurl}/posts/${id}`, {
    method: 'PUT', 
    headers: headers, 
    body: JSON.stringify({deleted: true})
  }).
  then((response) => response.json())
}

export const deletePostContent = (id) => {
  fetch(`${baseurl}/posts/${id}`, {
    method: 'PUT', 
    headers: headers, 
    body: JSON.stringify({deleted: true})
  }).
  then((response) => response.json())
}

export const deleteCommentContent = (id) => {
  fetch(`${baseurl}/comments/${id}`, {
    method: 'PUT', 
    headers: headers, 
    body: JSON.stringify({deleted: true})
  }).
  then((response) => response.json())
}