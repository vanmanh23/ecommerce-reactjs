import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { loginSchema } from "../utils/schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export type LoginInputs = z.infer<typeof loginSchema>;

interface Props {
  onSubmit: SubmitHandler<LoginInputs>;
  onForgotPasswordClick: () => void;
  isLoading?: boolean;
}

export default function LoginForm({
  onSubmit,
  onForgotPasswordClick,
  isLoading,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema)
  })
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('email')}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register('password')}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
          >
            Log in
          </button>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Remember me</span>
          </label>
        </div>
        <div>
          <p className="text-sm text-blue-600 hover:underline" onClick={onForgotPasswordClick}>
            Lost your password?
          </p>
        </div>
      </form>
    </div>
  );
}
