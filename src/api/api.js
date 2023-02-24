import { supabase } from "./client";

async function postBookingDetails(bookingDetails) {
  try {
    // eslint-disable-next-line no-unused-vars
    const { data } = await supabase.from("bookings").insert({
      firstName: bookingDetails.firstName,
      lastName : bookingDetails.lastName,
      address  : bookingDetails.address,
      email    : bookingDetails.email,
      phone    : bookingDetails.phone,
      date     : bookingDetails.date,
      time     : bookingDetails.time,
      duration : bookingDetails.duration,
      note     : bookingDetails.note,
    });
  } catch (err) {
    console.log(err);
  }
}

async function loadSchedule() {
  const {data} = await supabase
  .from('shows')
  .select('*')
  .order('date', {ascending: true})
  return data;
  
}

export { postBookingDetails, loadSchedule };
