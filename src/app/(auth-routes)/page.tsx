'use client'

import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('')

  async function handleSignIn(data: any) {
    try {
      const response = await signIn('credentials', {
        redirect: false,
        phone: data.phone,
        password: data.password
      })

      console.log('[LOGIN_RESPONSE]: ', response)

      if (!response?.error) {
        router.replace('/admin')
      } else {
        setError('Telefone ou senha inválidos')
      }
    } catch (error) {
      console.log('[LOGIN_ERROR]: ', error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-100">
      <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col w-96 gap-2">
        <label htmlFor="phone">Telefone</label>
        <input
          {...register('phone')}
          type="tel"
          name="phone"
          placeholder='Telefone'
          required
          className="p-2 rounded-md"
        />

        <label htmlFor="password">Senha</label>
        <input
          {...register('password')}
          type="password"
          name="password"
          placeholder='Senha'
          required
          className="p-2 rounded-md"
        />
        {error && (
          <span className="text-red-400 text-sm block mt-2">{error}</span>
        )}
        <button type="submit" className="bg-black rounded-md p-2 text-white mt-4 font-semibold w-full">Entrar</button>
      </form>
    </main>
  );
}
