import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Spinner from '../../utils/Spinner';
import { setAuthUser, setUserToken } from '../../utils/hooks/AuthCookiesManager';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset
    } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },    
    });

    const _handleSubmit = async (request) => {
        if (!trigger()) return;
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: request.email, password: request.password }),
            });
            if (!response.ok) {
                setError(await response.text()) 
                setTimeout(() => {
                    setError("");
                    window.location.href = "/";
                }
                , 2000);
                setLoading(false);
                return;
            }
            const data = await response.json();
            reset();
            console.log("Form Data Submitted:", request);
            setAuthUser(data?.user);
            setUserToken(data?.token);
            setSuccess("Redirecting... ");
            setTimeout(() => {
                setSuccess("");
                window.location.href = "/";
            }
            , 2000);
        } catch (error) {
            console.error(error);
            setError(error.message)
            setTimeout(() => {
                setError("");
                window.location.href = "/";
            }
            , 2000);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <section className='grid items-center h-full md:h-[90%] w-full md:w-[25%] space-y-3 border p-5 bg-gray-100 rounded-md shadow-md'>
        <div className='flex justify-center items-center'>
            <img src="svgs/favicon.ico" alt="Logo" />
        </div>
        <h1 className='text-center text-xl font-bold'>Login as Admin</h1>

        <form onSubmit={handleSubmit(_handleSubmit)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id='email' 
                    {...register("email")} 
                    name='email' placeholder="e.g. example@domain.com" 
                    className="px-2 py-2 border rounded-md"
                />
                {errors.email && <small className="text-red-500">{errors.email.message}</small>}
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password">Password</label>
                <div className='flex items-center border rounded-md w-full'>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id='password' 
                        {...register("password")} 
                        name='password' 
                        placeholder="********" 
                        className="rounded-l-md pl-2 py-2 flex-1" 
                    />
                    <i className={`${ !showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'} rounded-r-md bg-gray-300 px-2 py-3`}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    
                </div>
                {errors.password && <small className="text-red-500">{errors.password.message}</small>}
            </div>
            <button type='submit' className='bg-black text-white py-2 rounded-md'>
                {loading ? <Spinner/> : "Login"}
            </button>
        </form>
        <hr />
        <p className='text-xs text-center'>Forgot password? <span className='text-red-500'>Contact support</span></p>

        <article className='text-[0.8rem] text-center text-gray-500'>
            Pioneering a multi-faceted approach to the music PR scene
        </article>

        {success && (
            <div className='relative my-4 text-center text-sm text-green-600 bg-green-200 p-3 rounded-md border border-green-600'>
            {success}
            <button onClick={() => setSuccess("")} className="absolute top-0 right-0 px-2 py-1 text-green-800 hover:text-green-900">
                ×
            </button>
            </div>
        )}
        {error && (
            <div className='relative my-4 text-center text-sm text-red-600 bg-red-200 p-3 rounded-md border border-red-600'>
            {error}
            <button onClick={() => setError("")} className="absolute top-0 right-0 px-2 py-1 text-red-800 hover:text-red-900">
                ×
            </button>
            </div>
        )}
      </section>
    </div>
  )
}

export default Login
