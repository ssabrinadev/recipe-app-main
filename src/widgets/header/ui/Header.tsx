import { Search } from "@/features/filters"
import { Button, SearchIcon, cn, logo, navMenu, useAuth } from "@/shared"
import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigate = useNavigate()
  const { isAuth, logout } = useAuth()
  const [searchVisible, setsearchVisible] = useState<boolean>(false)
  return (
    <header className="container rounded-full border border-[#262522] flex justify-between items-center px-6 py-4">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className="flex gap-6">
          {navMenu.map((menu, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) => cn('uppercase inline-block rounded-b hover:text-dark', isActive ? 'text-dark border-b-4 border-[#EE6352]' : 'text-[#a09c95]')}
                to={menu.name}
              >
                {menu.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        <Button variant="gray" onClick={() => setsearchVisible(true)}>
          <img src={SearchIcon} alt="search" />
        </Button>
        {isAuth ? (
          <>
            <Button onClick={() => navigate('/write')}>Создать рецепт</Button>
            <Button variant="outline" onClick={() => navigate('/my-recipes')}>Мои рецепты</Button>
            <Button variant="gray" onClick={logout}>Выйти</Button>
          </>
          ) : (
            <>
              <Button onClick={() => navigate('/auth/login')}>Войти</Button>
              <Button variant="outline" onClick={() => navigate('/auth/register')}>Зарегистрироваться</Button>
            </>
          )
        }
      </div>
      <Search visible={searchVisible} onClose={() => setsearchVisible(false)} />
    </header>
  )
}
