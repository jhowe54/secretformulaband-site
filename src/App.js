import { useEffect, useState } from "react";
import { loadSchedule } from "./api/api";
import { classNames }   from "./utils/classNames";
import { ReactComponent as SnailLogo } from "./media/snailfinal.svg";
import Gallery from "./components/body/Gallery";
import Social  from "./components/body/Social";
import Shows   from "./components/body/Shows";
import Bio     from "./components/body/Bio";
import PastShows from "./components/body/PastShows";
import { filterNewShows, filterOldShows } from "./utils/utilityFunctions";
import NavBar from "./components/global/NavBar";

function App() {
  const [shows, setShows] = useState([]);
  const [pastShows, setPastShows] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadShows() {
      try {
        const data = await loadSchedule();
        const newShows = filterNewShows(data)
        const prevShows = filterOldShows(data)
        setPastShows(prevShows)
        setShows(newShows);
      } catch (error) {
        if (error.name !== "AbortError") throw error;
        else console.log("Aborted");
      }
    }
    loadShows();
    return () => abortController.abort();
  }, []);

  return (
    <div className="App flex flex-col">
      <header id="header" className="md:h-[1000px] h-[300px] flex flex-col content-center text-white text-4xl bg bg-black ">
        <NavBar />
        <SnailLogo id="snail" fill="#FFFFFF" stroke="#FFFFFF"color="#FFFFFF" className="mx-auto md:static md:visible  bg md:w-full w-[48%] md:h-[400pt] h-auto"/>
      </header>
      <main className="flex flex-col items-center bg-black text-white">
        <section id="bio" className={classNames.sectionNorm}>
          <Bio />
        </section>
        <section id="media" className={classNames.sectionGallery}>
        <Gallery />
        </section>
        <section id="shows" className={classNames.sectionNorm}>
        <Shows shows={shows}   />
        </section>
        <section id="shows" className={classNames.sectionNorm}>
        <PastShows pastShows={pastShows}  />
        </section>
       
      </main>
      <footer>   
        <section className="text-white bg bg-[#0C0C0C] p-4 flex flex-col items-center justify-center content-center text-center h-100 pb-20 ">
          <Social />
        </section>
      </footer>
    </div>
  );
}

export default App;
