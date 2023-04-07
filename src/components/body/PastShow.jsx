import { convertDate } from "../../utils/utilityFunctions";

function PastShow({ show, isPast, pastShow }) {
  return (
    <div
      className="m-2 text-lg md:pt-4 md:pb-4 md:px-6 p-2 rounded-md text-center "
    >
      <a className="md:text-md text-xl " href={pastShow.venue_website}>
        <h3 className="text-blue-300 mb-4 inline">{pastShow.title} </h3>
      </a><span className="md:inline hidden">-</span>{" "}
      {pastShow.date && (
        <h5 className="mt-1 mb-1 md:inline">{convertDate(pastShow.date)}</h5>
      )}
    </div>
  );
}

export default PastShow;
