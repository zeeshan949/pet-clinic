import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://qlavacvobavotsoiqilo.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYXZhY3ZvYmF2b3Rzb2lxaWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUzMzU3MDMsImV4cCI6MTk5MDkxMTcwM30.XrJY_HFawKdlfC7XjgTUpcXie0eXt2ikcXjcKdWdNFA";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
