import baseurl from '../config/baseurl'
import headers from '../config/headers'

export const getCategories = () => {
  fetch(`${baseurl}/categories`, {headers}).
  then((response) => response.json())
}

export const getTabs = () => {
  fetch(`${baseurl}/tabs`, {headers}).
  then((response) => response.json())
}