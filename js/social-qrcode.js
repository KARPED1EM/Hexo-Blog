/**
 * Social QR Code Fancybox Handler
 * Add Fancybox image display functionality for QQ and WeChat social links
 */

document.addEventListener('DOMContentLoaded', function() {
  // Select all links with data-fancybox="social-qrcode"
  const qrcodeLinks = document.querySelectorAll('a[data-fancybox="social-qrcode"]');

  qrcodeLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default navigation

      const imageUrl = this.getAttribute('href');
      const title = this.getAttribute('title') || '';

      // Display image with Fancybox
      if (typeof Fancybox !== 'undefined') {
        Fancybox.show([{
          src: imageUrl,
          type: 'image',
          caption: title
        }]);
      } else {
        // Fallback to window.open if Fancybox is not loaded
        console.warn('Fancybox is not loaded, falling back to window.open');
        window.open(imageUrl, '_blank');
      }
    });
  });
});
