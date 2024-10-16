import { s as supabase } from '../../../chunks/supabase_Cat3wBav.mjs';
import { c as config } from '../../../chunks/config_CuAv1651.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const auth = [];
  if (config.auth.supabase.oauth2.google.enabled) {
    auth.push(...[
      "google"
    ]);
  }
  if (config.auth.supabase.oauth2.discord.enabled) {
    auth.push(...[
      "discord"
    ]);
  }
  if (config.auth.supabase.oauth2.github.enabled) {
    auth.push(...[
      "github"
    ]);
  }
  const validProviders = auth;
  if (provider && validProviders.includes(provider)) {
    const { data: data2, error: error2 } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: config.website.url + `/api/auth/callback`
      }
    });
    if (error2) {
      cookies.delete("sb-access-token", {
        path: "/"
      });
      cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return redirect("/signin");
    }
    if (error2) {
      return redirect(`/signin?error=${error2.message}`);
    }
    return redirect(data2.url);
  }
  if (!email || !password) {
    return redirect(`/signin?error=Email and password are required`);
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return redirect(`/signin?error="${error.message}"`);
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
