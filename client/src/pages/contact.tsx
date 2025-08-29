import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactSchema.extend({
  subject: z.string().min(1, "Please select a subject"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-16 min-h-screen" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-20 bg-muted" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Have questions or want to learn more about our work? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card" data-testid="contact-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Office Address</h3>
                    <p className="text-muted-foreground">
                      123 Service Lane, Gandhi Nagar<br />
                      New Delhi - 110001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone & WhatsApp</h3>
                    <p className="text-muted-foreground">
                      +91 9876543210<br />
                      +91 9876543211
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@sevafoundation.org<br />
                      volunteer@sevafoundation.org
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-border" data-testid="contact-social">
                <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid="social-link-facebook"
                  >
                    <span className="sr-only">Facebook</span>
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    data-testid="social-link-twitter"
                  >
                    <span className="sr-only">Twitter</span>
                    <span className="text-sm font-bold">t</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    data-testid="social-link-instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <span className="text-sm font-bold">i</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                    data-testid="social-link-linkedin"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <span className="text-sm font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-muted rounded-xl p-8" data-testid="contact-form-section">
              <h3 className="text-2xl font-bold text-foreground mb-6" data-testid="contact-form-title">
                Send us a Message
              </h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="First Name"
                      {...form.register("firstName")}
                      data-testid="input-first-name"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-first-name">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Last Name"
                      {...form.register("lastName")}
                      data-testid="input-last-name"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-sm text-destructive mt-1" data-testid="error-last-name">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    {...form.register("email")}
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1" data-testid="error-email">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Select onValueChange={(value) => form.setValue("subject", value)}>
                    <SelectTrigger data-testid="select-subject">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                      <SelectItem value="donation">Donation Questions</SelectItem>
                      <SelectItem value="partnership">Partnership Proposal</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                    </SelectContent>
                  </Select>
                  {form.formState.errors.subject && (
                    <p className="text-sm text-destructive mt-1" data-testid="error-subject">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    {...form.register("message")}
                    data-testid="textarea-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-destructive mt-1" data-testid="error-message">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={contactMutation.isPending}
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
