import { DateTime } from 'luxon';
export function convertDate(dateString) {
  const [year, month, day] = dateString.split("-");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[parseInt(month) - 1];
  const formattedDate = `${monthName} ${parseInt(day)}, ${year}`;
  return formattedDate;
}

export function convertTime(inputTime) {
  const inputDate = new Date(`1970-01-01T${inputTime}-05:00`);
  const options = {
    hour12  : true,
    hour    : "numeric",
    minute  : "numeric",
    timeZone: "America/New_York",
  };
  const estTime = inputDate.toLocaleString("en-US", options);
  return estTime;
}

export function createGoogleMapsLink(address) {
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  const linkElement             = document.createElement("a");
        linkElement.href        = mapsLink;
        linkElement.target      = "_blank";
        linkElement.textContent = `View on Google Maps: ${address}`;
  return linkElement;
}

export function filterOldShows(shows) {
  return shows
    .filter((show, index) => {
      let currentDate   = new Date();
      let dateToCompare = DateTime.fromISO(show.date, { zone: 'UTC' }).endOf('day');
      return currentDate > dateToCompare;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function filterNewShows(shows) {
  return shows
    .filter((show) => {
      let currentDate   = new Date()
      let dateToCompare = DateTime.fromISO(show.date, { zone: 'UTC' }).endOf('day');
      return currentDate < dateToCompare;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
