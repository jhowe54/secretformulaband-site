
import { FaInstagram } from "react-icons/fa";
import { ReactComponent as SnailLogo } from "./snailfinal.svg";
import group from "./group.JPG"
import {useNavigate} from "react-router-dom"
import Gallery from "./Gallery";

import Shows from "./Shows";

function App() {
  const navigate = useNavigate();
  


  return (
    <div className="App flex flex-col">
      
      <header
        id="header"
        className="mt-10 flex flex-col justify-center content-center text-white text-4xl bg bg-black "
      >
        {/*
        <BiMenu
          size={70}
          className="absolute md:top-0 md:right-0 md:visible invisible cursor-pointer hover:text-slate-200 p-2 mx-auto"
        /> */}
        <SnailLogo
          id="snail"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          color="#FFFFFF"
          className="mx-auto bg w-full md:h-[400pt] h-[auto]"
        />
      </header>
      <main className="flex flex-col items-center bg-black text-white">
        
 <img
            src={group}
            className="lg:w-2/3 w-full xl:p-0  rounded-md my-8 box-content"
            alt="Band Pic"
          />
        <p id="bio-1" className=" lg:px-20 md:px-10 px-4 py-4">
          Secret Formula Band is a southern rock group out of Charlotte, North
          Carolina, that has been together since February 2022. The group brings
          a rugged, soulful noise to the stage that sounds as good as Miller
          Lite tastes. Drawing inspiration from some of their favorite blues,
          rock, and country artists – BB King, Pink Floyd, Tyler Childers,
          Lynyrd Skynyrd, and Grateful Dead - the group brings dynamic,
          improvisational music with a distinctly southern flair.
        </p>
        <p id="bio-2" className="lg:px-20 md:px-10 px-4 py-4">
          Mac McArtor [vocals, keys], Andrew Miramon [guitar, vocals], Alex Weir
          [guitar, mandolin, vocals], David Kirkpatrick [bass], and Joseph Howe
          [drums] make up the 5-piece machine that is Secret Formula Band as we
          know it today, with original members David Gardener, Ashby Wickham,
          and Matt Ziegelstein frequently coming home to jam with the Formulads.
        </p>
        <section className="flex flex-col justify-center content-center items-center w-full text-white p-4 text-center">
        <Gallery />
          <h2 id="social" className="text-5xl mb-2">Social</h2>
          <a id="insta" href="https://www.instagram.com/secretformulaband/">
            <FaInstagram id="insta-icon" size={70} />
          </a>

          <a
            className="text-blue-300 mt-2"
            href="https://www.instagram.com/secretformulaband/"
          >
            @secretformulaband
          </a>
        </section>
      </main>
      <section id="shows" className="text-white bg bg-[#0C0C0C] p-4 flex flex-col items-center justify-center content-center text-center ">
        <h2 className="text-center text-5xl mb-4">Upcoming Shows</h2>
        <Shows /> 
        <h2 className="text-4xl my-4">Book a show</h2>
        <button onClick={() => navigate("/bookings") } className="bg p-2 my-6 rounded-lg bg-blue-400">Book Now</button>
        <p className="mb-6">OR</p>
        <p className="">
          Send us an email at:{" "}
          <a
            href="mailto:secretformulaband@gmail.com"
            className="text-blue-300"
          >
            secretformulaband@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
