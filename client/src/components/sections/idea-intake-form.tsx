import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertIdeaSubmissionSchema, type InsertIdeaSubmission } from "@shared/schema";
import { CheckCircle, AlertTriangle, Loader2 } from "lucide-react";

export default function IdeaIntakeForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertIdeaSubmission>({
    resolver: zodResolver(insertIdeaSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      idea: "",
      aiType: "",
      timeline: "",
      package: "",
      additional: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertIdeaSubmission) => {
      return apiRequest('POST', '/api/idea-submissions', data);
    },
    onSuccess: () => {
      setSubmitStatus('success');
      form.reset();
      toast({
        title: "Success!",
        description: "Thank you! We'll review your idea and get back to you within 24 hours.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/idea-submissions'] });
    },
    onError: (error) => {
      setSubmitStatus('error');
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    },
  });

  const onSubmit = (data: InsertIdeaSubmission) => {
    setSubmitStatus('idle');
    submitMutation.mutate(data);
  };

  return (
    <section id="idea-intake-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
              Share Your <span className="text-gold">Vision</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Tell us about your idea and we'll confirm scope before work begins. No obligation.
            </p>
          </div>
          
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="bg-card-bg rounded-2xl p-8 border border-border-subtle space-y-6"
              data-testid="idea-intake-form"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">What's your name? *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your full name" 
                        className="bg-background border-border-subtle form-input"
                        data-testid="input-name"
                        {...field} 
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
                    <FormLabel className="text-sm font-medium text-foreground">Email address *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="your@email.com" 
                        className="bg-background border-border-subtle form-input"
                        data-testid="input-email"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="idea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Describe your idea *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What problem does your idea solve? Who is your target audience? What are the main features you envision?"
                        className="bg-background border-border-subtle form-input resize-y"
                        rows={4}
                        data-testid="textarea-idea"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="aiType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">What type of AI integration interests you?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background border-border-subtle form-input" data-testid="select-ai-type">
                          <SelectValue placeholder="Select an option..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nlp">Natural Language Processing (ChatGPT-like)</SelectItem>
                        <SelectItem value="ml">Machine Learning / Prediction</SelectItem>
                        <SelectItem value="vision">Computer Vision / Image Recognition</SelectItem>
                        <SelectItem value="automation">Automation / Workflow AI</SelectItem>
                        <SelectItem value="other">Other / Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">What's your timeline? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        data-testid="radio-timeline"
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent">ASAP (within 1 week)</Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label htmlFor="normal">2-3 weeks is fine</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Which package interests you? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                        data-testid="radio-package"
                      >
                        <div className="flex items-start space-x-3 p-4 border border-border-subtle rounded-lg hover:border-gold/50 transition-colors">
                          <RadioGroupItem value="prototype" id="prototype" className="mt-1" />
                          <div>
                            <Label htmlFor="prototype" className="font-semibold">Prototype Package - $499</Label>
                            <div className="text-sm text-foreground/70">Basic MVP with documentation and roadmap</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border border-border-subtle rounded-lg hover:border-gold/50 transition-colors">
                          <RadioGroupItem value="pro" id="pro" className="mt-1" />
                          <div>
                            <Label htmlFor="pro" className="font-semibold">Pro Package - $899</Label>
                            <div className="text-sm text-foreground/70">Everything above + revision + walkthrough call</div>
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additional"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Additional details (optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any specific requirements, inspirations, or constraints we should know about?"
                        className="bg-background border-border-subtle form-input resize-y"
                        rows={3}
                        data-testid="textarea-additional"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Form status messages */}
              {submitStatus === 'success' && (
                <div className="bg-gold/10 border border-gold text-gold p-4 rounded-lg" data-testid="form-success">
                  <CheckCircle className="inline w-5 h-5 mr-2" />
                  Thank you! We'll review your idea and get back to you within 24 hours to confirm scope and next steps.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg" data-testid="form-error">
                  <AlertTriangle className="inline w-5 h-5 mr-2" />
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-gold-gradient text-background py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 disabled:opacity-50"
                disabled={submitMutation.isPending}
                data-testid="button-submit-form"
              >
                {submitMutation.isPending && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                {submitMutation.isPending ? "Submitting..." : "Submit Your Idea"}
              </Button>
              
              <p className="text-sm text-foreground/60 text-center">
                By submitting, you agree to our{" "}
                <a href="#" className="text-gold hover:underline">Privacy Policy</a> and{" "}
                <a href="#" className="text-gold hover:underline">Terms of Service</a>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
