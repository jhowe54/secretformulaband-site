import { useEffect, useState, useRef } from "react";
import { supabase } from "../../api/client";
import { loadSchedule } from "../../api/api";
import { filterNewShows, filterOldShows } from "../../utils/utilityFunctions";
import ShowForm from "./ShowForm";

function EditShows() {
  const [shows, setShows] = useState([]);
  const [pastShows, setPastShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const myRef = useRef(null);
  const initialFormState = {
    title      : "",
    description: "",
    date       : "",
    media      : "",
    address    : "",
    time_start : "",
    time_end   : "",
    ticket_link: "",
  };
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadShows() {
      try {
        const data      = await loadSchedule();
        const newShows  = filterNewShows(data);
        const prevShows = filterOldShows(data);
        setPastShows(prevShows);
        setShows(newShows);
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
        console.log("Aborted");
      }
    }
    loadShows();
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSubmitMessage]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from("shows")
        .update(formState)
        .eq("id", Number(selectedShow.id))
        .select();

      

      setShowSubmitMessage(true);
      setSelectedShow(null);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  };

  const handleShowSelection = (e, show) => {
    e.preventDefault();
    setErrorMessage(false)
    setShowSubmitMessage(false);
    setSelectedShow(show);
    setFormState({
      id: show.id || "",
      title: show.title || "",
      description: show.description || "",
      date: show.date || "",
      media: show.media || "",
      ticket_link: show.ticket_link || "",
      address: show.address || "",
      time_start: show.time_start || "",
      time_end: show.time_end || "",
    });
  };

  const handleDelete = async (e) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      try {
        const { error } = await supabase
          .from("shows")
          .delete()
          .eq("id", selectedShow.id);
        if (error) throw error;
        setShowSubmitMessage(true);
        setSelectedShow(null);
      } catch (error) {
        console.log(error.message);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-start bg-black text-white w-full">
      <div className=" mx-auto mt-4">
        <p className="text-center">Upcoming shows</p>
        {shows &&
          shows.map((show) => {
            return (
              <div
                key={show.id}
                onClick={(e) => handleShowSelection(e, show)}
                className="flex justify-between border rounded-md md:mb-4 my-2 mx-auto cursor-pointer min-w-[350px]"
                style={
                  selectedShow === show
                    ? { backgroundColor: "rgb(96 165 250)" }
                    : {}
                }
              >
                <div className="m-2">{show.title}</div>
                <div className="m-2">{show.date}</div>
              </div>
            );
          })}
      </div>
      <div className=" mx-auto my-2">
        <p className="text-center">Previous Shows</p>
        {shows &&
          pastShows.map((show) => {
            return (
              <div
                key={show.id}
                onClick={(e) => handleShowSelection(e, show)}
                className="flex justify-between border rounded-md md:mb-4 my-2 mx-auto hover:bg-blue-400 cursor-pointer  min-w-[350px]"
                style={
                  selectedShow === show
                    ? { backgroundColor: "rgb(96 165 250)" }
                    : {}
                }
              >
                <div className="m-2">{show.title}</div>
                <div className="m-2">{show.date}</div>
              </div>
            );
          })}
      </div>

      {showSubmitMessage && (
        <div className="mx-auto">
          <div className="text-lg text-green-500 border border-green-500 p-4 rounded-full">
            Submitted!
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="mx-auto">
          <div className="text-lg border border-red-500 p-4 rounded-full text-red-500">
            {errorMessage}
          </div>
        </div>
      )}

      <div ref={myRef} className="bg-transparent w-full min-h-[1000px]">
        {selectedShow && (
          <ShowForm
            formState={formState}
            setFormState={setFormState}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default EditShows;
