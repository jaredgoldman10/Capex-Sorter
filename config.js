// Capex Sorter settings. Safe to publish: the anon key is designed to be public.
// Never put the service_role key here.
window.CAPEX_CONFIG = {
  supabaseUrl: "https://tacyjrjhhsiqpjnmipfx.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhY3lqcmpoaHNpcXBqbm1pcGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2MDQyMTcsImV4cCI6MjEwODE4MDIxN30.ovGerlsyb5y_5unQJZWOW74YdxOcRAZmcgh40hfVxWU",
  // Only these addresses get in (in addition to being invited in Supabase).
  allowedEmails: ["jgoldman@wingatecompanies.com"],
  // Optional: allow a whole domain instead, e.g. ["wingatecompanies.com"]
  allowedDomains: []
};
