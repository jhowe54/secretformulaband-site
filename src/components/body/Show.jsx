import { convertDate, convertTime, createGoogleMapsLink } from "../../utils/utilityFunctions";


function Show({show}) {
    return (
        <div id="card" className="m-4 text-lg bg bg-[#0C0C0C] md:pt-6 md:pb-4 md:px-10 p-6 rounded-md">
                <a className="text-4xl" href={show.venue_website}>
                  <h3 className="text-bold mb-4 `">{show.title}</h3>
                </a>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {show.media && (
                  <img
                    height={300}
                    width={400}
                    className="m-1 mx-auto mb-4 rounded-md md:aspect-square"
                    src={show.media}
                    alt="show"
                  />
                )}
                <div className="md:p-4 p-2">
                  {show.description && (
                    <div className="m-1">{show.description}</div>
                  )}
                  {show.date && (
                    <div className="mt-2 mb-2">{convertDate(show.date)}</div>
                  )}
                  {show.time_start && (
                    <div className=" font-bold">
                      {convertTime(show.time_start) +
                        " - " +
                        convertTime(show.time_end)}
                    </div>
                  )}
                  <div className="hover:text-blue-400">
                    { show.address &&
                      show.address.split(".").map((addr, index) => {
                        return (
                          <div className="" key={index}>
                            <a
                              className=""
                              style={{ borderBottom: "1px solid white" }}
                              href={createGoogleMapsLink(show.address)}
                            >
                              {addr}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
    )
}

export default Show;