import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "vallithippi@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Persist the enquiry
    const { error: insertError } = await supabase
      .from("enquiries")
      .insert({ name, email, phone, message });

    if (insertError) {
      return new Response(
        JSON.stringify({ error: "Failed to save enquiry." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Attempt to send email notification via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      try {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Reyansh Enquiries <onboarding@resend.dev>",
            to: [RECIPIENT_EMAIL],
            subject: `New Enquiry from ${name}`,
            html: `
              <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
                <h2 style="color: #059669;">New Website Enquiry</h2>
                <p>You have received a new enquiry from the Reyansh Renewable Energy Solutions website.</p>
                <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                  <tr><td style="padding: 8px 0; font-weight: bold; color: #374151; width: 100px;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
                  <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
                </table>
                <p style="font-weight: bold; color: #374151;">Message:</p>
                <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-wrap; color: #374151;">${message}</div>
                <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">This enquiry was submitted via the contact form on your website.</p>
              </div>
            `,
          }),
        });

        if (!emailRes.ok) {
          console.error("Resend API error:", await emailRes.text());
        }
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Enquiry received successfully." }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
