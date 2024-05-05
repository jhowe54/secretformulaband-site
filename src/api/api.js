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
  console.log("schedule", data)
  return data;
}


async function loadSelectedEPKData(row) {
  const {data} = await supabase
  .from('epk')
  .select('*')
  .eq("description", row)
  console.log("API data", data)
  return data[0];
}

export { postBookingDetails, loadSchedule, loadSelectedEPKData };
