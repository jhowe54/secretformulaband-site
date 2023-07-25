import { convertDate, convertTime, createGoogleMapsLink } from "../../utils/utilityFunctions";


function Show({show}) {
    return (
        <div id="card" className="m-4 text-lg bg bg-[#0C0C0C] p-4 rounded-md text-center">
                <a className="lg:text-4xl text-4xl" href={show.venue_website}>
                  <h3 className="text-bold my-2 min-h-[100px] align-middle flex justify-center items-center">{show.title}</h3>
                </a>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {show.media && (
                  <img
                    height={300}
                    width={300}
                    className="m-1 mx-auto my-2 rounded-md h-[400px]"
                    src={show.media}
                    alt="show"
                  />
                )}
                <div className="p-2 my-2">
                {show.description && (
                    <div className="text-lg mb-2">{show.description}</div>
                  )}
                  {show.ticket_link && (
                    <div><a href={show.ticket_link} className="text-blue-300">Tickets</a></div>
                  )}
                  {show.date && (
                    <div className="my-2">{convertDate(show.date)}</div>
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