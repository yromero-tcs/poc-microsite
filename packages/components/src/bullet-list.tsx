type BulletListProps = {
  items: string[];
  iconSrc: string;
};

export function BulletList({ items, iconSrc }: BulletListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span className="relative mt-0.5 size-7 shrink-0">
            <img src={iconSrc} alt="" className="size-full object-contain" />
          </span>
          <span className="text-base leading-6 text-brand-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}
