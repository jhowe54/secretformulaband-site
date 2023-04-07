import { useNavigate } from "react-router";
import {
  convertDate,
  createGoogleMapsLink,
  convertTime,
} from "../../utils/utilityFunctions";
import Show from "./Show";
import PastShow from "./PastShow";
function PastShows({  pastShows }) {

  return (
    <>
      <h2 className="text-center text-5xl mb-4">Past Shows</h2>
      <div className="flex flex-col justify-center content-center items-center">
        {pastShows && pastShows.map((pastShow, index) => {
            return (
              <PastShow pastShow={pastShow} key={index} />
            );
          })}
      </div>
    
    </>
  );
}

export default PastShows;
