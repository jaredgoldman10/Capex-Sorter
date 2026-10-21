// Capex Sorter settings. Safe to publish: the anon key is designed to be public.
// Never put the service_role key here.
window.CAPEX_CONFIG = {
  supabaseUrl: "https://YOUR-PROJECT.supabase.co",
  supabaseAnonKey: "YOUR-ANON-KEY",
  // Only these addresses get in (in addition to being invited in Supabase).
  allowedEmails: ["YOUR-NAME@YOUR-WINGATE-DOMAIN"],
  // Optional: allow a whole domain instead, e.g. ["wingate-domain.com"]
  allowedDomains: []
};
