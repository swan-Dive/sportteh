import Link from "next/link";
import "./page.css"
import { cookies } from "next/headers";
export default function Home() {
    {console.log(cookies().get('token'))}
  return (
    <div className="main">
        <div className="main_center">
        <h1 className="main_words">СПОРТ ДЛЯ ВСЕХ<br/> И КАЖДОГО</h1>
        <p>С НАМИ КАЖДЫЙ МОЖЕТ СТАТЬ ЧЕМПИОНОМ</p>
        <div className="wrapper">
        <div className="cards">
            <div className="card">
                <h2><img src={"/images/cont.png"}/>Участнику</h2>
                <p className="under_text">10 000+ чел. по всей России</p>
                <p>Возможность найти<br/>единомышленников</p>
                <p>Постоянные турниры<br/> с ценными призами</p>
                <p>Все о спорте<br/> и здоровом образе жизни</p>
            </div>
            <div className="card">
                <h2><img src={'/images/vol.png'}/>Волонтеру</h2>
                <p className="under_text">10 000+ чел. по всей России</p>
                <p>Самые масштабные<br/> мероприятия по России </p>
                <p>Система лояльности<br/> для волонтеров</p>
                <p>Возможность<br/> бесплатного обучения</p>
            </div>
            <div className="card">
                <h2><img src={"/images/org.png"}/>Организатору</h2>
                <p className="under_text">100+ мероприятий в год по всей России</p>
                <p>Мощная площадка для<br/> вашего продвижения</p>
                <p>100000 человек проходят<br/> через наши мероприятия<br/> ежегодно</p>
                <p>Быстрый старт<br/> сотрудничества</p>
            </div>
        </div>
       
        <Link href="/register"> <button className="join_us" >Присоединиться</button></Link>
       
        </div>
    </div>


</div>
  );
}
