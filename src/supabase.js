import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eiwaqhfcnjbwwhgqercq.supabase.co";
const supabaseKey = "sb_publishable_YKShAKY7QY3QACzkI3CadA_YnU1aTjS";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
