type Props = {
  image: string;
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectFlipCard({
  image,
  title,
  description,
  tech
}: Props) {
  return (
    <div className="flip-card w-full h-[380px]">
      <div className="flip-card-inner h-full">

        <div className="flip-card-front">
          <img src={image} className="rounded-xl h-full object-cover" />
          <p className="text-white text-2xl mt-4 font-semibold">{title}</p>
        </div>

        <div className="flip-card-back">
          <p className="text-white text-justify">{description}</p>
          <div className="flex gap-2 mt-4">
            {tech.map(t => (
              <img key={t} src={`/images/logo/${t}`} className="h-10" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
