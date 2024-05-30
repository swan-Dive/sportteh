'use client'
import {manageContests, updateVoloteer} from "@/actions/manageContests"
import Image from "next/image"
import placeholder from "../../public/images/placeholder.webp"
import { ContestDataType } from "@/types/DataTypes"
import { Fragment } from "react"

export default function ChangeContest({contest} : {contest: ContestDataType}) {

  const sendData = (formData: FormData) => {
    manageContests(formData, 'update')
  }

  return (
    <div >
      <form action={sendData} className="change_contest_wrap">
        <input type="text"
         className="input_style"
         name='name' id="name" placeholder="Название соревнования" required
         defaultValue={contest.name}
         />
        <input className="input_style" type="text" name="description" id="description" placeholder="Описание" required
        defaultValue={contest.description} />
        <input className="input_style" type="text" name='place_id' id="place_id" placeholder="Место проведения" required
        defaultValue={contest.place_id}/>
        <input className="input_style" type="text" name="type_of_sport" id="type_of_sport" placeholder="Вид спорта" required
        defaultValue={contest.type_of_sport}/>
        <div>
          <label>Онлайн?</label>
          <input type="checkbox" name="is_online" id="is_online" defaultChecked={contest.is_online ? true : false} />
        </div>
        <label>Фото соревнования</label>
        <Image src={contest.photo ? contest.photo: placeholder} alt="contest photo" width={400} height={400} />

        <input name="photo" id="photo" type="file" accept="image/*"/>
        <input type="hidden" id="id" name="id" defaultValue={contest.id} />

        <button className="main_button"  type="submit">Обновить</button>

      </form>
      <form action={updateVoloteer} className="change_contest_wrap">
        {contest.volonteers_to_verify && contest.volonteers_to_verify.map((item, index) => (
          <div key={"volonteer_to_verify" + index}>
            <label>{item}</label>
            <input type="checkbox" id={item.toString()} name={item.toString()} defaultChecked={contest.volonteers && contest.volonteers.includes(item)}/>
          </div>
        ))}
        <input type="hidden" name="contest_id" defaultValue={contest.id}/>
        {contest.volonteers_to_verify && <button className="main_button"  type="submit">Обновить волонтеров</button>}
        </form>
    </div>
  )
}

