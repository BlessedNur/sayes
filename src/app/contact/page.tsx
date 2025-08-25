'use client'
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input 
  
} from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card,  CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { MapPin, Mail, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(6, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // Submit handler
  function onSubmit(values:any) {
    setIsSubmitting(true);
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      form.reset();
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b  ">
      {/* Header Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-center  max-w-2xl mx-auto">
            Get in touch with our team - we're here to help you achieve your performance goals
          </p>
        </div>
      </section>

     

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="">
                  Get in touch with one of our coaches for personalized guidance and support.
                </p>
              </div>

              <Card className=" border-blue-900 backdrop-blur-sm rounded-none shadow-none">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-700 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Address</h3>
                        <p className="">Västanforsgatan 30 A, 214 50 Malmö, Sweden</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-700 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <p className="">info@sayesperformance.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-700 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <p className="">+46 72 333 87 87</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className=" border-blue-900 backdrop-blur-sm rounded-none shadow-none" >
              <CardContent className="pt-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel >Name</FormLabel>
                            <FormControl>
                              <Input 
                              
                                placeholder="Your Name" 
                                {...field} 
                                className=" rounded-none py-6 border-blue-900 text-white "
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel >Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                              
                                placeholder="Your Phone Number" 
                                {...field} 
                                className=" rounded-none  py-6 border-blue-900 text-white "
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel >Email</FormLabel>
                          <FormControl>
                            <Input 
                            
                              placeholder="your.email@example.com" 
                              {...field} 
                              className=" rounded-none border-blue-900 text-white py-6 "
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel >Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message..." 
                              rows={4}
                              {...field} 
                              className="rounded-none  border-blue-900 text-white "
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-none font-medium transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden border-2 border-blue-700/30">
            <iframe
              src="https://maps.google.com/maps?q=V%C3%A4stanforsgatan%2030%20A%2C%20214%2050%20Malm%C3%B6%2C%20Sweden&t=m&z=15&output=embed&iwloc=near"
              title="Sayes Performance Location"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;