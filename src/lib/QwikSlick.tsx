/**
 * QwikSlick - Composant Qwik inspiré de React Slick
 * Fonctionnalités : slider horizontal, navigation, dots, autoplay, responsive, touch, accessibilité
 */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import './QwikSlick.css';

interface QwikSlickProps {
  items: any[];
  slidesToShow?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  arrows?: boolean;
  responsive?: Array<{ breakpoint: number; slidesToShow: number }>;
  class?: string;
}

export type { QwikSlickProps };

export const QwikSlick = component$((props: QwikSlickProps) => {
  const current = useSignal(0);
  const slidesToShow = useSignal(props.slidesToShow ?? 1);
  const intervalRef = useSignal<NodeJS.Timeout | null>(null);

  // Responsive logic
  useVisibleTask$(() => {
    const handleResize = () => {
      if (props.responsive) {
        for (const r of props.responsive) {
          if (window.innerWidth <= r.breakpoint) {
            slidesToShow.value = r.slidesToShow;
            return;
          }
        }
        slidesToShow.value = props.slidesToShow ?? 1;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  });

  // Autoplay
  useVisibleTask$(() => {
    if (props.autoplay) {
      intervalRef.value = setInterval(() => {
        current.value = (current.value + 1) % (props.items.length - slidesToShow.value + 1);
      }, props.autoplaySpeed ?? 3000);
      return () => {
        if (intervalRef.value) {
          clearInterval(intervalRef.value);
        }
      };
    }
  });

  const goTo = (idx: number) => {
    if (idx < 0) idx = 0;
    if (idx > props.items.length - slidesToShow.value) idx = props.items.length - slidesToShow.value;
    current.value = idx;
  };

  // Touch events
  const onTouchStart = (e: TouchEvent) => {
    const startX = e.touches[0].clientX;
    (e.target as any).dataset.startX = startX.toString();
  };
  
  const onTouchEnd = (e: TouchEvent) => {
    const startX = parseInt((e.target as any).dataset.startX || '0');
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) goTo(current.value + 1);
    if (endX - startX > 50) goTo(current.value - 1);
  };

  return (
    <div class={props.class ?? "qwik-slick-slider"}>
      {props.arrows !== false && (
        <button aria-label="Previous" onClick$={() => goTo(current.value - 1)} disabled={current.value === 0}>&lt;</button>
      )}
      <div
        class="qwik-slick-track"
        style={{ display: 'flex', overflow: 'hidden' }}
        onTouchStart$={onTouchStart}
        onTouchEnd$={onTouchEnd}
      >
        {props.items.slice(current.value, current.value + slidesToShow.value).map((item, i) => (
          <div class="qwik-slick-slide" style={{ flex: '0 0 auto', width: `${100 / slidesToShow.value}%` }} key={i}>
            {item}
          </div>
        ))}
      </div>
      {props.arrows !== false && (
        <button aria-label="Next" onClick$={() => goTo(current.value + 1)} disabled={current.value >= props.items.length - slidesToShow.value}>&gt;</button>
      )}
      {props.dots && (
        <div class="qwik-slick-dots">
          {Array.from({ length: props.items.length - slidesToShow.value + 1 }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              class={current.value === i ? "active" : ""}
              onClick$={() => goTo(i)}
            >
              ●
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
