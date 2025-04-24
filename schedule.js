const pricingTrack = document.getElementById('pricingSliderTrack');
let pricingIndex = 0;
const pricingCards = document.querySelectorAll('.pricing-card').length;

const visiblePricingCards = () => {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
};

function pricingSlide(direction) {
  const max = pricingCards - visiblePricingCards();
  pricingIndex += direction;
  if (pricingIndex < 0) pricingIndex = 0;
  if (pricingIndex > max) pricingIndex = max;

  const cardWidth = document.querySelector('.pricing-card').offsetWidth;
  pricingTrack.style.transform = `translateX(-${pricingIndex * cardWidth}px)`;
}

window.addEventListener('resize', () => pricingSlide(0));