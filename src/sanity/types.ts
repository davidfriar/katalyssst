/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch"
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: "sanity.imagePalette"
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions"
  height?: number
  width?: number
  aspectRatio?: number
}

export type Geopoint = {
  _type: "geopoint"
  lat?: number
  lng?: number
  alt?: number
}

export type Teaser = {
  _id: string
  _type: "teaser"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  image?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    caption?: string
    _type: "customImage"
  }
  link?: string
}

export type Video = {
  _id: string
  _type: "video"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  video?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset"
    }
    _type: "file"
  }
  thumbnail?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: "span"
          _key: string
        }>
        style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
        listItem?: "bullet"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: "reference"
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        caption?: string
        _type: "customImage"
        _key: string
      }
    | ({
        _key: string
      } & Tiktok)
    | ({
        _key: string
      } & Playlist)
  >
}

export type SanityFileAsset = {
  _id: string
  _type: "sanity.fileAsset"
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: "span"
        _key: string
      }>
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
      listItem?: "bullet"
      markDefs?: Array<{
        href?: string
        _type: "link"
        _key: string
      }>
      level?: number
      _type: "block"
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: "reference"
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      caption?: string
      _type: "customImage"
      _key: string
    }
  | ({
      _key: string
    } & Tiktok)
  | ({
      _key: string
    } & Playlist)
>

export type Tiktok = {
  _type: "tiktok"
  url?: string
}

export type Playlist = {
  _type: "playlist"
  url?: string
}

export type CustomImage = {
  _type: "customImage"
  asset?: {
    _ref: string
    _type: "reference"
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
  }
  hotspot?: SanityImageHotspot
  crop?: SanityImageCrop
  alt?: string
  caption?: string
}

export type PhotoSet = {
  _id: string
  _type: "photoSet"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  category?: {
    _ref: string
    _type: "reference"
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: "category"
  }
  photos?: Array<
    {
      _key: string
    } & CustomImage
  >
  description?: BlockContent
  slug?: Slug
}

export type Category = {
  _id: string
  _type: "category"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  slug?: Slug
}

export type SiteInfo = {
  _id: string
  _type: "siteInfo"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  description?: string
  footer?: string
  keywords?: Array<string>
  author?: string
  logo?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
}

