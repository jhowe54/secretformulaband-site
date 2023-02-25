import group from "../../media/group.JPG";
function Bio() {
  return (
    <>
      <img
        src={group}
        className="lg:w-2/3 w-full xl:p-0  rounded-md my-8 box-content"
        alt="Band Pic"
      />
      <p id="bio-1" className=" lg:px-60 md:px-10 px-4 py-4 lg:text-xl">
        The <span className="lg:text-2xl text-lg text-blue-300">Secret Formula Band</span>{" "}
        is a Southern rock group out of Charlotte, North Carolina that has been
        together since February 2022. The group brings a rugged, soulful noise
        to the stage that sounds as good as Miller Lite tastes. Drawing
        inspiration from some of their favorite blues, rock, and country artists
        – BB King, Pink Floyd, Tyler Childers, Lynyrd Skynyrd, and Grateful Dead
        - the group brings dynamic, improvisational music with a distinctly
        southern flair.
      </p>
      <p id="bio-2" className="lg:px-60 md:px-10 px-4 py-4 lg:text-xl">
        Mac McArtor [vocals, keys], Andrew Miramon [guitar, vocals], Alex Weir
        [guitar, mandolin, vocals], David Kirkpatrick [bass], and Joseph Howe
        [drums] make up the 5-piece machine that is Secret Formula Band as we
        know it today, with original members David Gardener, Ashby Wickham, and
        Matt Ziegelstein frequently coming home to jam with the Formulads.
      </p>
    </>
  );
}

export default Bio;
