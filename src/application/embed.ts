export enum EmbedType {
  RICH = "rich",
  IMAGE = "image",
  VIDEO = "video",
  GIFV = "gifv",
  ARTICLE = "article",
  LINK = "link",
}

export interface EmbedThumbnail {
  height?: number;
  proxy_url?: string;
  url?: string;
  width?: number;
}

export interface EmbedVideo {
  height?: number;
  url?: string;
  width?: number;
}

export interface EmbedImage {
  height?: number;
  proxy_url?: string;
  url?: string;
  width?: number;
}

export interface EmbedProvider {
  name?: string;
  url?: string;
}

export interface EmbedAuthor {
  icon_url?: string;
  name?: string;
  proxy_icon_url?: string;
  url?: string;
}

export interface EmbedFooter {
  icon_url?: string;
  proxy_icon_url?: string;
  text: string;
}

export interface EmbedField {
  inline?: boolean;
  name: string;
  value: string;
}

export interface Embed {
  author?: EmbedAuthor;
  color?: number;
  description?: string;
  fields?: EmbedField[];
  footer?: EmbedFooter;
  image?: EmbedImage;
  provider?: EmbedProvider;
  thumbnail?: EmbedThumbnail;
  timestamp?: string;
  title?: string;
  type?: EmbedType;
  url?: string;
  video?: EmbedVideo;
}
