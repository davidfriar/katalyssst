import { Spotify } from "react-spotify-embed"

type PreviewProps = {
  value: {
    _type: string
    url: string
  }
}
const Preview = ({ value }: PreviewProps) => {
  return (
    <div>
      {value.url ? (
        <Spotify wide link={value.url} />
      ) : (
        "Spotify Playlist: No URL"
      )}
    </div>
  )
}

export default Preview
