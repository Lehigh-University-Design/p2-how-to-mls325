const track = document.getElementById("image-track");

window.onmousedown = e => {
   track.dataset.mouseDownAt = e.clientX;
}

const onmouseup = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const onmousemove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
//   // Apply both translateX for scroll and translateY for navigation in the same transform
//   const translateY = window.getComputedStyle(track).transform.match(/translateY\(([^)]+)\)/) ? window.getComputedStyle(track).transform.match(/translateY\(([^)]+)\)/)[1] : '0';
  
  track.animate({
    transform: `translate(${nextPercentage}%, ${translateY})`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.addEventListener('mouseup', onmouseup);
window.addEventListener('mousemove', onmousemove);
