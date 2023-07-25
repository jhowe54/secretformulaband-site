import { classNames } from "../../utils/classNames";

function ShowForm({ setFormState, handleSubmit, formState, handleDelete }) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      

    return (
        <form
        onSubmit={handleSubmit}
        id="show-form"
        className="rounded-xl md:w-2/3 w-[90%] md:mt-[5%] mt-[10%] mb-24 md:p-12 p-2  mx-auto text-white flex flex-col items-center justify-center md:border"
      >
        <div className="grid md:grid-cols-2 md:grid-rows-none grid-rows-2 w-full ">
          <div className="col col-span-1 flex flex-col justify-start md:items-center items-start ">
            <label className="block m-1" htmlFor="title">
              Title/Name of Show
            </label>
            <input
              onChange={handleChange}
              value={formState.title}
              type="text"
              name="title"
              id="title"
              className={classNames.input}
            />
            <label className="block m-1" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={handleChange}
              value={formState.description}
              type="text"
              name="description"
              id="description"
              className={classNames.input}
            />
            <label className="block m-1" htmlFor="media">
              Image URL <span className="block text-xs text-gray-300 italic">(3:4 aspect ratio preferred)</span>
            </label>
            <input
              onChange={handleChange}
              value={formState.media}
              type="url"
              name="media"
              id="media"
              className={classNames.input}
              placeholder=""
            />
            <label className="block m-1" htmlFor="ticket_link">
              Ticket URL
            </label>
            <input
              onChange={handleChange}
              value={formState.ticket_link}
              type="url"
              name="ticket_link"
              id="ticket_link"
              className={classNames.input}
            />
          </div>
          <div className="col col-span-1 flex flex-col justify-start md:items-center items-start">
            <label className="block m-1" htmlFor="time_start">
              Time start
            </label>
            <input
              onChange={handleChange}
              value={formState.time_start}
              type="time"
              name="time_start"
              id="time_start"
              required
              className={classNames.input}
            />
            <label className="block m-1" htmlFor="time_end">
              Time End
            </label>
            <input
              onChange={handleChange}
              value={formState.time_end}
              type="time"
              name="time_end"
              id="time_end"
              required
              className={classNames.input}
            />
            <label className="block m-1" htmlFor="date">
              Date
            </label>
            <input
              onChange={handleChange}
              value={formState.date}
              type="date"
              name="date"
              id="date"
              className={classNames.input}
            />
           
          </div>
          <div className="w-[100%] col md:col-span-2 col-span-1 flex flex-col justify-center content-center items-center">
          <label className="block mx-1" htmlFor="address">
              Address
            </label>
            <p className="text-sm my-1 text-[#b3b3b3] italic">please use exact format as below:</p>
            <input
              onChange={handleChange}
              value={formState.address}
              type="address"
              name="address"
              id="address"
              placeholder="1504 E Worthington Ave. Charlotte, NC 28203"
              className={classNames.input}
            />
          </div>
         
        </div>
        <button
          type="submit"
          className="text-xl bg p-2 my-2 md:w-[30%] w-[50%] rounded-lg hover:scale-110 duration-500 bg-blue-400  hover:bg-white hover:text-blue-400"
        >
          Submit
        </button>
        { formState.id &&
          <button
          type="button"
          onClick={handleDelete}
          className="text-xl bg p-2 my-2 md:w-[30%] w-[50%] rounded-lg hover:scale-110 duration-500 bg-red-400  hover:bg-white hover:text-blue-400"
        >
          Delete
        </button>
        }
        
      </form>
    )
}

export default ShowForm;