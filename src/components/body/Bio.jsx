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
        Riding a new wave of southern rock into the heart of the Carolinas,
        Secret Formula Band delivers a rugged, soulful noise to the stage that
        gets the people going. The 5-piece band bottles up their sound in their
        first two released singles: The high-octane rock track, “Cajun Queen”,
        displays the brazen energy that the band carries while the soulful blues
        number, “Get Your Lovin” embodies the group’s ability to flip the switch
        in a moments notice. Come hear SFB and enjoy the ride.
      </p>
      <p id="bio-2" className="lg:px-60 md:px-10 px-4 py-4 lg:text-xl">
        <span className="font-bold">Mac McArtor</span> [vocals, keys],{" "}
        <span className="font-bold">Andrew Miramon</span> [guitar, vocals],{" "}
        <span className="font-bold">Alex Weir</span> [guitar, mandolin, vocals],{" "}
        <span className="font-bold">David Kirkpatrick</span> [bass], and{" "}
        <span className="font-bold">Joseph Howe</span> [drums] make up the
        5-piece machine that is Secret Formula Band as we know it today.
      </p>
    </>
  );
}

export default Bio;
