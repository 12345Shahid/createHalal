interface UserAvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ src, alt, size = 'md' }: UserAvatarProps) {
  return (
    <div className={`avatar-${size}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="avatar-placeholder">{alt[0]}</div>
      )}
    </div>
  );
} 