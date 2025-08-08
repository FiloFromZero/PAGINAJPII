document.addEventListener("DOMContentLoaded", () => {
    const inner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = inner.children;
    const totalImages = images.length;
    let current = 0;
  
    const updateCarousel = () => {
      inner.style.transform = `translateX(-${current * 100}%)`;
    };
  
    prevBtn.onclick = () => {
      current = (current - 1 + totalImages) % totalImages;
      updateCarousel();
    };
  
    nextBtn.onclick = () => {
      current = (current + 1) % totalImages;
      updateCarousel();
    };
  
    setInterval(() => {
      nextBtn.click();
    }, 4000);
  });
  