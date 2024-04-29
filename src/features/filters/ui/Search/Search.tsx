import { Button, Input, cn, useAppDispatch } from "@/shared"
import { FC, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TSearchProps } from "./types"
import { createPortal } from "react-dom"
import { setFilters } from "@/entities/filters/slice"

export const Search: FC<TSearchProps> = ({visible, onClose}) => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState("")
  const searchRef = useRef<HTMLInputElement | null>(null)
  const navigate = useNavigate()
  const handleSearch = async (value: string) => {
    try {
      navigate(`/recipes?search=${value}`)
      dispatch(setFilters({ name: value }))
    } catch (e) {
      console.dir(e)
    } finally {
      handleClose()
    }
  }

  const handleClear = () => {
    dispatch(setFilters({}))
    navigate('/recipes')
  }

  const handleClose = () => {
    onClose()
    setSearch("")
  }

  useEffect(() => {
    if (visible) {
      searchRef.current?.focus()
    }
  }, [visible])

  return createPortal(
    <div
      className={cn(
        "fixed w-full inset-0 backdrop-blur-md bg-black opacity-80",
        visible ? "block" : "hidden"
      )}
      onClick={() => handleClose()}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Input
          ref={searchRef}
          className="bg-transparent border-none text-center border font-bold !text-[5rem] text-primary placeholder:text-primary "
          placeholder="Нажмите на enter, чтобы найти рецепт"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onEnter={handleSearch}
        />
        <Button onClick={() => handleClear()}>Очистить</Button>
      </div>
    </div>,
    document.body
  )
}
