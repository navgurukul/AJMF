document.addEventListener('DOMContentLoaded', () => {
  const previewVid = document.getElementById('heroPreviewVideo');
  const watchBtn = document.getElementById('watchHeroVideoBtn');
  const videoModal = document.getElementById('fullVideoModal');
  const closeBtn = document.getElementById('closeVideoModalBtn');
  const backdrop = document.getElementById('videoModalBackdrop');
  const fullVid = document.getElementById('fullVideoPlayer');

  // 1. Two-Minute Video Preview Limit (Max 120 seconds)
  const MAX_PREVIEW_TIME = 120; // 120 seconds (2 minutes)
  if (previewVid) {
    previewVid.addEventListener('timeupdate', () => {
      if (previewVid.currentTime >= MAX_PREVIEW_TIME) {
        previewVid.pause(); // Automatically stop preview at 120 seconds on final frame
        previewVid.currentTime = MAX_PREVIEW_TIME; // Hold final frame without restart or loop
      }
    });

    previewVid.addEventListener('ended', () => {
      previewVid.pause();
    });
  }

  // 2. Open Full Video Experience Modal
  function openModal() {
    if (!videoModal || !fullVid) return;

    // Pause background preview video
    if (previewVid && !previewVid.paused) {
      previewVid.pause();
    }

    videoModal.classList.add('is-active');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Play complete video with sound from the beginning
    fullVid.currentTime = 0;
    fullVid.muted = false;
    fullVid.play().catch(err => {
      console.log('Video playback notice:', err);
    });
  }

  // 3. Close Full Video Modal
  function closeModal() {
    if (!videoModal || !fullVid) return;
    videoModal.classList.remove('is-active');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Immediately pause video and stop audio
    fullVid.pause();
  }

  if (watchBtn) watchBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Close modal on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('is-active')) {
      closeModal();
    }
  });
});
