import { useNavigate } from "react-router";
function Submitted() {
    const navigate = useNavigate()
  return (
    <div className=" form-background text-white mx-auto md:w-[40%] w-[80%] p-6 rounded-md shadow-md absolute right-0 left-0 border border-red-500 flex flex-col justify-center items-center top-[30%]">
      <h4 className="text-xl">Successfully submitted</h4>
      <button onClick={() => navigate("/")} className="bg p-4 my-6 rounded-lg bg-blue-400 hover:bg-white hover:text-blue-400">Homepage</button>
    </div>
  );
}


export default Submitted;