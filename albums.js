const albums = {
    album1: [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        'path/to/image10.jpg',
        'path/to/image11.jpg',
        'path/to/image12.jpg'
    ],
    album2: [
        'path/to/image4.jpg',
        'path/to/image5.jpg',
        'path/to/image6.jpg',
        'path/to/image13.jpg',
        'path/to/image14.jpg',
        'path/to/image15.jpg'
    ],
    album3: [
        'path/to/image7.jpg',
        'path/to/image8.jpg',
        'path/to/image9.jpg',
        'path/to/image16.jpg',
        'path/to/image17.jpg',
        'path/to/image18.jpg'
    ]
};

function openAlbum(album) {
    const modal = document.getElementById('album-modal');
    const modalImages = document.getElementById('modal-images');
    modalImages.innerHTML = '';

    albums[album].forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        modalImages.appendChild(imgElement);
    });

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('album-modal').style.display = 'none';
}
