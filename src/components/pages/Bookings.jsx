import { useState } from "react";
import {useNavigate } from "react-router";
import { postBookingDetails} from "../../api/api";
import { classNames } from "../../utils/classNames";
function Bookings() {
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault()
        setBookingDetails({
            ...bookingDetails,
            [e.target.name] : e.target.value
        })
    }

    const initialFormState = {
        
        name: " ",
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
        await postBookingDetails(bookingDetails)
        navigate("/submitted")
    }

    return (
      <div className="bg-transparent   ">
        <h2 className="text-white mx-auto text-center text-2xl md:mt-6 my-4 w-1/3">
          Book Now
        </h2>
        <form
          onSubmit={handleSubmit}
          id="booking-form-outer"
          className="rounded-xl md:w-2/3 w-[90%] md:mt-[5%] mt-[10%] mb-24 p-12  mx-auto text-white flex flex-col items-center justify-center"
        >
          <p className="rounded-md flex-1  placeholder-[#ffffff81] mb-4 md:min-w-min">
            Please fill out the form below. We'll be in touch soon!
          </p>
          <div className="grid md:grid-cols-2 md:grid-rows-none grid-rows-2 w-full ">
            <div className="col col-span-1 flex flex-col justify-start md:items-center items-start ">
            <label className="block m-1" htmlFor="date">
            Requested Date:
          </label>
          <input
            onChange={handleChange}
            value={bookingDetails.date}
            type="date"
            name="date"
            id="date"
            
            className={classNames.input}
          />
          <label className="block m-1" htmlFor="time">
            Requested Time:
          </label>
          <input
            onChange = {handleChange}
            value    = {bookingDetails.time}
            type     = "time"
            name     = "time"
            id       = "time"
            
            className={classNames.input}
          />
          <label className="block m-1" htmlFor="duration">
            Duration:
          </label>
          <select
            onChange  = {handleChange}
            value     = {bookingDetails.duration}
            type      = "option"
            name      = "duration"
            id        = "duration"
            max       = {3}
            min       = {1}
            className = {classNames.input}
            required
          >
            <option value={1}>1 hr</option>
            <option value={1.5}>1.5 hrs</option>
            <option value={2}>2 hrs</option>
            <option value={2.5}>2.5 hrs</option>
            <option value={3}>3 hrs</option>
          </select>
          <label className="block m-1" htmlFor="location">
            Venue Address:
          </label>
          <input
            onChange  = {handleChange}
            value     = {bookingDetails.address}
            type      = "address"
            name      = "address"
            id        = "address"
            className = {classNames.input}
            placeholder=""
          />
            </div>
          <div className="col col-span-1 flex flex-col justify-start md:items-center items-start">
          <label className="block m-1" htmlFor="name">
            Name:
          </label>
          <input
            onChange  = {handleChange}
            value     = {bookingDetails.name}
            type      = "text"
            name      = "name"
            id        = "name"
            className = {classNames.input}
          />
          <label className="block m-1" htmlFor="phone">
            Phone Number:
          </label>
          <input
            onChange = {handleChange}
            value    = {bookingDetails.phone}
            type     = "tel"
            name     = "phone"
            id       = "phone"
            required
            className={classNames.input}
          />
          <label className="block m-1" htmlFor="email">
            Email address:
          </label>
          <input
            onChange = {handleChange}
            value    = {bookingDetails.email}
            type     = "email"
            name     = "email"
            id       = "email"
            required
            className={classNames.input}
          />
          <label className="block m-1" htmlFor="notes">
            Notes:
          </label>
          <textarea
            onChange    = {handleChange}
            value       = {bookingDetails.note}
            type        = "text"
            name        = "note"
            id          = "note"
            placeholder = "Any additional information?"
            className   = {classNames.input}
          />
          </div>
         
          </div>
          <button type="submit" className='text-xl bg p-2 my-6 md:w-[30%] w-[50%] rounded-lg hover:scale-110 duration-500 bg-blue-400  hover:bg-white hover:text-blue-400'>
            Submit
          </button>
          
        </form>
      </div>
    );
}


export default Bookings;