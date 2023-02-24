function Shows({ shows, setShows }) {

  function convertDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const months             = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName          = months[parseInt(month) - 1];
    const formattedDate      = `${monthName} ${parseInt(day)}, ${year}`;
    return formattedDate;
  }

  function convertTime(inputTime) {
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
  function createGoogleMapsLink(address) {
    const mapsLink                = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const linkElement             = document.createElement('a');
          linkElement.href        = mapsLink;
          linkElement.target      = '_blank';
          linkElement.textContent = `View on Google Maps: ${address}`;
    
    return linkElement;
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      {shows &&
        shows.map((show, index) => {
          return (
            
              <div id="card" className="m-4 text-lg bg bg-[#0C0C0C] md:pt-10 md:pb-4 md:px-10 p-6 rounded-md" key={index}>
                <a className="text-3xl" href={show.venue_website}>
                  <h3 className="text-blue-300 mb-4 `">{show.title}</h3>
                </a>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {show.media && (
                  <img
                    height    = {300}
                    width     = {400}
                    className = "m-1 mx-auto mb-4 rounded-md md:aspect-square"
                    src       = {show.media}
                    alt       = "show"
                  />
                )}
                <div className="md:p-4 p-2">
                  {show.description && <div className="m-1">{show.description}</div>}
                  {show.date &&<div className="mt-2 mb-2">{convertDate(show.date)}</div>}
                  {show.time_start ? (
                    <div className="mt-2 mb-4 font-bold">
                      {convertTime(show.time_start) + " - " + convertTime(show.time_end)}
                    </div>
                  ) : (
                    <div>Time: <span className="font-bold">TBA</span></div>
                  )}
                  {show.address && show.address.split(".").map((addr, index) => {
                    return (
                      <div className="m-2" key={index}>
                        <a className="hover:text-blue-400" style={{borderBottom: "1px solid white"}} href={createGoogleMapsLink(show.address)}>{addr}</a>
                      </div>
                      );
                    })}
                </div>
              </div>
          
          );
        })}
    </div>
  );
}

export default Shows;
