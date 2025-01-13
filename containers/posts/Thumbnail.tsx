import React from "react";
import { ThumbnailType } from "@/types/post";

interface Props {
  thumbnail: ThumbnailType;
}

const Thumbnail = ({ thumbnail }: Props) => {
  return (
    <div className="px-4">
      <img
        src={thumbnail.formats.thumbnail.url}
        alt={thumbnail.alternativeText || "Image"}
        className="my-8 h-full w-full rounded-md object-cover"
      />
    </div>
  );
};

export default Thumbnail;
