import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import LoginForm, { type LoginInputs } from "../components/LoginForm";
import SignUpForm, { type SignUpInputs } from "../components/SignUpForm";
import { AxiosError } from "axios";
import { useState } from "react";
import { signIn, signUp } from "../apis/auth";
import { setToken } from "../utils/token";

export default function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const onLoginSubmit = async (data: LoginInputs) => {
    try {
      setIsLoading(true);
      const res = await signIn(data);
      setToken(res.accessToken);
      console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        // toast.error(error.response?.data.message)
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpSubmit = async (data: SignUpInputs) => {
    console.log(data);
    try {
      setIsLoading(true);
      console.log("data: ", data);
      const res = await signUp(data);
      setToken("dddd111111111111111111111111");
      console.log(res);
    } catch (error) {
      if (error instanceof AxiosError) {
        // toast.error(error.response?.data.message)
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
      <div className="flex w-full min-h-[450px] max-w-sm flex-col gap-6 bg-white py-14 px-6">
        <Tabs defaultValue="login">
          <TabsList className="w-full h-12">
            <TabsTrigger
              value="login"
              className="w-full rounded-none bg-gray-300 text-white data-[state=active]:bg-bg-btn-primary"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="w-full bg-gray-300 rounded-none text-white data-[state=active]:bg-bg-btn-primary"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm
              onSubmit={onLoginSubmit}
              isLoading={isLoading}
              onForgotPasswordClick={() => console.log("forgot password")}
            />
          </TabsContent>
          <TabsContent value="signup">
            <SignUpForm onSubmit={handleSignUpSubmit} isLoading={isLoading} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
