'use server';

import type { z } from 'zod';
import { contactFormSchema, type ContactFormState } from '@/schemas/contactFormSchema';


export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    productInterest: formData.get('productInterest'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check the form.",
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would send an email, save to a database, etc.
  // For this example, we'll just log it and simulate success.
  console.log("Contact Form Submission Received:");
  console.log("Name:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Company:", validatedFields.data.company);
  console.log("Product Interest:", validatedFields.data.productInterest);
  console.log("Message:", validatedFields.data.message);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! We will get back to you soon.",
    status: 'success',
  };
}
