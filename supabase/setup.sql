-- Capex Sorter: network lock. Run once in Supabase > SQL Editor.
-- The tool opens only when the visitor's public internet address is in allowed_networks.

create table if not exists public.allowed_networks (
  network  cidr primary key,          -- single address like 203.0.113.7/32, or a range like 203.0.113.0/24
  label    text,                      -- e.g. 'Office WiFi', 'Home WiFi'
  added_at timestamptz not null default now()
);
alter table public.allowed_networks enable row level security;
-- No policies on purpose: nobody can read or change the list through the website.
-- Edit it in Supabase (Table Editor or SQL).

create or replace function public.network_check()
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  h  json;
  ip text;
  ok boolean := false;
begin
  h  := coalesce(current_setting('request.headers', true), '{}')::json;
  ip := trim(coalesce(h->>'cf-connecting-ip', split_part(h->>'x-forwarded-for', ',', 1), h->>'x-real-ip', ''));
  begin
    select exists (select 1 from allowed_networks where ip::inet <<= network) into ok;
  exception when others then
    ok := false;
  end;
  return json_build_object('allowed', ok, 'ip', ip);
end;
$$;

revoke all on function public.network_check() from public;
grant execute on function public.network_check() to anon, authenticated;

-- Approve a network (replace with the address the tool shows you):
-- insert into public.allowed_networks (network, label) values ('203.0.113.7/32', 'Office WiFi');
