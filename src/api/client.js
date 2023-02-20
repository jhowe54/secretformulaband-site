
import { createClient } from "@supabase/supabase-js";


const REACT_APP_DB_URL= process.env.REACT_APP_DB_URL
const REACT_APP_SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY

// Create a single supabase client for interacting with your database

export const supabase = createClient(REACT_APP_DB_URL, REACT_APP_SUPABASE_KEY);