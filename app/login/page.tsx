'use client'
import { useFormState, useFormStatus } from "react-dom"
import { login } from "@/actions/auth"
import "./page.css"
import Image from "next/image"
import arrow from "../../public/images/arrow.png"

const initialState = {
  message: '',
} 
function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <button className="register_button" type="submit" aria-disabled={pending}>
      <Image src={arrow} width={60} height={20} alt="arrow"></Image>
    </button>
  )
}

export default function Login() {
  const [state, formAction] = useFormState(login, initialState)

  return (
    <div className="main">
      <div className="register">
        <form action={formAction}>

          <input className="register_input" type="email" id="login" name="login" placeholder="Login"required />

          <input className="register_input" type="password" id="password" name="password" placeholder="Password" required />
          <SubmitButton />
          <p>
            {state?.message}
          </p>
        </form>
      </div>
    </div>
  )
}