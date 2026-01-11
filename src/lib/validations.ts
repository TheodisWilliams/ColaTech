import { z } from 'zod'

export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  address: z.string().optional(),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  notes: z.string().optional(),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
