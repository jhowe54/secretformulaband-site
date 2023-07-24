function Epk() {
  return (
    <div className="p-4 text-white">
      <div className=" md:p-8 lg:p-20 p-2">
        <div className="my-4">
          <h1 className="text-center text-3xl">Press Kit</h1>
        </div>
        <div className="video-container my-12">
          <iframe
            title="sfbyoutube"
            className="mx-auto md:w-[600px] md:h-[450px]"
            src="https://www.youtube.com/embed/cSXYrV8Mk8g"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="my-4 flex flex-col p-4 ">
          <img
            className="mx-auto"
            width={600}
            src="https://iuqjmypymqoxzqdtxjif.supabase.co/storage/v1/object/public/images/outsideBandpic.jpeg"
            alt="Band Pic"
          />
        </div>

        <div className="my-4 flex flex-col p-4">
          <div className="mb-[20px]">
            <h2 className="font-bold">Short Bio:</h2>
            <p>Southern Rock. Hail the snail.</p>
          </div>

          <div className="mb-[20px]">
            <h2 className="font-bold">Medium Bio:</h2>
            <p>
              Riding a new wave of southern rock into the heart of the
              Carolinas, Secret Formula Band delivers a rugged, soulful noise to
              the stage that gets the people going. The 5-piece band bottles up
              their sound in their first two released singles: The high-octane
              rock track, “Cajun Queen”, displays the brazen energy that the
              band carries, while the soulful blues number, “Get Your Lovin”,
              embodies the group’s ability to flip the switch in a moment's
              notice. Come hear SFB and enjoy the ride.
            </p>
          </div>

          <div className="mb-[20px]">
            <h2 className="font-bold">Long Bio:</h2>
            <p>
              Riding a new wave of southern rock into the heart of the
              Carolinas, Secret Formula Band delivers a rugged, soulful noise to
              the stage that gets the people going. The 5-piece band bottles up
              their sound in their first two released singles: The high-octane
              rock track, “Cajun Queen”, displays the brazen energy that the
              band carries, while the soulful blues number, “Get Your Lovin”,
              embodies the group’s ability to flip the switch in a moment's
              notice. Look out for their newest single, "Goodbye Carolina",
              releasing this August. Come hear SFB and enjoy the ride.
            </p>
          </div>

          <div className="mb-[20px]">
            <p>
              Mac McArtor [vocals, keys], Andrew Miramon [guitars, vocals], Alex
              Weir [guitar, mandolin, vocals], David Kirkpatrick [bass], and
              Joseph Howe [drums] make up the 5-piece machine that is Secret
              Formula Band as we know it today.
            </p>
          </div>
        </div>
        <div className="my-4 flex flex-col p-4 ">
          <img
            className="mx-auto scale-125"
            width={600}
            src="https://iuqjmypymqoxzqdtxjif.supabase.co/storage/v1/object/public/images/visulitebackv3.jpg?t=2023-07-24T00%3A41%3A34.884Z"
            alt="Band Pic"
          />
        </div>

        <div className="my-4 flex flex-col p-4 ">
          <h2 className="font-bold my-2">Show Dates and People in Attendance:</h2>
          <ul className="list-disc list-outside">
            <li>
              <div>
                <p>
                  <strong>5/20</strong> Crawfish for a Cause Charlotte -
                  nonprofit event raising awareness for mental health (600+
                  admitted at $40/ticket)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>4/15</strong> Evening Muse with Eden Hill (102 at
                  $10/$12)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>12/2/22</strong> Visulite Theater supporting Pluto
                  Gang (270 at $15)
                </p>
              </div>
            </li>
          </ul>
        </div>
        
        
      </div>
    </div>
  );
}

export default Epk;
