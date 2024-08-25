import { useEffect, useState } from "react"

type Embed = {
  html: string
  width: string
  height: string
  type: string
  version: string
  title?: string
  author_name?: string
  author_url: string
  provider_name: string
  provider_url: string
  cache_age: string
  thumbnail_url: string
  thumbnail_width: string
  thumbnail_height: string
}

type PreviewProps = {
  value: {
    _type: string
    url: string
  }
}
const Preview = ({ value }: PreviewProps) => {
  const embedApiUrl = "https://www.tiktok.com/oembed?url="
  const [embed, setEmbed] = useState<Embed | undefined>(undefined)
  console.log(embed)
  useEffect(() => {
    const abortController = new AbortController()
    fetch(embedApiUrl + value.url, {
      headers: {
        // 'Content-Type': 'application/json',
        Accept: "application/json",
      },
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((json) => setEmbed(json))
      .catch((error) => {
        if (error.name === "AbortError") return
        throw error
      })
    return () => {
      abortController.abort()
    }
  }, [value.url])

  const styles = {
    container: { display: "flex" },
    title: { padding: "10px" },
    img: { width: "100px", display: "block" },
  }

  return (
    <div style={styles.container}>
      <div>
        <img style={styles.img} src={embed?.thumbnail_url} alt="" />
      </div>
      <div style={styles.title}>{embed ? embed.title : "No Tiktok found"}</div>
    </div>
  )
}

export default Preview
