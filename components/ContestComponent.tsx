'use client'
import { ContestDataType } from "@/types/DataTypes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";


export function ContestComponent({contest, onClickURL} : {contest : ContestDataType, onClickURL: string}) {
  
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  onClickURL = onClickURL + '?' 
  + createQueryString('name', contest.name)+ "&"
  + createQueryString('description', contest.description) + "&"
  + createQueryString('place_id', contest.place_id) + "&"
  + createQueryString('type_of_sport', contest.type_of_sport) + "&"
  + createQueryString('is_online', contest.is_online.toString()) + "&"
  + createQueryString('photo', contest.photo)

  return (
    
    <div className="competition" >
      <img src={contest.photo} className="competitions_photo"/>

      <div className="competitions_separator">
        <Link href={onClickURL}>
          <h2>{contest.name}</h2>
        </Link>
        <p>{contest.place_id}</p>
      </div>

    </div>
 
  )


}