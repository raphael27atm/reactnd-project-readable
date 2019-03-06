export const capitalize = (str = '') => {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

export const date = (timestamp) => {
  let pubDate = new Date(timestamp)
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  let monthname = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  let formattedDate = weekday[pubDate.getDay()] + ' ' +
      monthname[pubDate.getMonth()] + ' ' + pubDate.getDate() + ', ' +
      pubDate.getFullYear()
  return formattedDate
}

export const username = (str = '') => {
  return typeof str !== 'string' ? '' : str.substring(0, 2).toUpperCase()
}

export const uuid = () => {
  return Math.random().toString(36).substring(2) +
    (new Date()).getTime().toString(36)
}

export const dateYYYYMMDDHHMMSS = (input) => {
	let date = new Date(input);
	let year = date.getFullYear();
  	let month = (1 + date.getMonth()).toString();
  	month = month.length > 1 ? month : '0' + month;
  	let day = date.getDate().toString();
  	let hour = date.getHours().toString();
  	hour = hour.length > 1 ? hour : '0' + hour;
  	let minute = date.getMinutes().toString();
  	minute = minute.length > 1 ? minute : '0' + minute;
  	let second = date.getSeconds().toString();
  	second = second.length > 1 ? second : '0' + second;
  	day = day.length > 1 ? day : '0' + day;
  	return year + '-' + month + '-' + day + " "+ hour + ":" + minute + ":" + second;
}