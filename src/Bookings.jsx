import { useEffect, useState } from "react";


function Bookings() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }

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
        date     : "2023-12-01",
        time     : "",
        note     : ""

    }

    const [bookingDetails, setBookingDetails] = useState(initialFormState)
    return(
        
        <div className="bg-transparent  ">
            <h1 className="text-white w-full mx-auto text-center text-6xl md:mt-6 m-2">Secret Formula Band</h1>
            <h2 className="text-white mx-auto text-center text-2xl md:mt-6 my-4 w-1/3">Book Now</h2>
            <form onSubmit={handleSubmit} id="booking-form-outer"  className="rounded-xl md:w-2/3 w-[90%] md:mt-[10%] mt-[10%] mb-12 p-12  mx-auto text-white flex flex-col justify-start  content-start">
                <p className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:min-w-min">Please fill out the following information for the booking:</p>
                <label className="block m-2" htmlFor="date">Requested Date:</label>
                <input onChange={handleChange} type="date" className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full  bg-[#1a1a1a]" name="date" id="date"value={bookingDetails.date} />
                <label className="block m-2" htmlFor="time">Requested Time:</label>
                <input onChange={handleChange} type="time" className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" name="time" id="time" value={bookingDetails.time} />
                <label className="block m-2" htmlFor="location">Venue Address: </label>
                <input onChange={handleChange} type="address" className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full  bg-[#1a1a1a]" name="address" id="address" value={bookingDetails.address} />
                <label className="block m-2" htmlFor="firstName">First Name:</label>
                <input onChange={handleChange} type="text" className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" name="firstName" id="firstName"  value={bookingDetails.firstName} />
                <label className="block m-2" htmlFor="lastName">Last Name:</label>
                <input onChange={handleChange} type="text" className="rounded-md  placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" name="lastName" id="lastName" value={bookingDetails.lastName} />
                <label className="block m-2" htmlFor="phone">Phone Number:</label>
                <input onChange={handleChange} required type="tel" className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" name="phone" id="phone" value={bookingDetails.phone} />
                <label className="block m-2" htmlFor="email">Email address:</label>
                <input onChange={handleChange} required type="email" className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 md:w-1/3 w-full   bg-[#1a1a1a]" name="email" id="email" value={bookingDetails.email} />
                <label className="block m-2" htmlFor="notes">Notes:</label>
                <textarea onChange={handleChange} type="text"  className="rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2  w-full  bg-[#1a1a1a]" name="note" id="note" placeholder="Any additional information?" value={bookingDetails.note} />
                <button className=" rounded-md placeholder-[#ffffff81] mb-4 mx-2 p-2 bg-[#1a1a1a] md:w-auto place-self-center" type="submit">Submit</button>
            </form>
        </div>
        )
}


export default Bookings;