 document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    
    let isDragging = false;
    let startX;
    let scrollLeft;
    
    wrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - wrapper.offsetLeft;
      scrollLeft = wrapper.scrollLeft;
      wrapper.style.cursor = 'grabbing';
    });
    
    wrapper.addEventListener('mouseleave', () => {
      isDragging = false;
      wrapper.style.cursor = 'grab';
    });
    
    wrapper.addEventListener('mouseup', () => {
      isDragging = false;
      wrapper.style.cursor = 'grab';
    });
    
    wrapper.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - wrapper.offsetLeft;
      const walk = (x - startX) * 0.7; // Reduced scroll speed factor
      wrapper.scrollLeft = scrollLeft - walk;
    });
  });

  // produktebi   // produktebi   // produktebi 

function truncateText(element, maxHeight) {
  const originalText = element.innerHTML;
  const words = originalText.split(" ");
  let truncatedText = "";

  element.style.overflow = "hidden";
  element.style.display = "-webkit-box";
  element.style.webkitBoxOrient = "vertical";
  element.style.webkitLineClamp = "none";

  for (let i = 0; i < words.length; i++) {
    truncatedText += words[i] + " ";
    element.innerHTML = truncatedText.trim() + "...";

    if (element.scrollHeight > maxHeight) {
      truncatedText = truncatedText.trim().split(" ").slice(0, -1).join(" ");
      element.innerHTML = truncatedText + "...";
      break;
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".card-description p");
  paragraphs.forEach((p) => truncateText(p, 95));
});
// meoreslaidi

document.addEventListener('DOMContentLoaded', function() {
    const awards = document.querySelector('.awards');
    
    let isDragging = false;
    let startX;
    let scrollLeft;
    
    awards.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - awards.offsetLeft;
      scrollLeft = awards.scrollLeft;
      awards.style.cursor = 'grabbing';
    });
    
    awards.addEventListener('mouseleave', () => {
      isDragging = false;
      awards.style.cursor = 'grab';
    });
    
    awards.addEventListener('mouseup', () => {
      isDragging = false;
      awards.style.cursor = 'grab';
    });
    
    awards.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - awards.offsetLeft;
      const walk = (x - startX) * 0.7; // Reduced scroll speed factor
      awards.scrollLeft = scrollLeft - walk;
    });
  });






