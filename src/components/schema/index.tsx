import { z } from "zod";

export const formSchema = z.object({
  emailSubject : z.string().min(1, 'Email Subject is required'),
  length: z.string().min(1, 'Length is required'),
  tone: z.string().min(1, 'Tone is required'),
  language: z.string().min(1, 'Language is required'),
});

export const replyMailSchema = z.object({
  replySubject: z.string().min(1, 'Reply Subject is required'),
  receivedEmail : z.string().min(1, 'Received Email is required'),
  length: z.string().min(1, 'Length is required'),
  tone: z.string().min(1, 'Tone is required'),
  language: z.string().min(1, 'Language is required'),
});


