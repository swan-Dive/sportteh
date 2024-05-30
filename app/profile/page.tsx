
import { getSession } from "@/actions/auth"
import { ProfileComponent } from "@/components/ProfileComponent"
import {OrgComponent} from "@/components/profileRelated/orgComponent"
import { VolComponent } from "@/components/profileRelated/volComponent"
import { ContComponent } from "@/components/profileRelated/contComponent"
import { UserDataType } from "@/types/DataTypes"
import axios from "axios"
import { JWTPayload } from "jose"
import Contests from "@/components/Contests"
import "./page.css"


export default async function Profile() {
  const session = await getSession()
  const userData = await getUserData(session)
  console.log(session)

  return(
    <div className="main">
      <div className="profile">
        
        <ProfileComponent userData={userData}/>
        {session?.roleId === 1 && <><OrgComponent /><Contests apiURL="getOrgContests" pathName="/profile/change-contest/" query=""/></> }
        {session?.roleId === 2 && <VolComponent />}
        {session?.roleId === 3 && <ContComponent />}
        
      </div>
    </div>
  )
}

async function getUserData(session: JWTPayload | null) {
  
  const res = await axios.post(process.env.NEXT_PUBLIC_APP_SERVER + "getUserByLogin", session)
  let result: UserDataType = res.data.rows[0]
  switch(result.role_id) {
    case 0:
      result.role_name = 'Админнистратор'
      break
    case 1:
      result.role_name = 'Организатор'
      break
    case 2:
      result.role_name = 'Волонтер'
      break
    case 3:
      result.role_name = 'Участник'
      break
    default:
      result.role_name = ''
  }

  return result
}