import group from "../../media/group.JPG";
import outsidepic2 from "../../media/IMG_0590.png";
function Bio() {
  return (
    <>
      <img
        src={outsidepic2}
        className="xl:w-1/2 lg:w-2/3 md:w-4/5 w-full xl:p-0  rounded-md my-8 box-content grayscale contrast-[1.4]"
        alt="Band Pic"
      />
      <p id="bio-1" className=" lg:px-60 md:px-10 px-4 py-4 lg:text-xl">
        The{" "}
        <span className="lg:text-2xl text-lg font-bold">
          Secret Formula Band
        </span>{" "}
        is a Southern rock group out of Charlotte, North Carolina that has been
        together since February 2022. The group brings a rugged, soulful noise
        to the stage that sounds as good as Miller Lite tastes. Drawing
        inspiration from some of their favorite blues, rock, and country artists
        - BB King, Pink Floyd, Tyler Childers, Lynyrd Skynyrd, and Grateful Dead
        - the group brings dynamic, improvisational music with a distinctly
        southern flair.
      </p>
      <p id="bio-2" className="lg:px-60 md:px-10 px-4 py-4 lg:text-xl">
        <span className="font-bold">Mac McArtor</span> [vocals, keys], <span className="font-bold">Andrew Miramon</span>{" "}
        [guitar, vocals], <span className="font-bold">Alex Weir</span> [guitar, mandolin, vocals],{" "}
        <span className="font-bold">David Kirkpatrick</span> [bass], and <span className="font-bold">Joseph Howe</span>{" "}
        [drums] make up the 5-piece machine that is Secret Formula Band as we
        know it today.
      </p>
    </>
  );
}

export default Bio;
