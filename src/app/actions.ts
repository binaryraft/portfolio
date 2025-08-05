"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface SubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitContactForm(values: ContactFormValues): Promise<SubmissionResult> {
  const validatedFields = contactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { 
      success: false,
      error: "Invalid form data. Please check your inputs." 
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just log the data and simulate success.
  console.log("Contact form submitted:", validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential random error
  // if (Math.random() > 0.8) {
  //   return { success: false, error: "A simulated server error occurred." };
  // }

  return { 
    success: true, 
    message: "Form submitted successfully!" 
  };
}
