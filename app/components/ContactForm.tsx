"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  phoneNumber: z.string().min(10, { message: "Bitte geben Sie eine gültige Telefonnummer ein." }),
  pickupAddress: z.string().min(5, { message: "Bitte geben Sie eine Abholadresse ein." }),
  destinationAddress: z.string().min(5, { message: "Bitte geben Sie eine Zieladresse ein." }),
  date: z.string().min(1, { message: "Bitte geben Sie ein Datum ein." }),
  specialRequirements: z.string().optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      pickupAddress: "",
      destinationAddress: "",
      date: "",
      specialRequirements: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      alert("Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen!");
    }, 1000);
  }

  return (
    <section className='bg-background py-20'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <motion.h2
            className='text-3xl font-bold text-foreground sm:text-4xl mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fahrt buchen
          </motion.h2>
          <p className='text-lg text-muted-foreground'>
            Füllen Sie das Formular aus, um eine barrierefreie Fahrt zu buchen. Wir melden uns
            schnellstmöglich bei Ihnen.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form
              action='https://formspree.io/f/xovekglw'
              method='POST'
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'
            >
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Max Mustermann' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input placeholder='max@beispiel.de' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefonnummer</FormLabel>
                    <FormControl>
                      <Input placeholder='+49 123 4567890' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='pickupAddress'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Abholadresse</FormLabel>
                    <FormControl>
                      <Input placeholder='Musterstraße 1, 12345 Berlin' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='destinationAddress'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zieladresse</FormLabel>
                    <FormControl>
                      <Input placeholder='Beispielweg 2, 12345 Berlin' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Datum und Uhrzeit</FormLabel>
                    <FormControl>
                      <Input type='datetime-local' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='specialRequirements'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Besondere Anforderungen</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Rollstuhl, Begleitperson, medizinische Bedürfnisse...'
                        className='min-h-[120px]'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full' disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Absenden"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
