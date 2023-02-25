import { useNavigate } from "react-router";
import {
  convertDate,
  createGoogleMapsLink,
  convertTime,
} from "../../utils/utilityFunctions";
function Shows({ shows, setShows }) {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-center text-5xl mb-4">Upcoming Shows</h2>
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
                  {show.time_start ? (
                    <div className=" font-bold">
                      {convertTime(show.time_start) +
                        " - " +
                        convertTime(show.time_end)}
                    </div>
                  ) : (
                    <div>
                      Time: <span className="font-bold">TBA</span>
                    </div>
                  )}
                  <div className="hover:text-blue-400">
                    {show.address &&
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
            );
          })}
      </div>
      <button
        onClick={() => navigate("/bookings")}
        className="text-xl bg p-2 my-6 md:w-[30%] w-[50%] rounded-lg hover:scale-110 duration-500 bg-blue-400  hover:bg-white hover:text-blue-400"
      >
        Book Now
      </button>
    </>
  );
}

export default Shows;
