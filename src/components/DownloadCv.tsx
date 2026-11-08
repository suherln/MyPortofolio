import React from 'react';
import { Download } from 'lucide-react';
import { hasLink } from '../data/portfolioData';
import { CV_LINK } from '../links';

interface DownloadCvProps {
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}

export const DownloadCv: React.FC<DownloadCvProps> = ({
  className = 'btn btn-secondary',
  iconClassName = 'h-4 w-4',
  onClick
}) => {
  const ready = hasLink(CV_LINK);

  return (
    <a
      href={ready ? CV_LINK : undefined}
      target="_blank"
      rel="noreferrer"
      download
      role={ready ? undefined : 'link'}
      aria-disabled={ready ? undefined : true}
      onClick={onClick}
      className={`${className} ${ready ? '' : 'cursor-pointer'}`}
    >
      <Download className={iconClassName} />
      Download CV
    </a>
  );
};
