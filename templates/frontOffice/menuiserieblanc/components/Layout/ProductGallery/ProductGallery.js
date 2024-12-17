export default function ProductGallery() {
  const main = document.getElementById('MainImage');

  const thumbs = document.querySelectorAll('.ProductGallery-thumbnail');

  if (!main || thumbs.length === 0) return null;

  const thumbsSize = 6;
  let firstThumbsId = 0;

  const nextButton = document.querySelector('#nav-next');
  const prevButton = document.querySelector('#nav-prev');

  updateGallery();

  [...thumbs].forEach((img) => {
    img.addEventListener('click', (e) => {
      resetFocus();
      main.src =
        '/legacy-image-library/product_image_' +
        img.dataset.imageId +
        '/full/%5E*!594,594/0/default.webp';

      img.parentNode.classList.add('is-active');
    });
  });

  nextButton.addEventListener('click', () => {
    if (firstThumbsId + thumbsSize < thumbs.length) {
      firstThumbsId++;
      updateGallery();
    }
  });

  prevButton.addEventListener('click', () => {
    if (firstThumbsId > 0) {
      firstThumbsId--;
      updateGallery();
    }
  });

  function resetFocus() {
    [...thumbs].forEach((el) => el.parentNode.classList.remove('is-active'));
  }

  function updateGallery() {
    thumbs.forEach((img, id) => {
      img.parentNode.classList.toggle(
        'hidden',
        id < firstThumbsId || id >= firstThumbsId + thumbsSize
      );
    });

    prevButton.classList.toggle('hidden', firstThumbsId === 0);
    nextButton.classList.toggle(
      'hidden',
      firstThumbsId + thumbsSize >= thumbs.length
    );
  }
}
