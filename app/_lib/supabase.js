import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_url,
  process.env.SUPABASE_key
);
