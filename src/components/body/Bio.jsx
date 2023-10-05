import outsidepic2 from "../../media/IMG_0590.png";
function Bio() {
  return (
    <>
      <img
        src={outsidepic2}
        className="xl:w-1/2 lg:w-2/3 md:w-4/5 w-full xl:p-0  rounded-md my-8 box-content grayscale contrast-[1.4]"
        alt="Band Pic"
      />
      <p id="bio-1" className=" lg:px-44 md:px-10 px-4 py-4 lg:text-xl">
        Riding a new wave of southern rock into the heart of the Carolinas,
        Secret Formula Band delivers a rugged, soulful noise to the stage for
        all to enjoy. This band artfully weaves a rich tapestry of musical
        influences from their hometowns, harnessing the soulful blues of
        Memphis, the swampy rhythms of Louisiana, the rugged rock of Alabama,
        and the gritty storytelling of the Carolinas to craft a distinctive and
        unforgettable sound all their own.
      </p>
      <p id="bio-2" className=" lg:px-44 md:px-10 px-4 py-4 lg:text-xl">
        The 5-piece band shows a dynamic range of energy and songwriting in its
        first 3 singles, “Cajun Queen”, “Get Your Lovin’”, and “Goodbye
        Carolina”, but all of their work has that unmistakable twang that SFB
        wears proudly. Come hear the energized, authentic experience that SFB
        delivers.
      </p>
      <p id="bio-2" className="lg:px-44 md:px-10 px-4 py-4 lg:text-xl">
        <span className="font-bold">Mac McArtor</span>{" "}
        <span className="font-thin">[vocals, keys]</span>,{" "}
        <span className="font-bold">Andrew Miramon</span>
        <span className="font-thin"> [guitar, vocals]</span>,{" "}
        <span className="font-bold">Alex Weir</span>
        <span className="font-thin"> [guitar, mandolin, vocals]</span>,{" "}
        <span className="font-bold">David Kirkpatrick</span>
        <span className="font-thin"> [bass]</span>, and{" "}
        <span className="font-bold">Joseph Howe</span>{" "}
        <span className="font-thin">[drums]</span> make up the 5-piece machine
        that is Secret Formula Band as we know it today.
      </p>
    </>
  );
}

export default Bio;
