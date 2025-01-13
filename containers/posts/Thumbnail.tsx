import React from "react";
import { ThumbnailType } from "@/types/post";

interface Props {
  thumbnail: ThumbnailType;
}

const Thumbnail = ({ thumbnail }: Props) => {
  return (
    <picture className="mb-8 block h-48 w-full overflow-y-hidden rounded-xl px-4">
      {thumbnail.formats.large && (
        <source
          media="(min-width: 1024px)"
          srcSet={thumbnail.formats.large.url}
          className="h-full w-full object-cover"
        />
      )}
      {thumbnail.formats.medium && (
        <source
          media="(min-width: 768px)"
          srcSet={thumbnail.formats.medium.url}
          className="h-full w-full object-cover"
        />
      )}
      <img
        src={thumbnail.formats.thumbnail.url}
        alt={thumbnail.alternativeText || "Image"}
        className="h-full w-full object-cover"
      />
    </picture>
  );
};

export default Thumbnail;
