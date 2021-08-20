import { FC } from 'react';

interface VideoPreviewItemProps {
  isList?: boolean;
}

const VideoPreviewItem: FC<VideoPreviewItemProps> = ({
  isList = true,
}) => {
  return (
    <div>
      Video Preview
    </div>
  );
};

export default VideoPreviewItem;
