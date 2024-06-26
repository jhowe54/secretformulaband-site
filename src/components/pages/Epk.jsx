import { useEffect, useState } from "react";
import { loadSelectedEPKData} from "../../api/api"

function Epk() {

  const [bioData, setBioData] = useState({});
  const [err, setErr] = useState({})

  useEffect(() => {
    const abortController = new AbortController();
    async function getBioData() {
      try {
        const data = await loadSelectedEPKData("epkBio");
        setBioData(data.textContent)
      } catch(error) {
        if (error.name !== "AbortError") {
          setErr(error)
        } else {
          console.log("aborted")
        }
      }
    }
    getBioData();
    return () => abortController.abort()
  }, [])


  return (
    <div className="p-4 text-white">
      <div className=" md:p-8 lg:p-20 p-2">
        <div className="my-4">
          <h1 className="text-center text-3xl">Press Kit</h1>
        </div>  
        <div className="video-container my-12">
        <iframe className="mx-auto md:w-[600px] md:h-[450px]" src="https://www.youtube.com/embed/Jhzj35ON3Vc?si=Q-EsqFaTxhjvXNGk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="my-4 flex flex-col p-4 ">
          <img
            className="mx-auto"
            width={800}
            src="https://iuqjmypymqoxzqdtxjif.supabase.co/storage/v1/object/public/images/backyardpic.png?t=2023-07-24T00%3A43%3A47.643Z"
            alt="Band Pic"
          />
        </div>

        <div className="my-4 flex flex-col p-4">
          <div className="mb-[20px]">
            <h2 className="font-bold">Short Bio:</h2>
            <p>Southern Rock. Hail the snail.</p>
          </div>
          <div className="mb-[20px]">
            <h2 className="font-bold">Full Bio:</h2>
            
              {bioData && (
                <p>{bioData.pg1}</p>
              )}
         
            <br />
            {bioData && (
                <p>{bioData.pg2}</p>
              )}
          </div>
          <div className="mb-[20px]">
            <p>
              <span className="font-bold">Mac McArtor</span>{" "}
              <span className="font-thin">[vocals, keys]</span>,{" "}
              <span className="font-bold">Andrew Miramon</span>
              <span className="font-thin"> [guitar, vocals]</span>,{" "}
              <span className="font-bold">Alex Weir</span>
              <span className="font-thin">
                {" "}
                [guitar, mandolin, vocals]
              </span>, <span className="font-bold">David Kirkpatrick</span>
              <span className="font-thin"> [bass]</span>, and{" "}
              <span className="font-bold">Joseph Howe</span>{" "}
              <span className="font-thin">[drums]</span> make up the 5-piece
              machine that is Secret Formula Band as we know it today.
            </p>
          </div>
        </div>
        <div className="my-4 flex flex-col p-4 ">
          <img
            className="mx-auto"
            width={800}
            src="https://iuqjmypymqoxzqdtxjif.supabase.co/storage/v1/object/public/images/visulitebackv3.jpg?t=2023-07-24T00%3A41%3A34.884Z"
            alt="Band Pic"
          />
        </div>

        <div className="my-4 flex flex-col p-4 ">
          <h2 className="font-bold my-2">
            Show Dates and People in Attendance:
          </h2>
          <ul className="list-disc list-outside">
          <li>
              <div>
                <p>
                  <strong>02/09/24</strong> Evening Muse with Council Ring
                  (SOLD OUT at 120)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>09/16/23</strong> The Pour House with Joe May &
                  Riverdawg (105 at $10/$12)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>08/11/23</strong> Evening Muse with The East Wing
                  (SOLD OUT at 120)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>05/20/23</strong> Crawfish for a Cause Charlotte -
                  nonprofit event raising awareness for mental health (600+
                  admitted at $40/ticket)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>04/15/23</strong> Evening Muse with Eden Hill (102 at
                  $10/$12)
                </p>
              </div>
            </li>
            <li>
              <div>
                <p>
                  <strong>12/02/22</strong> Visulite Theater supporting Pluto
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
