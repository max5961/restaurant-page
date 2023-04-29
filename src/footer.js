export function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('social-media-links');
    
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');

    img1.src = './images/icon-facebook.svg';
    img2.src = './images/icon-instagram.svg';
    img3.src = './images/icon-twitter.svg';

    img1.alt = 'facebook';
    img2.alt = 'instagram';
    img3.alt = 'twitter';

    socialMedia.appendChild(img1);
    socialMedia.appendChild(img2);
    socialMedia.appendChild(img3);

    footer.appendChild(socialMedia);

    const content = document.getElementById('content');
    content.appendChild(footer);
}