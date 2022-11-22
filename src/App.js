import { BiMenu } from "react-icons/bi";

function App() {
  return (
    <div className="App flex flex-col">
      <header
        id="header"
        className="flex flex-row p-2 justify-end text-white text-6xl  h-[40vh] bg-black   "
      >
        <BiMenu
          size={60}
          className="self-start p-2 cursor-pointer hover:text-slate-200"
        />
      </header>
      <main className="bg-black text-white">
        <img />
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
