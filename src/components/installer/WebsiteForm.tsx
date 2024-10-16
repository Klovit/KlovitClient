"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectValue } from "@/components/ui/select"; // Select from ShadCN UI
import { Checkbox } from "../ui/checkbox";
// Define the form schema using Zod
const formSchema = z.object({
  kcname: z.string().min(1, { message: "Website's name is required." }),
  resource_type: z.string().min(1, { message: "Resource type is required." }),
  website_url: z.string().url({ message: "Invalid URL" }),
  website_description: z.string().min(1, { message: "Description is required." }),
  website_logo: z.string().url({ message: "Invalid URL" }),
  pterodactyl_url: z.string().url({ message: "Invalid URL" }),
  pterodactyl_api: z.string().min(1, { message: "API key is required." }),
  pterodactyl_client_api: z.string().min(1, { message: "Client API key is required." }),
  supabase_url: z.string().url({ message: "Invalid URL" }),
  supabase_key: z.string().min(1, { message: "Supabase key is required." }),
  google_oauth: z.boolean().optional(),
  github_oauth: z.boolean().optional(),
  discord_oauth: z.boolean().optional(),
  token: z.string().min(1, { message: "Token is required." }),
});

export function WebsiteForm({ inputstarttoken }: { inputstarttoken: string }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kcname: "",
      resource_type: "GB", // Default value
      website_url: "",
      website_description: "",
      website_logo: "",
      pterodactyl_url: "",
      pterodactyl_api: "",
      pterodactyl_client_api: "",
      supabase_url: "",
      supabase_key: "",
      google_oauth: false,
      github_oauth: false,
      discord_oauth: false,
      token: inputstarttoken,
    },
  });

  return (
    <Form {...form} method="POST" action="/api/installer/website" className="mr-2 border-2 border-gray-300 dark:border-gray-600 p-8 rounded-lg">
      <form className="space-y-8 ">
        <h1 className="text-center text-2xl font-bold">Step 1 - Website Settings</h1>
        <h2 className="text-center text-xl font-bold">General Settings</h2>

        <FormField
          control={form.control}
          name="kcname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website's Name</FormLabel>
              <FormControl>
                <Input placeholder="ExampleNodes" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField 
  control={form.control}
  name="resource_type"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Resource type</FormLabel>
      <FormControl>
        <Select
          onValueChange={(value) => field.onChange(value)} // ensure onChange gets the value
          value={field.value} // synchronize value with field
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Resource type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="GB">GB</SelectItem>
            <SelectItem value="MB">MB</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>



        <FormField
          control={form.control}
          name="website_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input placeholder="https://client.example.com" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website description</FormLabel>
              <FormControl>
                <Input placeholder="The #1 Hosting service" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website_logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website's Logo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://cdn.example.com/logo.png" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h2 className="text-center text-xl font-bold">Pterodactyl Settings</h2>

        <FormField
          control={form.control}
          name="pterodactyl_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pterodactyl Panel's URL</FormLabel>
              <FormControl>
                <Input placeholder="https://panel.example.com" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pterodactyl_api"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pterodactyl Panel's Admin API</FormLabel>
              <FormControl>
                <Input placeholder="ptla_" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pterodactyl_client_api"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pterodactyl Panel's Client API</FormLabel>
              <FormControl>
                <Input placeholder="ptlc_" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <h2 className="text-center text-xl font-bold">Auth Settings</h2>

        <FormField
          control={form.control}
          name="supabase_url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supabase Auth URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.supabase.co" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="supabase_key"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supabase Anon Key</FormLabel>
              <FormControl>
                <Input placeholder="Anon Key" required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
  control={form.control}
  name="google_oauth"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center mb-1">
        Google OAuth
        <Checkbox
          className="ml-1"
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="github_oauth"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center mb-1">
        Github OAuth
        <Checkbox
          className="ml-1"
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="discord_oauth"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="flex items-center mb-1">
        Discord OAuth
        <Checkbox
          className="ml-1"
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormLabel>
      <FormMessage />
    </FormItem>
  )}
/>




        <input type="hidden" {...form.register("token")} value={inputstarttoken} />

        <Button type="submit" className="mt-2">
          Next
        </Button>
      </form>
    </Form>
  );
}
