"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const initState = {
  name: "",
  email: "",
  message: "",
};

const Feedback = () => {
  const [data, setData] = useState(initState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    const { name, email, message } = data;

    // Send data to API route
    const env = process.env.NODE_ENV;
    if (env == "development") {
      const res = await fetch("http://localhost:3000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      const result = await res.json();
      console.log(result);
    } else if (env == "production") {
      const res = await fetch(
        "https://culinarycompass.vercel.app/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      const result = await res.json();
      console.log(result);
    } else {
      throw Error(`Page is in ${env} mode. This case is not handled.`);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const canSave = [...Object.values(data)].every(Boolean);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col mx-auto max-w-3xl p-6'
    >
      <h1 className='text-4xl mb-4'>Contact Us</h1>

      <label className='text-2xl mb-1' htmlFor='name'>
        Name
      </label>
      {/* prettier-ignore */}
      <input
        className='p-3 mb-6 text-2xl rounded-2xl text-black'
        type='text'
        id='name'
        name='name'
        placeholder='Your name'
        pattern="([A-Z])[\w+.]{1,}"
        value={data.name}
        onChange={handleChange}
        autoFocus
      />

      <label className='text-2xl mb-1' htmlFor='email'>
        Email:
      </label>
      {/* prettier-ignore */}
      <input
        className='p-3 mb-6 text-2xl rounded-2xl text-black'
        type='email'
        id='email'
        name='email'
        placeholder='name@yoursite.com'
        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        value={data.email}
        onChange={handleChange}
      />

      <label className='text-2xl mb-1' htmlFor='message'>
        Message:
      </label>
      <textarea
        className='p-3 mb-6 text-2xl rounded-2xl text-black'
        id='message'
        name='message'
        placeholder='Your message here...'
        rows={5}
        cols={33}
        value={data.message}
        onChange={handleChange}
      />

      <button
        className='p-3 mb-6 text-2xl rounded-2xl text-blac border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg:slate-300 disabled:hidden'
        disabled={!canSave}
      >
        Submit
      </button>
    </form>
  );
};

export default Feedback;
