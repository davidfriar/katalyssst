"use client"
import { useState } from "react"
import PhotoAlbum from "react-photo-album"
import { type Photo } from "react-photo-album"
import "react-photo-album/styles.css"
import Image from "next/image"
import { RenderImageContext, RenderImageProps } from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

type ImageGalleryProps = {
  photos: Photo[]
}
export default function ImageGallery({ photos }: ImageGalleryProps) {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <PhotoAlbum
        defaultContainerWidth={1200}
        render={{ image: renderNextImage }}
        layout="masonry"
        photos={photos || []}
        columns={4}
        componentsProps={{ container: { style: { width: "100%" } } }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </>
  )
}

function renderNextImage(
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
