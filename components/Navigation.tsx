import { getSession, logout } from "@/actions/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function Navigation() {
  const session = await getSession()
  return (
    <div className="menu">
      <ul>
        {/* <li><Link href="/login">Войти в кабинет</Link></li> */}
        <Link href="/"><li className="menu_top"><img src={'/images/logo.svg'}  className="menu_svg_top"/><span className="fat_grot_span">СПОРТ ТЕХ</span></li></Link>
        {session?.userEmail ? <Link href="/profile" id="login"><li className="menu_bot"><img src={"/images/user.png"}/>Профиль: {session?.userEmail}</li></Link>:<Link href="/login" id="login"><li className="menu_bot"><img src={"/images/user.png"}/>Войти в кабинет</li></Link>}
        
        <span className="break_line"></span>
        <Link href="/articles"><li id="articles"><img id="book_icon" src={"/images/book.svg"} className="menu_svg"/>Статьи</li></Link>
        
        <Link href="/map"><li id="map"><img id="map_icon" src={'/images/map.svg'}  className="menu_svg"/>Карта</li></Link>
    
        <Link href="/competitions"><li id="competitions"><img  id="comp_icon" src={'/images/competitions.svg'} className="menu_svg"/>События</li></Link>
    
        <Link href="/ratings"><li id="ratings"><img  src={'/images/cup.svg'} id="rating_icon" className="menu_svg"/>Рейтинг</li></Link>

        {session?.userEmail ? 
        
          <form 
            action={async() => {'use server';
              await logout();
              redirect('/')
            }}
          ><button type="submit">

              <li>
                Выход
              </li>
         
            </button>
          </form>

        : <></>}

        
      </ul>
    </div>
  )
}