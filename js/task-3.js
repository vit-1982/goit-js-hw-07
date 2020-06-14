const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('#gallery');

// const createImages = images.reduce(
//   (string, { url, alt }) =>
//     string + `<li ><img src="${url}" alt="${alt}" class="image"></li>`,
//   '',
// );

// listRef.insertAdjacentHTML('beforeend', createImages);

const createGalleryItem = ({ url, alt }) => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('gallery_item');

  const imageRef = document.createElement('img');
  imageRef.classList.add('image');
  imageRef.src = url;
  imageRef.alt = alt;

  itemRef.appendChild(imageRef);

  return itemRef;
};

// console.log(imageItem(images[1]));
const imageList = images.map(image => createGalleryItem(image));

listRef.append(...imageList);
