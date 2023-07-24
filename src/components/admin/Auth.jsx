import React, { useState } from "react";
import { supabase } from "../../api/client";
import { Auth } from "@supabase/auth-ui-react";
import { classNames } from "../../utils/classNames";

const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log(JSON.stringify(data));
      if (error) {
        throw error;
      }
    } catch (error) {
      setLoginError(error);
    }
  };

  return (
    <div>
      <form
        className="rounded-xl md:w-2/3 w-[90%] md:mt-[5%] mt-[10%] mb-24 p-12  mx-auto text-white flex flex-col items-center justify-center"
        onSubmit={handleLogin}
      >
        <h2 className="my-4">Login</h2>
        <input
          onFocus={(e) => setLoginError(null)}
          className={classNames.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          onFocus={(e) => setLoginError(null)}
          className={classNames.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError && (
          <div className=" rounded-md border border-red-500 p-2 my-2 text-red-500">
            {loginError.message}
          </div>
        )}
        <button
          className="text-xl bg p-2 my-6 md:w-[30%] w-[50%] rounded-lg hover:scale-110 duration-500 bg-blue-400  hover:bg-white hover:text-blue-400 "
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Authenticate;
