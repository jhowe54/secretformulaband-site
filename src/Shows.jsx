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

  return (
    <>
      {shows &&
        shows.map((show, index) => {
          return (
            <>
              <div className="m-4 bg bg-[#0C0C0C] p-10 rounded-md" key={index}>
                <a className="text-3xl" href={show.venue_website}>
                  <h3 className="text-blue-300 mb-4 `">{show.title}</h3>
                </a>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {show.media && (
                  <img
                    height    = {300}
                    width     = {300}
                    className = "m-1 mx-auto mb-4 rounded-md"
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
                {show.time_start && (
                  <div className="mt-2 mb-4 font-bold">
                    {convertTime(show.time_start) +
                      " - " +
                      convertTime(show.time_end)}
                  </div>
                )}
                {show.address &&
                  show.address.split(".").map((address, index) => {
                    return (
                      <div className="m-2" key={index}>
                        {address}
                      </div>
                    );
                  })}
              </div>
              <span>-</span>
            </>
          );
        })}
    </>
  );
}

export default Shows;
