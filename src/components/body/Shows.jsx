import { useNavigate } from "react-router";
import {
  convertDate,
  createGoogleMapsLink,
  convertTime,
} from "../../utils/utilityFunctions";
import Show from "./Show";
import PastShow from "./PastShow";
function Shows({ shows, setShows, pastShows }) {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-center text-5xl mb-4">Upcoming Shows</h2>
      <div className="grid md:grid-cols-2 grid-cols-1">
        {shows && shows.map((show, index) => {
            return (
              <Show show={show} key={index} />
            );
          })}
      </div>
    
    </>
  );
}

export default Shows;
