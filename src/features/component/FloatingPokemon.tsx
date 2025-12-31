type Props = {
  src: string;
  className?: string;
  color: string;
  onClick: (color: string) => void;
};

export default function FloatingPokemon({
  src,
  className,
  color,
  onClick
}: Props) {
  return (
    <div
      onClick={() => onClick(color)}
      className={`absolute cursor-pointer hover:scale-110 transition-transform ${className}`}
    >
      <img src={src} className="w-64" alt="" />
    </div>
  );
}
