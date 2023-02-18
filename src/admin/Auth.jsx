import { useState } from "react";
import { BiCircle } from "react-icons/bi";
import { FaSpinner } from "react-icons/fa";
import { supabase } from "../api/client";
export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data, error } = await supabase.from("silly").select("id").eq("captain", password)
      console.log("DATA", data)
      if (error) {
        console.log(error)
        throw error
      }
    
    } catch (error) {
      console.log(error)
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" text-white text-2xl md:h-80 mx-auto flex items-center h-3/4">
      {loading ? (
        <div className="fixed top-1/3 right-1/2 left-1/2 bottom-0">
          <FaSpinner size={100} className="animate-spin ease-in-out" />
        </div>
      ) : (
        <form
          className="flex  items-center justify-center md:w-[60%] w-[80%] mx-auto  md:p-6 p-0 bg h-1/2 md:form-background"
          onSubmit={handleLogin}
        >
          <div className="grid grid-cols-3 grid-rows-3 gap-20 md:w-[60%]">
          
            <label className="col col-span-1" htmlFor="Email">Email</label>
            <input
              id="Email"
              className="col col-span-2 rounded-md"
              type="Email"
              onChange={(e) => setName(e.target.value)}
            />
          

          
            <label className="col col-span-1 " htmlFor="password">Password</label>
            <input
              id="password"
              className="col col-span-2  rounded-md"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
         
         
            <button className="col col-span-3 special-button" aria-live="polite">
              {" "}
              submit
            </button>
          
          </div>
        </form>
      )}
    </div>
  );
}
