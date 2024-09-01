"use client"

import styles from "./navigation.module.css"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Sub,
  Viewport,
  Link as RadixLink,
} from "@radix-ui/react-navigation-menu"
import s from "./navigation.module.css"

type LinkProps = { href: string } & any
const Link = ({ href, ...props }: LinkProps) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <RadixLink asChild active={isActive}>
      <NextLink href={href} className="link" {...props} />
    </RadixLink>
  )
}

export default function Navigation() {
  const navData = [
    { name: "Home", href: "/" },
    {
      name: "Photography",
      children: [
        { name: "Live", href: "/photography/live" },
        { name: "Portraits", href: "/photography/portraits" },
        { name: "BTS", href: "/photography/bts" },
        { name: "Press Shots", href: "/photography/press-shots" },
      ],
    },
    { name: "Videography", href: "/videography" },
    { name: "Artist Content", href: "/artist" },
    { name: "Mahalia Presents", href: "/mahalia-presents" },
    {
      name: "More...",
      children: [
        { name: "Mixes", href: "/mixes" },
        { name: "Playlists", href: "/playlists" },
        { name: "Passion Projects", href: "/projects" },
      ],
    },
  ]
  return (
    <Root className={s.root}>
      <List className={s.list}>
        {navData.map((item, index) => (
          <Item className={s.item} key={index}>
            {item.href ? (
              <Link className={s.link} href={item.href}>
                {item.name}
              </Link>
            ) : (
              <>
                <Trigger className={s.trigger}>{item.name}</Trigger>
                <Content className={s.content}>
                  <Sub className={s.sub}>
                    <List className={s.list}>
                      {item.children?.map((child, index) => (
                        <Item className={s.item} key={index}>
                          <Link className={s.link} href={child.href}>
                            {child.name}
                          </Link>
                        </Item>
                      ))}
                    </List>
                  </Sub>
                </Content>
              </>
            )}
          </Item>
        ))}
      </List>
    </Root>
  )
}
