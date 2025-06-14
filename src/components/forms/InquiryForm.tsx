'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, submitContactForm, type ContactFormState } from '@/actions/contactActions';
import type { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import productData from '@/data/products';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

export default function InquiryForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      productInterest: '',
      message: '',
    },
  });
  
  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
        className: "bg-green-500 text-white",
        duration: 5000,
      });
      form.reset(); // Reset form fields on successful submission
    } else if (state.status === 'error' && state.message && !state.errors) {
       toast({
        variant: "destructive",
        title: "Submission Error",
        description: state.message,
      });
    }
  }, [state, form, toast]);


  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" {...form.register('name')} placeholder="e.g. John Doe" aria-required="true" />
          {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...form.register('email')} placeholder="e.g. john.doe@example.com" aria-required="true" />
          {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company (Optional)</Label>
        <Input id="company" {...form.register('company')} placeholder="e.g. Acme Corporation" />
        {state.errors?.company && <p className="text-sm text-destructive mt-1">{state.errors.company[0]}</p>}
      </div>

      <div>
        <Label htmlFor="productInterest">Product of Interest (Optional)</Label>
        <Select name="productInterest" onValueChange={(value) => form.setValue('productInterest', value)}>
          <SelectTrigger id="productInterest">
            <SelectValue placeholder="Select a product..." />
          </SelectTrigger>
          <SelectContent>
            {productData.products.map(product => (
              <SelectItem key={product.id} value={product.name}>{product.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.productInterest && <p className="text-sm text-destructive mt-1">{state.errors.productInterest[0]}</p>}
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...form.register('message')} placeholder="Your inquiry or message..." rows={5} aria-required="true" />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
