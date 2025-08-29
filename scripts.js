function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', () => {
  // Get the modal elements
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('video-iframe');
  const closeButton = document.getElementById('close-button');

  // Get all project figures that trigger the video
  const videoTriggers = document.querySelectorAll('.video-trigger');

  // Function to open the modal
  const openModal = (videoSrc) => {
    iframe.src = videoSrc + "?autoplay=1"; // Add autoplay to the URL
    modal.style.display = 'flex';
  };

  // Function to close the modal
  const closeModal = () => {
    modal.style.display = 'none';
    iframe.src = ''; // Stop the video from playing in the background
  };

  // Add click event to each video trigger
  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const videoSrc = trigger.getAttribute('data-video-src');
      openModal(videoSrc);
    });
  });

  // Add click event to the close button
  closeButton.addEventListener('click', closeModal);

  // Close modal if user clicks on the background overlay
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});