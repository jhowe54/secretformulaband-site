function Shows({ shows, setShows }) {
  function convertDate(inputDate) {
    console.log(inputDate);
    const options = {
      year : "numeric",
      month: "long",
      day  : "numeric",
    };
    const date          = new Date(inputDate);
    const convertedDate = new Intl.DateTimeFormat("en-US", options).format(date);
    return convertedDate;
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
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const linkElement = document.createElement('a');
    linkElement.href = mapsLink;
    linkElement.target = '_blank';
    linkElement.textContent = `View on Google Maps: ${address}`;
    return linkElement;
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      {shows &&
        shows.map((show, index) => {
          return (
            <>
              <div className="m-4 bg bg-[#0C0C0C] md:p-10 p-6 rounded-md" key={index}>
                <a className="text-3xl" href={show.venue_website}>
                  <h3 className="text-blue-300 mb-4 `">{show.title}</h3>
                </a>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {show.media && (
                  <img
                   
                    className = "m-1 mx-auto mb-4 rounded-md md:aspect-square"
                    src       = {show.media}
                    alt       = "show"
                  />
                )}
                {show.description && (
                  <div className="m-1">{show.description}</div>
                )}
                {show.date && (
                  <div className="m-2">{convertDate(show.date)}</div>
                )}
                {show.time_start ? (
                  <div className="mt-2 mb-4 font-bold">
                    {convertTime(show.time_start) +
                      " - " +
                      convertTime(show.time_end)}
                  </div>
                ) :
                <div>Time: <span className="font-bold">TBA</span></div>}
                {show.address &&
                  show.address.split(".").map((addr, index) => {
                    return (
                      <div className="m-2" key={index}>
                        <a style={{borderBottom: "1px solid white"}} href={createGoogleMapsLink(show.address)}>{addr}</a>
                      </div>
                    );
                  })}
              </div>
              
            </>
          );
        })}
    </div>
  );
}

export default Shows;
