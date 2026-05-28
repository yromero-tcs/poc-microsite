import { images } from '@/config/images';

type BrandLogosProps = {
  variant?: 'default' | 'footer';
};

/** Figma: Accenture 128.243×36px, TrueChoice 190.588×26.579px, 24px gap */
export function BrandLogos({ variant = 'default' }: BrandLogosProps) {
  const accentureSrc = variant === 'footer' ? images.accentureLogoLight : images.accentureLogo;
  const truechoiceSrc = variant === 'footer' ? images.truechoiceLogoLight : images.truechoiceLogo;

  return (
    <div className="flex items-center gap-4 sm:gap-[24px]">
      <img
        src={accentureSrc}
        alt="Accenture"
        className="h-6 w-auto shrink-0 object-contain sm:h-[36px]"
        width={128}
        height={36}
      />
      <img
        src={truechoiceSrc}
        alt="TrueChoice.AI"
        className="h-5 w-auto shrink-0 object-contain sm:h-[26.579px]"
        width={191}
        height={27}
      />
    </div>
  );
}
