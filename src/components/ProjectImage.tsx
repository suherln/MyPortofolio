import React, { useEffect, useState } from 'react';

interface ProjectImageProps {

  imageName: string;
  projectTitle: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

const aspectClasses = {
  video: 'aspect-[16/10]',
  square: 'aspect-square',
  wide: 'aspect-[21/9]'
} as const;

export const ProjectImage: React.FC<ProjectImageProps> = ({
  imageName,
  projectTitle,
  className = '',
  aspectRatio = 'video'
}) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const src = `/photos/${imageName}`;

  useEffect(() => {
    setFailed(false);
    setLoaded(false);
  }, [src]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-md border border-line bg-surface ${aspectClasses[aspectRatio]} ${className}`}
    >
      {!failed && (
        <img
          src={src}
          alt={projectTitle}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {(failed || !loaded) && (
        <div aria-hidden="true" className="absolute inset-0 grid select-none place-items-center">
          <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-line-strong)_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="relative font-serif text-6xl text-line-strong">{projectTitle.charAt(0)}</span>
        </div>
      )}
    </div>
  );
};
