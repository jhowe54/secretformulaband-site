import Show from "./Show";
function Shows({ shows, setShows, pastShows }) {
  return (
    <>
      <h2 className="text-center md:text-7xl text-6xl md:mt-20 mt-2 md:mb-10 mb-2">
        Upcoming Shows
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {shows &&
          shows.map((show, index) => {
            return <Show show={show} key={index} />;
          })}
        {!shows && <div>No upcoming shows right now - check back soon!</div>}
      </div>
    </>
  );
}

export default Shows;
