'use client'
import { useFormStatus, useFormState } from "react-dom"
import registerUser from "@/actions/auth"
import arrow from "../../public/images/arrow.png"
import "./page.css"
import Image from "next/image"

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

export default function Register() {
  const [state, formAction] = useFormState(registerUser, initialState)

  return (
    <div className="main">
      <div className="register">
        <form action={formAction}>
          <input className="register_input" type="email" id="login" name="login" placeholder="Login"required />
          <input className="register_input" type="password" id="password" name="password" placeholder="Password" required />
          <div className="choose_role">
            <div>
            <label>Участник</label>
            <input  type="radio" id="3" name="role_id"  value="3" defaultChecked={true}/>
            </div>
            <div>
            <label>Волонтер</label>
            <input type="radio" id="2" name="role_id"  value="2" />
            </div>
            <div>
            <label>Организатор</label>
            <input type="radio" id="1" name="role_id"  value="1" />
            </div>
          </div>
          <SubmitButton />
          <p>
            {state?.message}
          </p>
        </form>
      </div>
    </div>
  )
}