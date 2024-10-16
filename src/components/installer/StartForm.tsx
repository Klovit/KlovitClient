"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form schema using Zod
const formSchema = z.object({
  token: z.string().min(1, {
    message: "Token is required.",
  }),
});

export function StartForm() {
  // Initialize the form with react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  });


  return (
    <Form {...form} action="/installer/website" method="GET">
      <form action="/installer/website" className="space-y-8 self-center w-fit">
        <h2 className="text-center text-2xl font-bold">
          Start Installing KlovitClient
        </h2>
        <h1 className="text-md">
          Check your console for a token to start the installation.
        </h1>

        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token</FormLabel>
              <FormControl>
                <Input
                  placeholder="Input your token."
                  {...field}
                  required
                />
              </FormControl>
              <FormDescription>
                This token is necessary to start the installation.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mt-2 rounded-xl">
          Start!
        </Button>
      </form>
    </Form>
  );
}
