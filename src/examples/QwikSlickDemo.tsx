import { component$ } from '@builder.io/qwik';
import { QwikSlick } from '../lib/QwikSlick';

export const QwikSlickDemo = component$(() => {
  // Exemple 1: Slider basique
  const basicSlides = [
    <div style="background: linear-gradient(45deg, #ff6b6b, #ee5a5a); padding: 60px; text-align: center; color: white; border-radius: 8px;">
      <h3>Slide 1</h3>
      <p>Contenu du premier slide</p>
    </div>,
    <div style="background: linear-gradient(45deg, #4ecdc4, #44a08d); padding: 60px; text-align: center; color: white; border-radius: 8px;">
      <h3>Slide 2</h3>
      <p>Contenu du deuxième slide</p>
    </div>,
    <div style="background: linear-gradient(45deg, #45b7d1, #36a3db); padding: 60px; text-align: center; color: white; border-radius: 8px;">
      <h3>Slide 3</h3>
      <p>Contenu du troisième slide</p>
    </div>,
    <div style="background: linear-gradient(45deg, #f9ca24, #f0b90b); padding: 60px; text-align: center; color: white; border-radius: 8px;">
      <h3>Slide 4</h3>
      <p>Contenu du quatrième slide</p>
    </div>,
    <div style="background: linear-gradient(45deg, #6c5ce7, #5a67d8); padding: 60px; text-align: center; color: white; border-radius: 8px;">
      <h3>Slide 5</h3>
      <p>Contenu du cinquième slide</p>
    </div>,
  ];

  // Exemple 2: Slides avec des produits
  const productSlides = Array.from({ length: 8 }, (_, i) => (
    <div style="background: white; border: 1px solid #e2e2e2; border-radius: 8px; padding: 20px; margin: 10px; text-align: center;">
      <div style="width: 100%; height: 120px; background: #f5f5f5; border-radius: 4px; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; color: #666;">
        Produit {i + 1}
      </div>
      <h4 style="margin: 8px 0; color: #333;">Produit {i + 1}</h4>
      <p style="color: #666; font-size: 14px; margin: 4px 0;">Description du produit</p>
      <div style="font-weight: bold; color: #007acc; margin-top: 8px;">{(29.99 + i * 5).toFixed(2)} €</div>
    </div>
  ));

  return (
    <div style="padding: 20px; max-width: 1200px; margin: 0 auto;">
      <h1>Qwik Slick - Exemples</h1>
      
      {/* Exemple 1: Slider avec autoplay et dots */}
      <section style="margin: 40px 0;">
        <h2>Slider infini avec vitesse personnalisée</h2>
        <QwikSlick 
          items={basicSlides}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          speed={800}
          cssEase="ease-in-out"
          autoplay={true}
          autoplaySpeed={3000}
          pauseOnHover={true}
          dots={true}
          arrows={true}
          beforeChange={(current, next) => console.log(`Changing from ${current} to ${next}`)}
          afterChange={(current) => console.log(`Changed to ${current}`)}
        />
      </section>

      {/* Exemple 2: Slider multi-slides responsive */}
      <section style="margin: 40px 0;">
        <h2>Slider produits responsive avec scroll multiple</h2>
        <QwikSlick 
          items={productSlides}
          slidesToShow={4}
          slidesToScroll={2}
          infinite={true}
          speed={600}
          autoplay={false}
          dots={true}
          arrows={true}
          responsive={[
            {breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 1}},
            {breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 1}},
            {breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1}}
          ]}
        />
      </section>

      {/* Exemple 3: Slider fade */}
      <section style="margin: 40px 0;">
        <h2>Slider avec effet fade</h2>
        <QwikSlick 
          items={basicSlides.slice(0, 3)}
          slidesToShow={1}
          slidesToScroll={1}
          fade={true}
          infinite={true}
          speed={1000}
          cssEase="ease"
          autoplay={true}
          autoplaySpeed={4000}
          dots={true}
          arrows={true}
        />
      </section>
    </div>
  );
});
