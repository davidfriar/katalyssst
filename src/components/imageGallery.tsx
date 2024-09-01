"use client"
import { useState } from "react"
import PhotoAlbum from "react-photo-album"
import { type Photo, type RenderExtras } from "react-photo-album"
import "react-photo-album/styles.css"
import Image from "next/image"
import { RenderImageContext, RenderImageProps } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Link from "next/link"

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

import s from "./imageGallery.module.css"

type ImageGalleryProps = {
  photos: Photo[]
  columns: number
  lightbox?: boolean
  layout: "masonry" | "columns" | "rows"
}
export default function ImageGallery({
  photos,
  columns,
  lightbox,
  layout,
}: ImageGalleryProps) {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <PhotoAlbum
        defaultContainerWidth={1200}
        render={{
          image: renderImage,
          link: (props) => <Link {...props} />,
          extras: renderCaptionBar,
        }}
        layout={layout}
        photos={photos || []}
        columns={columns}
        componentsProps={{ container: { style: { width: "100%" } } }}
        onClick={({ index }) => setIndex(index)}
      />
      {lightbox && (
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </>
  )
}

const renderCaptionBar: RenderExtras = (_, { photo }) => {
  return <div className={s.captionBar}>{photo.title}</div>
}

function renderImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  )
}
