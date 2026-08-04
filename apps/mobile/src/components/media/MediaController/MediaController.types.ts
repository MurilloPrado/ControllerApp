export interface MediaControllerProps {
  onPlayPause?: () => void;

  onNext?: () => void;

  onPrevious?: () => void;

  onVolumeUp?: () => void;

  onVolumeDown?: () => void;
}