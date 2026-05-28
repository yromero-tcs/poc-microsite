type CarouselNavProps = {
  onPrev?: () => void;
  onNext?: () => void;
  leftIconSrc: string;
  rightIconSrc: string;
};

export function CarouselNav({ onPrev, onNext, leftIconSrc, rightIconSrc }: CarouselNavProps) {
  return (
    <div className="flex shrink-0 gap-1.5">
      <button
        type="button"
        onClick={onPrev}
        className="flex size-12 items-center justify-center"
        aria-label="Previous"
      >
        <img src={leftIconSrc} alt="" className="size-12" width={48} height={48} />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="flex size-12 items-center justify-center"
        aria-label="Next"
      >
        <img src={rightIconSrc} alt="" className="size-12" width={48} height={48} />
      </button>
    </div>
  );
}
