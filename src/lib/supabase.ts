import { createClient } from "@supabase/supabase-js";
import * as fs from 'fs';
import * as yaml from 'js-yaml';

const configcont = fs.readFileSync('config.yml', 'utf8');
const config = yaml.load(configcont);

export const supabase = createClient(
  config.auth.supabase.supabase_url,
  config.auth.supabase.supabase_anon_key,
  {
    auth: {
      flowType: "pkce",
    },
  },
);