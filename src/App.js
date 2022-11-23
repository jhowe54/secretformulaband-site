import { BiMenu } from "react-icons/bi";
import {ReactComponent as SnailLogo} from './snailfinal.svg';
import group from "./group.JPG"
function App() {
  return (
    <div className="App flex flex-col">
      <header
        id="header"
        className="flex flex-col justify-center content-center text-white text-4xl bg-black "
      >
        <BiMenu
          size={70}
          className="absolute md:top-0 md:right-0 md:visible invisible cursor-pointer hover:text-slate-200 p-2 mx-auto"
        />
       <SnailLogo fill="#FFFFFF" stroke="#FFFFFF" color="#FFFFFF" className=" mx-auto bg w-full"/>
        
        
      </header>
      <main className="flex flex-col items-center bg-black text-white">
        <img src={group} className="lg:w-2/3 w-full xl:p-0  rounded-md my-8 box-content" />
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
      </main>
    </div>
  );
}

export default App;
