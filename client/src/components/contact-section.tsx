import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useLanguage } from '@/hooks/use-language';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contacts', data);
      toast({
        title: 'Message sent successfully!',
        description: 'We will get back to you within 24 hours.',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again or contact us directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-dark-grey max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-dark-brown mb-8">Send us a message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-grey font-semibold">
                        {t('contact.form.name')}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your full name" 
                          {...field}
                          className="border-dark-grey/20 focus:ring-warm-gold focus:border-transparent"
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
                      <FormLabel className="text-dark-grey font-semibold">
                        {t('contact.form.email')}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field}
                          className="border-dark-grey/20 focus:ring-warm-gold focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-grey font-semibold">
                        {t('contact.form.projectType')}
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-dark-grey/20 focus:ring-warm-gold focus:border-transparent">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential Interior Design</SelectItem>
                          <SelectItem value="commercial">Commercial Space Design</SelectItem>
                          <SelectItem value="furniture">Custom Furniture</SelectItem>
                          <SelectItem value="renovation">Renovation Project</SelectItem>
                          <SelectItem value="consultation">Consultation Only</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-grey font-semibold">
                        {t('contact.form.message')}
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Tell us about your project..."
                          {...field}
                          className="border-dark-grey/20 focus:ring-warm-gold focus:border-transparent resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-dark-brown text-off-white py-4 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  {isSubmitting ? 'Sending...' : t('contact.form.send')}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-dark-brown mb-8">Get in touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-dark-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Email</h4>
                  <p className="text-dark-grey">info@nilsholger.se</p>
                  <p className="text-dark-grey">projects@nilsholger.se</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-dark-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Phone</h4>
                  <p className="text-dark-grey">+46 8 123 456 78</p>
                  <p className="text-dark-grey">+46 70 987 654 32</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-dark-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Showroom</h4>
                  <p className="text-dark-grey">Södermalm 15<br/>118 46 Stockholm<br/>Sweden</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warm-gold rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-dark-brown" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-brown mb-1">Visiting Hours</h4>
                  <p className="text-dark-grey">Mon-Fri: 9:00 - 18:00<br/>Saturday: 10:00 - 16:00<br/>Sunday: By appointment</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Nils Holger showroom location" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
