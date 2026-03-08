interface SectionHeadingProps {
  english: string;
  japanese: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

const SectionHeading = ({ english, japanese, description, align = "center", light = false }: SectionHeadingProps) => {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const colorClass = light ? "text-primary-foreground" : "text-foreground";
  const mutedClass = light ? "text-primary-foreground/60" : "text-muted-foreground";

  return (
    <div className={`${textAlign} mb-12 md:mb-16`}>
      <p className={`section-subheading ${mutedClass} mb-3`}>{english}</p>
      <h2 className={`section-heading-jp ${colorClass}`}>{japanese}</h2>
      {align === "center" && <div className="divider-line mt-6" />}
      {description && (
        <p className={`mt-6 text-sm md:text-base max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""} ${mutedClass}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
