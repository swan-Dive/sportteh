'use client'
import type { UserDataType } from "@/types/DataTypes"
import { updateProfile } from "@/actions/updateProfile"
import Image from "next/image"
import placeholder from "../public/images/placeholder.webp"
import {useFormStatus } from "react-dom"
export function ProfileComponent({userData}: {userData: UserDataType}) {

 
  function SubmitButton() {
    const {pending} = useFormStatus()
  
    return (
      <button className="main_button " type="submit" >
        {pending ? "Загрузка" : "Обновить"}
      </button>
    )
  }

  //const [state, formAction] = useFormState(updateProfile, initialState)
  
  return (
    <div className="main_wrap">
      <form action={updateProfile}>
        <div className="all_pr_wrap">
          <Image src={userData.photo ? userData.photo : placeholder} alt="Фото" width={200} height={200}/>
          <div className="profile_wrap">
            <p>Ваша роль: <b>{userData.role_id === 3 ? "участник": (userData.role_id === 2 ? 'волонтер' : 'организатор')}</b></p>
            <label htmlFor="photo">Выберите новое фото</label>
            <input  name="photo" id="photo" type="file" accept="image/*"/>
            <label htmlFor="name">Имя</label>
            <input className="input_style" type="text" name="name" id="name" defaultValue={userData.name} />
            <label htmlFor="surname">Фамилия</label>
            <input className="input_style" type="text" name="surname" id="surname" defaultValue={userData.surname} />
            <label htmlFor="patronymic">Отчество</label>
            <input className="input_style" type="text" name="patronymic" id="patronymic" defaultValue={userData.patronymic} />
            
            <label htmlFor="login">Логин</label>
            <input className="input_style" type="email" name="login" id="login" defaultValue={userData.login} />
            
            <label htmlFor="password">Обновить пароль</label>
            <input className="input_style" type="password" name="password" id="password" placeholder="Введите новый пароль"/>
            <input className="input_style" type="password" name="password_r" id="password_r" placeholder="Повторите новый пароль"/>
            
            <SubmitButton/>
          </div>
        </div>
      </form>
    </div>
  )
}