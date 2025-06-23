import { createAvatar } from '@dicebear/core';
import { initials, pixelArt } from '@dicebear/collection';

import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant: 'pixelart' | 'initials';
}

export const GeneratedAvatar = ({ seed, className, variant }: GeneratedAvatarProps) => {
  let avatar;

  switch (variant) {
    case 'pixelart':
      avatar = createAvatar(pixelArt, { seed });
      break;
    case 'initials':
      avatar = createAvatar(initials, { seed, fontWeight: 500, fontSize: 42 }); // Placeholder for initials variant
      break;
    default:
      avatar = createAvatar(pixelArt, { seed });
  }

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

