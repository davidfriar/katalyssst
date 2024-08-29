import Navigation from "@/components/navigation"
import s from "./header.module.css"

export default function Header() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  )
}
