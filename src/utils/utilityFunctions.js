export function convertDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const months             = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName          = months[parseInt(month) - 1];
    const formattedDate      = `${monthName} ${parseInt(day)}, ${year}`;
    return formattedDate;
  }

  export function convertTime(inputTime) {
    const now       = new Date();
    const inputDate = new Date(now.toDateString() + " " + inputTime);

    const options = {
      timeZone: "America/New_York",
      hour12  : true,
      hour    : "numeric",
      minute  : "numeric",
    };

    const estTime = inputDate.toLocaleString("en-US", options);
    return estTime;
  }
  export function createGoogleMapsLink(address) {
    const mapsLink                = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const linkElement             = document.createElement('a');
          linkElement.href        = mapsLink;
          linkElement.target      = '_blank';
          linkElement.textContent = `View on Google Maps: ${address}`;
    
    return linkElement;
  }