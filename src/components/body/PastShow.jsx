import { convertDate } from "../../utils/utilityFunctions";


function PastShow({show, isPast, pastShow}) {
    return (
      <div id="card" className="m-4 text-lg bg bg-[#0C0C0C] md:pt-6 md:pb-4 md:px-6 p-4 rounded-md text-center">
                <a className="md:text-3xl text-xl" href={pastShow.venue_website}>
                  <h3 className="text-blue-300 mb-4 `">{pastShow.title}</h3>
                </a>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                {pastShow.media && (
                  <img
                    height={200}
                    width={266.67}
                    className="m-1 mx-auto mb-2 rounded-md md:aspect-square"
                    src={pastShow.media}
                    alt="show"
                  />
                )}
                <div className="md:p-2 p-1">
                  {pastShow.description && (
                    <div className="m-1">{pastShow.description}</div>
                  )}
                  {pastShow.date && (
                    <div className="mt-2 mb-1">{convertDate(pastShow.date)}</div>
                  )}
                  
                  
                </div>
              </div>
    )
}

export default PastShow;