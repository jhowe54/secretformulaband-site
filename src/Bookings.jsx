import { useEffect, useState } from "react";
import {BsArrowLeft} from "react-icons/bs"
import { ReactComponent as SnailLogo } from "./snailfinal.svg";
import {useNavigate } from "react-router";
import {motion, AnimatePresence} from "framer-motion"
import { postBookingDetails} from "./api/api";

function Bookings() {
    const [isBack, setIsBack] = useState(true)
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setBookingDetails({
            ...bookingDetails,
            [e.target.name] : e.target.value
        })
    }

    const initialFormState = {
        firstName: "",
        lastName : "",
        address  : "",
        email    : "",
        phone    : "",
        date     : "2023-01-01",
        time     : "",
        duration : "",
        note     : ""

    }
    const [bookingDetails, setBookingDetails] = useState(initialFormState)

    const  handleSubmit = async (e) => {
        e.preventDefault()
        const data = await postBookingDetails(bookingDetails)
        //TODO: Form submitted screen
    }

    return (        
        <div className="bg-transparent  ">
            <h1 className="text-white w-full mx-auto text-center text-6xl md:mt-6 m-2">Secret Formula Band</h1>
            <h2 className="text-white mx-auto text-center text-2xl md:mt-6 my-4 w-1/3">Book Now</h2>  
            <BsArrowLeft onClick={()=> navigate("/")} color="#ffffff81" className="relative md:left-32 md:top-24 hidden md:visible top-10 hover:fill-[#ffffff81] cursor-pointer" size={50}/>
            <form onSubmit={handleSubmit} id="booking-form-outer"  className="rounded-xl md:w-2/3 w-[90%] md:mt-[10%] mt-[10%] mb-12 p-12  mx-auto text-white flex flex-col justify-start  content-start">
                <p className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:min-w-min">Please fill out the following information for the booking:</p>
                <label className="block m-2" htmlFor="date">Requested Date:</label>
                    <input onChange={handleChange} 
                        type="date" name="date" id="date" 
                        value={bookingDetails.date} 
                        className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full bg-[#1a1a1a]" 
                    />
                <label className="block m-2" htmlFor="time">Requested Time:</label>
                    <input onChange={handleChange} 
                        type="time" name="time" id="time" 
                        value={bookingDetails.time}
                    className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full bg-[#1a1a1a]" 
                    />
                <label className="block m-2" htmlFor="duration">Duration:</label>
                    <select onChange={handleChange} 
                        type="option" max={3} min={1} name="duration" id="duration" 
                        value={bookingDetails.duration} required 
                        className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" >
                            <option value={1}>1 hr</option>
                            <option value={1.5}>1.5 hrs</option>
                            <option value={2}>2 hrs</option>
                            <option value={2.5}>2.5 hrs</option>
                            <option value={3}>3 hrs</option>
                        </select>
                <label className="block m-2" htmlFor="location">Venue Address:</label>
                    <input onChange={handleChange} 
                        type="address" name="address" id="address"
                        value={bookingDetails.address}
                        className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full bg-[#1a1a1a]" 
                    />
                <label className="block m-2" htmlFor="firstName">First Name:</label>
                    <input onChange={handleChange} 
                        type="text" name="firstName" id="firstName" 
                        value={bookingDetails.firstName} className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]"  
                    />
                <label className="block m-2" htmlFor="lastName">Last Name:</label>
                    <input onChange={handleChange} 
                        type="text" name="lastName" id="lastName" 
                        value={bookingDetails.lastName} 
                        className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]"
                    />
                <label className="block m-2" htmlFor="phone">Phone Number:</label>
                    <input onChange={handleChange} 
                        type="tel"   name="phone"     id="phone" 
                        value={bookingDetails.phone} required 
                        className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" 
                    />
                <label className="block m-2" htmlFor="email">Email address:</label>
                    <input onChange={handleChange} 
                        type="email" name="email" id="email" 
                        value={bookingDetails.email} required 
                        className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" />
                <label className="block m-2" htmlFor="notes">Notes:</label>
                    <textarea onChange={handleChange} 
                        type="text" name="note" id="note" placeholder="Any additional information?" 
                        value={bookingDetails.note} 
                        className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2  w-full  bg-[#1a1a1a]" 
                    />
                <button type="submit"  className=" rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 bg-[#1a1a1a] md:w-auto place-self-center">Submit</button>
            </form>
        </div>
        )
}


export default Bookings;