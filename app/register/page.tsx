'use client'
import { useFormStatus, useFormState } from "react-dom"
import RegisterUser from "@/actions/RegisterAction"
import "./page.css"

const initialState = {
  message: '',
} 
function SubmitButton() {
  const {pending} = useFormStatus()

  return (
    <button className="register_button" type="submit" aria-disabled={pending}>
      Регистрация
    </button>
  )
}

export default function Register() {
  const [state, formAction] = useFormState(RegisterUser, initialState)

  return (
    <div className="main">
      <div className="register">
        <form action={formAction}>

          <input type="text" id="login" name="login" placeholder="Login"required />

          <input type="password" id="password" name="password" placeholder="Password" required />
          <SubmitButton />
          <p>
            {state?.message}
          </p>
        </form>
      </div>
    </div>
  )
}