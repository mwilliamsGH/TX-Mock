import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { ContactFormSchema, type ContactFormData } from "@shared/schema";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link
      const subject = encodeURIComponent(`Contact from ${data.name} - Riverview Commons`);
      const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `);
      
      const mailtoLink = `mailto:pm@riverview-commons.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Message sent",
        description: "Your email client has been opened with your message.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-accent"
                />
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
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-accent"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea 
                  {...field}
                  rows={4}
                  placeholder="How can we help you?"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-accent resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-accent text-white hover:bg-accent/90"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
