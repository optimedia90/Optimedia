# Newsletter setup (Supabase)

The footer now sends newsletter signups to Supabase. It will not save emails until the Supabase project is configured.

## 1. Create the table
1. Create a project at https://supabase.com/ and open its SQL Editor.
2. Run the SQL in `supabase/newsletter.sql`.
3. In Project Settings → API, copy the Project URL and the publishable/anon key. Never put a service-role key in the frontend.

## 2. Add build environment variables
Configure these variables for the website build in Hostinger (or create a local `.env` file before building):

- `VITE_SUPABASE_URL` = your Supabase Project URL
- `VITE_SUPABASE_ANON_KEY` = your Supabase publishable/anon key

Rebuild and deploy the site after adding the variables. Vite embeds `VITE_*` variables at build time, so a simple page refresh is not enough.

## 3. Verify
Submit an email on the website. The form should show “Thank you for subscribing!”. In Supabase → Table Editor → `newsletter_subscribers`, confirm the email appears. Duplicate email addresses are ignored. The public website has insert-only access and cannot read the subscriber list; manage subscribers in the Supabase dashboard.

## Important
This is a subscriber collection, not an email campaign sender. To send newsletters later, connect an email marketing provider and obtain the required consent/unsubscribe workflow before sending campaigns.
