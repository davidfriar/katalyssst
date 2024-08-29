import styles from "./main.module.css"

type Props = { children: React.ReactNode }
export default async function Main({ children }: Props) {
  return <main className={styles.main}>{children}</main>
}
