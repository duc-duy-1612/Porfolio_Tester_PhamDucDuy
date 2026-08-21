interface InitialsAvatarProps {
  initials: string;
  name: string;
  image?: string;
}

export function InitialsAvatar({ initials, name, image }: InitialsAvatarProps) {
  if (image) {
    return (
      <img
        className="profile-avatar"
        src={image}
        alt={`Professional portrait of ${name}`}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
        loading="eager"
      />
    );
  }

  return (
    <div className="profile-avatar profile-avatar--initials" aria-label={`${name} initials avatar`}>
      <span>{initials}</span>
    </div>
  );
}
