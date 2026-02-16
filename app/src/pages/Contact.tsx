import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AnimatedSection } from '@/components/ui-custom/AnimatedSection';

const contactReasons = [
  { value: 'opportunity', label: 'Job Opportunity' },
  { value: 'collaboration', label: 'Collaboration' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'other', label: 'Other' },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    description: 'View my code',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@marina.com',
    description: 'hello@marina.com',
  },
];

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="py-20 lg:py-32">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Message Sent!
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', reason: '', message: '' });
              }}
            >
              Send another message
            </Button>
          </AnimatedSection>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-4">
            Let's Connect
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities in data, AI,
            product, and health tech. Reach out and let's start a conversation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Contact</Label>
                <Select
                  value={formData.reason}
                  onValueChange={(value) => handleChange('reason', value)}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactReasons.map((reason) => (
                      <SelectItem key={reason.value} value={reason.value}>
                        {reason.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, opportunity, or question..."
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  rows={6}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto rounded-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={200} className="lg:col-span-2">
            <div className="space-y-8">
              {/* Social Links */}
              <div>
                <h3 className="font-display font-semibold text-foreground mb-4">
                  Connect Online
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{link.label}</div>
                        <div className="text-sm text-muted-foreground">{link.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="p-6 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Prefer a Call?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a 30-minute call to discuss opportunities or just chat.
                    </p>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Schedule a call
                    </Button>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="text-sm text-muted-foreground">
                <p>
                  I typically respond within 24-48 hours. For urgent inquiries,
                  please reach out via LinkedIn.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
