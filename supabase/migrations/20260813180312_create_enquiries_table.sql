/*
# Create enquiries table for contact form submissions

1. Purpose
   Stores enquiries submitted from the website's contact form so the
   business owner receives them and can follow up. Each row represents
   one customer enquiry with name, email, phone, message, and timestamp.

2. New Tables
   - `enquiries`
     - `id` (uuid, primary key, auto-generated)
     - `name` (text, not null) — customer's full name
     - `email` (text, not null) — customer's email address
     - `phone` (text, not null) — customer's phone number
     - `message` (text, not null) — the enquiry message
     - `is_read` (boolean, default false) — tracks whether the owner has read it
     - `created_at` (timestamptz, default now()) — when the enquiry was submitted

3. Security
   - Enable RLS on `enquiries`.
   - This is a no-auth public website: the contact form runs as `anon`.
     Allow `anon` and `authenticated` to INSERT new enquiries (anyone can submit).
     Do NOT allow anon SELECT/UPDATE/DELETE — enquiries are private to the owner.
     The owner reads/manages enquiries through the Supabase dashboard
     (service role bypasses RLS) or a future authenticated admin view.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a new enquiry
DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies for anon — enquiries are private
-- and managed by the owner via the dashboard or authenticated admin view.
