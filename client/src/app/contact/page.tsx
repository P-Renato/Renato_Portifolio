'use client'

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
import API_BASE_URL from "@/lib/api";

const messageFormSchema = z.object({
  username: z.string().min(2, {
    message: "Please insert your username"
  }),
  email: z.string().min(1, {
    message: "Please insert your email"
  }),
  userMessage: z.string().min(2, {
    message: "Write your message here"
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      username: "",
      email: "",
      userMessage: "",
    },
  });

  async function onSubmit(values: z.infer<typeof messageFormSchema>) {
    console.log("Message content:", values);


    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Register failed")
      }
      const data = await response.json();
      console.log("Register successful: ", data)

      form.reset();

      alert("Message sent successfully!")
    } catch (err) {
      console.error("Register failed: ", err);
      alert("Failed to send message. Please try again.");
    }

  }

  return (
    <section className="w-full h-screen flex justify-center items-center bg-zinc-950">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex bg-white h-92 w-[22em] flex-col justify-center items-center p-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your message</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter your message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="cursor-pointer" type="submit">
            Send Message
          </Button>
        </form>
      </Form>
    </section>
  )
}
