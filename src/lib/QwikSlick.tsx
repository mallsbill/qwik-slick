/**
 * QwikSlick - Composant Qwik inspiré de React Slick
 * Fonctionnalités : slider horizontal, navigation, dots, autoplay, responsive, touch, accessibilité
 */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import './QwikSlick.css';

interface QwikSlickProps {
  items: any[];
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  speed?: number;
  cssEase?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  dots?: boolean;
  arrows?: boolean;
  fade?: boolean;
  vertical?: boolean;
  centerMode?: boolean;
  variableWidth?: boolean;
  adaptiveHeight?: boolean;
  responsive?: Array<{ 
    breakpoint: number; 
    settings: Partial<Omit<QwikSlickProps, 'items' | 'responsive'>>
  }>;
  class?: string;
  beforeChange?: (current: number, next: number) => void;
  afterChange?: (current: number) => void;
}

export type { QwikSlickProps };

export const QwikSlick = component$((props: QwikSlickProps) => {
  const current = useSignal(0);
  const slidesToShow = useSignal(props.slidesToShow ?? 1);
  const slidesToScroll = useSignal(props.slidesToScroll ?? 1);
  const speed = useSignal(props.speed ?? 500);
  const isTransitioning = useSignal(false);
  const intervalRef = useSignal<NodeJS.Timeout | null>(null);

  // Responsive logic
  useVisibleTask$(() => {
    const handleResize = () => {
      if (props.responsive) {
        for (const r of props.responsive) {
          if (window.innerWidth <= r.breakpoint) {
            slidesToShow.value = r.settings.slidesToShow ?? props.slidesToShow ?? 1;
            slidesToScroll.value = r.settings.slidesToScroll ?? props.slidesToScroll ?? 1;
            return;
          }
        }
        slidesToShow.value = props.slidesToShow ?? 1;
        slidesToScroll.value = props.slidesToScroll ?? 1;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  });

  // Autoplay
  useVisibleTask$(() => {
    if (props.autoplay) {
      const startAutoplay = () => {
        intervalRef.value = setInterval(() => {
          goToNext();
        }, props.autoplaySpeed ?? 3000);
      };

      const stopAutoplay = () => {
        if (intervalRef.value) {
          clearInterval(intervalRef.value);
          intervalRef.value = null;
        }
      };

      startAutoplay();

      // Pause on hover
      if (props.pauseOnHover) {
        const slider = document.querySelector('.qwik-slick-slider');
        if (slider) {
          slider.addEventListener('mouseenter', stopAutoplay);
          slider.addEventListener('mouseleave', startAutoplay);
        }
      }

      return () => {
        stopAutoplay();
        if (props.pauseOnHover) {
          const slider = document.querySelector('.qwik-slick-slider');
          if (slider) {
            slider.removeEventListener('mouseenter', stopAutoplay);
            slider.removeEventListener('mouseleave', startAutoplay);
          }
        }
      };
    }
  });

  const getTotalSlides = () => {
    return props.infinite ? props.items.length : Math.max(0, props.items.length - slidesToShow.value);
  };

  const goTo = (idx: number) => {
    if (isTransitioning.value) return;
    
    props.beforeChange?.(current.value, idx);
    
    let newIndex = idx;
    
    if (props.infinite) {
      if (newIndex < 0) {
        newIndex = getTotalSlides();
      } else if (newIndex > getTotalSlides()) {
        newIndex = 0;
      }
    } else {
      newIndex = Math.max(0, Math.min(idx, getTotalSlides()));
    }
    
    isTransitioning.value = true;
    current.value = newIndex;
    
    setTimeout(() => {
      isTransitioning.value = false;
      props.afterChange?.(newIndex);
    }, speed.value);
  };

  const goToNext = () => {
    goTo(current.value + slidesToScroll.value);
  };

  const goToPrev = () => {
    goTo(current.value - slidesToScroll.value);
  };

  // Touch events
  const onTouchStart = (e: TouchEvent) => {
    const startX = e.touches[0].clientX;
    (e.target as any).dataset.startX = startX.toString();
  };
  
  const onTouchEnd = (e: TouchEvent) => {
    const startX = parseInt((e.target as any).dataset.startX || '0');
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) goToNext();
    if (endX - startX > 50) goToPrev();
  };

  // Get visible items
  const getVisibleItems = () => {
    if (props.infinite) {
      const items = [...props.items];
      // Add items at the beginning and end for infinite scroll
      const startItems = items.slice(-slidesToShow.value);
      const endItems = items.slice(0, slidesToShow.value);
      const allItems = [...startItems, ...items, ...endItems];
      
      const startIndex = current.value + slidesToShow.value;
      return allItems.slice(startIndex, startIndex + slidesToShow.value);
    }
    
    return props.items.slice(current.value, current.value + slidesToShow.value);
  };

  const getTransitionStyle = () => {
    const easing = props.cssEase ?? 'ease';
    const duration = `${speed.value}ms`;
    
    if (props.fade) {
      return {
        transition: `opacity ${duration} ${easing}`,
        opacity: isTransitioning.value ? 0.5 : 1
      };
    }
    
    return {
      transition: isTransitioning.value ? `transform ${duration} ${easing}` : 'none',
      transform: props.vertical 
        ? `translateY(-${current.value * (100 / slidesToShow.value)}%)`
        : `translateX(-${current.value * (100 / slidesToShow.value)}%)`
    };
  };

  return (
    <div 
      class={`${props.class ?? "qwik-slick-slider"} ${props.vertical ? 'vertical' : ''} ${props.fade ? 'fade' : ''}`}
      style={props.centerMode ? { textAlign: 'center' } : {}}
    >
      {props.arrows !== false && (
        <button 
          aria-label="Previous" 
          onClick$={() => goToPrev()} 
          disabled={!props.infinite && current.value === 0}
          class="slick-prev"
        >
          &lt;
        </button>
      )}
      <div
        class="qwik-slick-track"
        style={{
          display: 'flex',
          flexDirection: props.vertical ? 'column' : 'row',
          overflow: 'hidden',
          ...getTransitionStyle()
        }}
        onTouchStart$={onTouchStart}
        onTouchEnd$={onTouchEnd}
      >
        {getVisibleItems().map((item, i) => (
          <div 
            class="qwik-slick-slide" 
            style={{ 
              flex: props.variableWidth ? 'none' : '0 0 auto', 
              width: props.variableWidth ? 'auto' : `${100 / slidesToShow.value}%`,
              height: props.vertical ? `${100 / slidesToShow.value}%` : 'auto'
            }} 
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
      {props.arrows !== false && (
        <button 
          aria-label="Next" 
          onClick$={() => goToNext()} 
          disabled={!props.infinite && current.value >= getTotalSlides()}
          class="slick-next"
        >
          &gt;
        </button>
      )}
      {props.dots && (
        <div class="qwik-slick-dots">
          {Array.from({ length: Math.ceil(props.items.length / slidesToScroll.value) }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              class={Math.floor(current.value / slidesToScroll.value) === i ? "active" : ""}
              onClick$={() => goTo(i * slidesToScroll.value)}
            >
              ●
            </button>
          ))}
        </div>
      )}
    </div>
  );
});
