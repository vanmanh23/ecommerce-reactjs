import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Email is not valid!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters!" }),
});

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Email is not valid!" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters!" }),
  name: z.string().min(3, { message: "Name must be at least 3 characters!" }),
  phone: z
    .string()
    .nonempty()
    .min(10, { message: "Phone number must be at least 10 characters!" })
    .max(15, { message: "Phone number must be at most 15 characters!" }),
  address: z.string().min(13, { message: "Address must be at least 13 characters!" }),
});
