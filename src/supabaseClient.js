import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ztsyxozochllygungskx.supabase.co' 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0c3l4b3pvY2hsbHlndW5nc2t4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4Mzc5MzEsImV4cCI6MjA4NTQxMzkzMX0.Aju0Gtnx4b4AzKT-Ok9WXdbVO2KSBp1LIPMlBuEp0nE'

export const supabase = createClient(supabaseUrl, supabaseKey)