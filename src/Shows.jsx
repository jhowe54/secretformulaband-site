import { useEffect, useState } from "react";
import { loadSchedule } from "./api/api";
function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadShows() {
      try {
        const data = await loadSchedule();
        console.log("DATA", data)
        setShows(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
        console.log("Aborted!");
      }
    }
    loadShows();
    return () => abortController.abort();
  }, []);
  return (
    <>
    {shows && shows.map((show, index) => {
        return (
            <>
            <div className="m-4" key={index}>
               <a className="text-xl" href={show.venue_website}><h3 className="text-blue-300 `">{show.title}</h3></a>
               { /* eslint-disable-next-line jsx-a11y/alt-text */}
                {show.media && <img className="m-1" src={show.media} />}
                {show.description && <div className="m-1">{show.description}</div>}
                {show.date && <div className="m-2">{show.date}</div>}
                {show.address && <div className="m-2">{show.address}</div>}
            </div>
            <span>-</span>
            </>
        )
    })}
    
    </>
    
  )
}

export default Shows;
