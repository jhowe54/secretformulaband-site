import { useEffect, useState } from "react";
import { supabase } from "../../api/client";
import { loadSchedule } from "../../api/api";
import { classNames } from "../../utils/classNames";
import Show from "../body/Show";
import ShowForm from "./ShowForm";
function AddShows() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    date: "",
    media: "",
    address: "",
    time_start: "",
    time_end: "",
  });

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("shows")
      .insert([formState])
      .select();

    console.log("DATA: ", data, "ERROR: ", error);
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
  }, []);

  return (
    <div className="bg-transparent w-full   ">
      <ShowForm formState={formState} setFormState={setFormState} handleSubmit={handleSubmit} />
      <div className="bg max-w-[400px] mx-auto text-center">
        <p className="text-xl">Preview</p>
        {formState.title &&
        <Show show={formState} />
        }
      </div>
    </div>
  );
}

export default AddShows;
