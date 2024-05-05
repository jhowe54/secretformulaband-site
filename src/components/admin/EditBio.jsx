import { useEffect, useState, useRef } from "react";
import { supabase } from "../../api/client";
import { loadSchedule, loadSelectedEPKData } from "../../api/api";
import { classNames } from "../../utils/classNames";

function EditBio() {
  const [formState, setFormState] = useState({});
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [err, setErr] = useState({});

 

  useEffect(() => {
    const abortController = new AbortController();
    async function getBioData() {
      try {
        const data = await loadSelectedEPKData("epkBio");
        setFormState(data.textContent);
      } catch (error) {
        if (error.name !== "AbortError") {
          setErr(error);
        } else {
          console.log("aborted");
        }
      }
    }
    getBioData();
    return () => abortController.abort();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setShowSubmitMessage(false)
    setFormState({
      ...formState,
      
      [e.target.name]: e.target.value
      
    });
    console.log(formState)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase
        .from("epk")
        .update({"textContent": formState})
        .eq("id", 1)
        .select();
      setShowSubmitMessage(true);
    } catch (error) {
      console.log(error.message);
      setErr(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="bio-form" className="md:w-2/3 w-full">
      <div className=" flex flex-col justify-center items-center  mx-auto ">
        <div className="flex-1 md:w-1/2 w-3/4 my-6  ">
          <label className="block m-1" htmlFor="description">
            Paragraph 1
          </label>
          <textarea
            onChange={handleChange}
            value={formState.pg1}
            type="text"
            name="pg1"
            id="pg1"
            className="w-full bg-black min-h-[200px] border border-gray-800 rounded-md p-2"
          />
        </div>
        <div className="flex-1 md:w-1/2 w-3/4 my-6  ">
        <label className="block m-1" htmlFor="description">
            Paragraph 2
          </label>
          <textarea
            onChange={handleChange}
            value={formState.pg2}
            type="text"
            name="pg2"
            id="pg2"
            className="w-full bg-black min-h-[200px] border border-gray-800 rounded-md p-2"
          />
          <div className="flex-2 md:w-1/2 w-full my-6">
            <button
              type="submit"
              className="my-6 rounded-lg p-4 bg-blue-400  hover:bg-white hover:text-blue-400"
            >
              Submit
            </button>
            { showSubmitMessage && (
          
            <div className="inline mx-4 text-lg text-center text-green-500 border border-green-500 p-4 rounded-full">
              Submitted!
            </div>
 
       ) }
          </div>
          
        </div>
      </div>
    </form>
  );
}

export default EditBio;
