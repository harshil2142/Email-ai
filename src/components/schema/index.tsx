import { z } from "zod";

export const formSchema = z.object({
  emailSubject : z.string().optional(),
  length: z.string().min(1, 'Length is required'),
  tone: z.string().min(1, 'Tone is required'),
  language: z.string().min(1, 'Language is required'),
});

export const replyMailSchema = z.object({
  replySubject: z.string().optional(),
  receivedEmail : z.string().optional(),
  length: z.string().min(1, 'Length is required'),
  tone: z.string().min(1, 'Tone is required'),
  language: z.string().min(1, 'Language is required'),
});


