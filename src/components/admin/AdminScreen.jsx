import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../api/client";
import EditShows from "./EditShows";
import AddShows from "./AddShows";
function AdminScreen({ session }) {

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false)

  const handleSignOut = async () => {
    const data = await supabase.auth.handleSignOut();
  };

  const handleShowAdd = (e) => {
    setShowEdit(false)
    setShowAdd(true)
  }

  const handleShowEdit = (e) => {
    setShowAdd(false)
    setShowEdit(true)
  }

  return (
    <div className="flex flex-col my-[10%] items-center bg-black text-white">
        <div className="text-2xl m-4">
        <button onClick={handleShowAdd} className="hover:text-blue-300" style={{color: showAdd ? "rgb(147 197 253)" : "white"}}>New Show</button>
        {" "}
        <p className="inline text-3xl">|</p>
        {" "}
        <button onClick={handleShowEdit} className="hover:text-blue-300" style={{color: showEdit ? "rgb(147 197 253)" : "white"}}>Edit Shows</button>

        </div>
        {showAdd && 
        <AddShows handleSignOut={handleSignOut} />
        }
        {showEdit && 
        <EditShows handleSignOut={handleSignOut} />
        }
      
      
    </div>
  );
}

export default AdminScreen;
