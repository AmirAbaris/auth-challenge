import z from "zod";
import { PhoneFormSchema } from "../schemas/phone.schema";


export type IranPhoneSchemaType = z.infer<typeof PhoneFormSchema>;
