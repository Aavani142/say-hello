
anime({
  targets: '#illustration',
  translateX: [-200, 0],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1200
});


anime({
  targets: '#content',
  translateY: [30, 0],
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1200,
  delay: 400
});


document.getElementById('helloBtn').addEventListener('mouseenter', () => {
  anime({
    targets: '#helloBtn',
    scale: [1, 1.1],
    duration: 200,
    easing: 'easeInOutQuad'
  });
});
document.getElementById('helloBtn').addEventListener('mouseleave', () => {
  anime({
    targets: '#helloBtn',
    scale: 1,
    duration: 200,
    easing: 'easeInOutQuad'
  });
});
