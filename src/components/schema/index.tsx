import { z } from "zod";

export const formSchema = z.object({
  sender: z.string().min(1, 'Sender is required'),
  receiver: z.string().min(1, 'Receiver is required'),
  purpose: z.string().min(1, 'Purpose is required'),
  length: z.string().min(1, 'Length is required'),
  tone: z.string().min(1, 'Tone is required'),
  language: z.string().min(1, 'Language is required'),
});

