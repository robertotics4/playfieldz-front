'use client'

import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loading } from '@/components/Loading'

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignIn(data: any) {
    try {
      setLoading(true)

      const response = await signIn('credentials', {
        redirect: false,
        phone: data.phone,
        password: data.password,
      })

      console.log('[LOGIN_RESPONSE]: ', response)

      if (!response?.error) {
        router.replace('/admin')
      } else {
        setError('Telefone ou senha inválidos')
      }
    } catch (error) {
      console.log('[LOGIN_ERROR]: ', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      {loading && <Loading />}
      <div className="flex flex-col items-center mb-12">
        <h1 className="font-bold text-3xl text-emerald-800">PlayFieldz</h1>
        <p className="font-normal text-xl">Organize sua pelada</p>
      </div>

      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="flex flex-col w-full gap-4"
      >
        <input
          {...register('phone')}
          type="tel"
          name="phone"
          placeholder="Número do telefone"
          required
          className="p-4 rounded-md font-normal text-zinc-900 text-base"
        />

        <input
          {...register('password')}
          type="password"
          name="password"
          placeholder="Senha"
          required
          className="p-4 rounded-md font-normal text-zinc-900 text-base"
        />
        <span className="ml-auto font-normal text-sm text-emerald-900">
          Esqueci minha senha
        </span>

        {error && (
          <span className="text-red-400 text-sm block mt-2">{error}</span>
        )}
        <button
          type="submit"
          className="bg-emerald-800 rounded-md p-4 text-white mt-4 font-semibold w-full shadow-2xl shadow-emerald-200"
        >
          Entrar
        </button>
      </form>
    </main>
  )
}
