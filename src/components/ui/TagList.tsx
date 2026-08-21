interface TagListProps {
  tags: string[];
  variant?: "default" | "subtle";
}

export function TagList({ tags, variant = "default" }: TagListProps) {
  return (
    <ul className={`tag-list tag-list--${variant}`} aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
