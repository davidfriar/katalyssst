import s from "./titleBlock.module.css"
import Logo from "@/components/logo"

type TitleBlockProps = { title: string; subtitle: string }
export default function TitleBlock({ title, subtitle }: TitleBlockProps) {
  return (
    <div className={s.container}>
      <Logo height={100} width={100} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}
