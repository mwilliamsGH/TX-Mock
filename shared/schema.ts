import { z } from "zod";

export const QuickFactSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const AmenitySchema = z.object({
  name: z.string(),
  description: z.string(),
  hours: z.string(),
});

export const ResourceSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const EmergencyContactsSchema = z.object({
  securityDesk: z.string(),
  propertyManager: z.string(),
  firePolice: z.string(),
});

export const EmergencyStepSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const EmergencySchema = z.object({
  contacts: EmergencyContactsSchema,
  steps: z.array(EmergencyStepSchema),
});

export const NewsPostSchema = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  body: z.string(),
});

export const BrandSchema = z.object({
  primaryColor: z.string(),
  accentColor: z.string(),
  neutralColor: z.string(),
  fontFamily: z.string(),
});

export const HeroSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  ctaPrimary: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

export const BuildingSchema = z.object({
  name: z.string(),
  address: z.string(),
  yearBuilt: z.number(),
  totalSquareFeet: z.number(),
  floors: z.number(),
  parkingRatio: z.string(),
  owner: z.string(),
  propertyManager: z.string(),
  overview: z.string(),
  brand: BrandSchema,
  hero: HeroSchema,
  quickFacts: z.array(QuickFactSchema),
});

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type QuickFact = z.infer<typeof QuickFactSchema>;
export type Amenity = z.infer<typeof AmenitySchema>;
export type Resource = z.infer<typeof ResourceSchema>;
export type EmergencyContacts = z.infer<typeof EmergencyContactsSchema>;
export type EmergencyStep = z.infer<typeof EmergencyStepSchema>;
export type Emergency = z.infer<typeof EmergencySchema>;
export type NewsPost = z.infer<typeof NewsPostSchema>;
export type Brand = z.infer<typeof BrandSchema>;
export type Hero = z.infer<typeof HeroSchema>;
export type Building = z.infer<typeof BuildingSchema>;
export type ContactFormData = z.infer<typeof ContactFormSchema>;
