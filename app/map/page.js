import Image from "next/image"
import map from "../../public/images/map.png"
import "./page.css"
import Search from "@/components/Search"

const MapPage = () => {



  return (
    <div className="main_wrap">
      <div className="map_container">
      <div className="competitions_header">
        <h2>Исследуй новые локации для тренировок и узнавай о новых событиях рядом: </h2>
        <Search placeholder="Найти площадку"/>
      </div>
        
        <Image src={map} alt="map" width={800} height={600}></Image>
      </div>
    </div>
    )
}


export default MapPage