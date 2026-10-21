# Capex Sorter

Sorts general ledger lines onto the capital improvements (capex) tab of a capital planning workbook. It learns from how past years' GL lines landed on that tab.

- Workbooks are read in the browser and never uploaded anywhere. The repo contains no property data.
- It only opens on approved WiFi networks, and sign-in is invite-only and limited to the addresses in `config.js`.
- Corrections you confirm are saved only in your browser, encrypted, per account. Use **Back up memory** to keep a copy.

## One-time setup (about 10 minutes)

1. Create a **new** Supabase project at supabase.com, kept separate from other projects.
2. **Authentication > Sign In / Providers**: turn **off** "Allow new users to sign up". Leave Email on.
3. **Authentication > URL Configuration**: set Site URL to `https://jaredgoldman10.github.io/Capex-Sorter/` and add the same address under Redirect URLs.
4. **Authentication > Users > Invite user**: invite your Wingate email.
5. **Project Settings > API**: copy the Project URL and the anon public key into `config.js`, and put your Wingate email in `allowedEmails`.
6. **SQL Editor**: paste and run `supabase/setup.sql`. This creates the network lock.
7. Open the site from the office WiFi. It shows "Not on an approved network" with this network's address. Approve it in the SQL Editor:
   `insert into public.allowed_networks (network, label) values ('THAT.ADDRESS/32', 'Office WiFi');`
   Reload, and the sign-in form appears.
8. Use "Email me a sign-in link". Once in, click **Set password** so later sign-ins don't need an email.

## Adding another network later (e.g. home)

Open the site on that WiFi, note the address it shows, and run the same `insert` with a new label. To remove one: `delete from public.allowed_networks where label = 'Home WiFi';`

The lock goes by the network's public internet address, which is what a website can see. Business connections usually keep the same address. Home internet addresses can change every so often; if the tool suddenly says the network isn't approved, add the new address. VPNs and phone hotspots count as different networks.

## Use

Drop the workbook in. The tool finds the master capex tab and the year GL tabs. Review the flagged lines, confirm, then use **Totals by master row** (or the download) to fill in the master tab.

Signs out after 15 minutes idle.
