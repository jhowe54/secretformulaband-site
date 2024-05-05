import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../api/client";
import EditShows from "./EditShows";
import AddShows from "./AddShows";
import EditBio from "./EditBio";
function AdminScreen({ session }) {

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showBioEdit, setShowBioEdit] = useState(false);

  const handleSignOut = async () => {
    const data = await supabase.auth.handleSignOut();
  };

  const handleShowAdd = (e) => {
    setShowEdit(false)
    setShowBioEdit(false)
    setShowAdd(true)
  }

  const handleShowEdit = (e) => {
    setShowAdd(false)
    setShowBioEdit(false)
    setShowEdit(true)
  }

  const handleBioEdit = (e) => {
    setShowAdd(false)
    setShowEdit(false)
    setShowBioEdit(true)
  }

  return (
    <div className="flex flex-col my-[10%] items-center bg-black text-white">
        <div className="text-2xl m-4">
        <button onClick={handleShowAdd} className="hover:text-blue-300" style={{color: showAdd ? "rgb(147 197 253)" : "white"}}>New Show</button>
        {" "}
        <p className="inline text-3xl">|</p>
        {" "}
        <button onClick={handleShowEdit} className="hover:text-blue-300" style={{color: showEdit ? "rgb(147 197 253)" : "white"}}>Edit Shows</button>
        {" "}
        <p className="inline text-3xl">|</p>
        {" "}
        <button onClick={handleBioEdit} className="hover:text-blue-300" style={{color: showBioEdit ? "rgb(147 197 253)" : "white"}}>Edit EPK</button>

        </div>
        {showAdd && 
        <AddShows handleSignOut={handleSignOut} />
        }
        {showEdit && 
        <EditShows handleSignOut={handleSignOut} />
        }
        {showBioEdit && 
        <EditBio handleSignOut={handleSignOut} />
        }
      
      
    </div>
  );
}

export default AdminScreen;
