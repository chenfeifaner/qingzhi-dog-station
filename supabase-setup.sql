-- Run this once in the Supabase SQL Editor.
-- This creates the public resource table, storage bucket, and policies used by
-- the GitHub Pages version of Qingzhi Dog Resource Hub.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('resource-files', 'resource-files', true, 104857600, null)
on conflict (id) do update set
  public = true,
  file_size_limit = excluded.file_size_limit;

create table if not exists public.resource_items (
  id text primary key,
  name text not null,
  category text default 'Other',
  tags text[] not null default '{}',
  description text default '',
  kind text default 'other',
  mime text default 'application/octet-stream',
  size bigint default 0,
  original_size bigint default 0,
  file_url text not null,
  file_path text not null,
  uploaded_at timestamptz default now()
);

alter table public.resource_items
  add column if not exists original_size bigint default 0;

alter table public.resource_items enable row level security;

grant usage on schema public to anon;
grant usage on schema public to authenticated;
grant select, insert, update, delete on public.resource_items to anon;
grant select, insert, update, delete on public.resource_items to authenticated;

drop policy if exists "Public read resource items" on public.resource_items;
create policy "Public read resource items"
on public.resource_items for select
using (true);

drop policy if exists "Public insert resource items" on public.resource_items;
create policy "Public insert resource items"
on public.resource_items for insert
with check (true);

drop policy if exists "Public update resource items" on public.resource_items;
create policy "Public update resource items"
on public.resource_items for update
using (true)
with check (true);

drop policy if exists "Public delete resource items" on public.resource_items;
create policy "Public delete resource items"
on public.resource_items for delete
using (true);

drop policy if exists "Public read resource files" on storage.objects;
create policy "Public read resource files"
on storage.objects for select
using (bucket_id = 'resource-files');

drop policy if exists "Public insert resource files" on storage.objects;
create policy "Public insert resource files"
on storage.objects for insert
with check (bucket_id = 'resource-files');

drop policy if exists "Public update resource files" on storage.objects;
create policy "Public update resource files"
on storage.objects for update
using (bucket_id = 'resource-files')
with check (bucket_id = 'resource-files');

drop policy if exists "Public delete resource files" on storage.objects;
create policy "Public delete resource files"
on storage.objects for delete
using (bucket_id = 'resource-files');
