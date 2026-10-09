import Image from "next/image";

export default function ImagePlaceholder({ alt, src, className = "h-48 w-full" }) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded ${className}`}>
        <Image
          src={src}
          alt={alt || "Image"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-intallo-band border border-intallo-border text-intallo-blue flex items-center justify-center p-4 text-center rounded text-sm font-medium ${className}`}
      aria-label={alt}
    >
      <span>[ Image Placeholder: {alt} ]</span>
    </div>
  );
}
