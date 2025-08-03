import z from "zod";

export const PhoneFormSchema = z.object({
  phone: z.string().regex(/^(?:\+98|0)?9\d{9}$/, "Invalid phone number"),
});
