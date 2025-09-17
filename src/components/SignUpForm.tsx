import { SignUpSchema } from "../utils/schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export type SignUpInputs = z.infer<typeof SignUpSchema>;

interface SignUpProps {
  onSubmit: SubmitHandler<SignUpInputs>;
  isLoading?: boolean;
}

export default function SignUpForm({ onSubmit, isLoading }: SignUpProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<SignUpInputs>({
        mode: 'onBlur',
        resolver: zodResolver(SignUpSchema)
      })
      console.log();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            {...register('email')}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password *</label>
          <input
            type="password"
            {...register('password')}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input
            type="text"
            {...register('name')}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone *</label>
          <input
            type="phone"
            {...register('phone')}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address *</label>
          <input
            type="address"
            {...register('address')}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full py-2 bg-bg-btn-primary text-white rounded-md hover:bg-orange-700 transition"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