export type SanityImageCrop = {
  _type: "sanity.imageCrop"
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot"
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: "sanity.imageAsset"
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData"
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata"
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type MediaTag = {
  _id: string
  _type: "media.tag"
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: Slug
}

export type Slug = {
  _type: "slug"
  current?: string
  source?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | Teaser
  | Video
  | SanityFileAsset
  | BlockContent
  | Tiktok
  | Playlist
  | CustomImage
  | PhotoSet
  | Category
  | SiteInfo
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | MediaTag
  | Slug
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./src/sanity/lib/queries.ts
// Variable: SITEINFO_QUERY
// Query: *[_type=="siteInfo"][0]
export type SITEINFO_QUERYResult = {
  _id: string
  _type: "siteInfo"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  description?: string
  footer?: string
  keywords?: Array<string>
  author?: string
  logo?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: "image"
  }
} | null
// Variable: PHOTOSETS_QUERY
// Query: *[_type=="photoSet"]{..., category->}
export type PHOTOSETS_QUERYResult = Array<{
  _id: string
  _type: "photoSet"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  category: {
    _id: string
    _type: "category"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    subtitle?: string
    slug?: Slug
  } | null
  photos?: Array<
    {
      _key: string
    } & CustomImage
  >
  description?: BlockContent
  slug?: Slug
}>
// Variable: PHOTOSETS_FOR_CATEGORY_QUERY
// Query: *[_type=="photoSet"]{..., category->}[category.slug.current==$category]
export type PHOTOSETS_FOR_CATEGORY_QUERYResult = Array<{
  _id: string
  _type: "photoSet"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  category: {
    _id: string
    _type: "category"
    _createdAt: string
    _updatedAt: string
    _rev: string
    title?: string
    subtitle?: string
    slug?: Slug
  } | null
  photos?: Array<
    {
      _key: string
    } & CustomImage
  >
  description?: BlockContent
  slug?: Slug
}>
// Variable: PHOTOSET_QUERY
// Query: *[_type=="photoSet"&&slug.current == $slug][0]
export type PHOTOSET_QUERYResult = {
  _id: string
  _type: "photoSet"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  category?: {
    _ref: string
    _type: "reference"
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: "category"
  }
  photos?: Array<
    {
      _key: string
    } & CustomImage
  >
  description?: BlockContent
  slug?: Slug
} | null
// Variable: CATEGORIES_QUERY
// Query: *[_type=="category"]
export type CATEGORIES_QUERYResult = Array<{
  _id: string
  _type: "category"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  slug?: Slug
}>
// Variable: CATEGORY_QUERY
// Query: *[_type=="category"&&slug.current==$slug][0]
export type CATEGORY_QUERYResult = {
  _id: string
  _type: "category"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  subtitle?: string
  slug?: Slug
} | null
// Variable: VIDEOS_QUERY
// Query: *[_type=="video"] {  title,  subtitle,  description,  video{    asset->  },  thumbnail{    asset->  }}
export type VIDEOS_QUERYResult = Array<{
  title: string | null
  subtitle: string | null
  description: Array<
    | ({
        _key: string
      } & Playlist)
    | ({
        _key: string
      } & Tiktok)
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: "span"
          _key: string
        }>
        style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "normal"
        listItem?: "bullet"
        markDefs?: Array<{
          href?: string
          _type: "link"
          _key: string
        }>
        level?: number
        _type: "block"
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: "reference"
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        caption?: string
        _type: "customImage"
        _key: string
      }
  > | null
  video: {
    asset: {
      _id: string
      _type: "sanity.fileAsset"
      _createdAt: string
      _updatedAt: string
      _rev: string
      originalFilename?: string
      label?: string
      title?: string
      description?: string
      altText?: string
      sha1hash?: string
      extension?: string
      mimeType?: string
      size?: number
      assetId?: string
      uploadId?: string
      path?: string
      url?: string
      source?: SanityAssetSourceData
    } | null
  } | null
  thumbnail: {
    asset: {
      _id: string
      _type: "sanity.imageAsset"
      _createdAt: string
      _updatedAt: string
      _rev: string
      originalFilename?: string
      label?: string
      title?: string
      description?: string
      altText?: string
      sha1hash?: string
      extension?: string
      mimeType?: string
      size?: number
      assetId?: string
      uploadId?: string
      path?: string
      url?: string
      metadata?: SanityImageMetadata
      source?: SanityAssetSourceData
    } | null
  } | null
}>
// Variable: TEASERS_QUERY
// Query: *[_type=="teaser"]
export type TEASERS_QUERYResult = Array<{
  _id: string
  _type: "teaser"
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  image?: {
    asset?: {
      _ref: string
      _type: "reference"
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset"
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    caption?: string
    _type: "customImage"
  }
  link?: string
}>

// Query TypeMap
import "@sanity/client"
declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type=="siteInfo"][0]': SITEINFO_QUERYResult
    '*[_type=="photoSet"]{..., category->}': PHOTOSETS_QUERYResult
    '*[_type=="photoSet"]{..., category->}[category.slug.current==$category]': PHOTOSETS_FOR_CATEGORY_QUERYResult
    '*[_type=="photoSet"&&slug.current == $slug][0]': PHOTOSET_QUERYResult
    '*[_type=="category"]': CATEGORIES_QUERYResult
    '*[_type=="category"&&slug.current==$slug][0]': CATEGORY_QUERYResult
    '*[_type=="video"] {\n  title,\n  subtitle,\n  description,\n  video{\n    asset->\n  },\n  thumbnail{\n    asset->\n  }\n}': VIDEOS_QUERYResult
    '*[_type=="teaser"]': TEASERS_QUERYResult
  }
}
