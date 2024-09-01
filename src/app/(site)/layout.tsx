import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Main from "@/components/main"
import Logo from "@/components/logo"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
