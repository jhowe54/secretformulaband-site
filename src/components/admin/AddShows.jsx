import { useEffect, useState } from "react";
import { supabase } from "../../api/client";
import { loadSchedule } from "../../api/api";
import { classNames } from "../../utils/classNames";
import Show from "../body/Show";
import ShowForm from "./ShowForm";
function AddShows() {
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const initialFormState ={
    title: "",
    description: "",
    date: "",
    media: "",
    ticket_link: "",
    address: "",
    time_start: "",
    time_end: "",
  }
  const [formState, setFormState] = useState(initialFormState);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
      .from("shows")
      .insert([formState])
      .select();
      if(error) throw error
      setShowSubmitMessage(true);
      setFormState(initialFormState)
    } catch(error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    async function loadShows() {
      try {
        const data = await loadSchedule();
      } catch (error) {
        if (error.name !== "AbortError") {
          throw error;
        }
        console.log("Aborted");
      }
    }
    loadShows();
    return () => abortController.abort();
  }, [showSubmitMessage]);

  return (
    <div className="bg-transparent w-full   ">
      {showSubmitMessage && (
        <div className="mx-auto w-min my-8">
          <div className="text-lg text-green-500 border border-green-500 p-4 rounded-full">
            Submitted!
          </div>
        </div>
      )}
      {errorMessage && (
        <div className="mx-auto w-min my-8">
          <div className="text-lg border border-red-500 p-4 rounded-full text-red-500">
            {errorMessage}
          </div>
        </div>
      )}

      <ShowForm
        formState={formState}
        setFormState={setFormState}
        handleSubmit={handleSubmit}
      />
      <div className="bg max-w-[400px] mx-auto text-center">
        <p className="text-xl">Preview</p>
        {formState.title && <Show show={formState} />}
      </div>
    </div>
  );
}

export default AddShows;
