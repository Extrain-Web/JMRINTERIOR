type Props = {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionTitle({
  label,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  const center = align === "center";
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-gold">
        {label}
      </p>
      <h2
        className={`mt-3 text-[32px] font-bold leading-[1.15] tracking-tight sm:text-[40px] lg:text-[46px] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[15px] leading-7 ${
            light ? "text-white/75" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
