import PastShow from "./PastShow";
function PastShows({  pastShows }) {
  return (
    <>
      <h2 className="text-center md:text-7xl text-6xl md:mt-20 mt-2 md:mb-10 mb-2">Past Shows</h2>
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
