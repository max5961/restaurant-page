import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import github from './images/icon-github.svg';

export function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const socialMedia = document.createElement('div');
    socialMedia.classList.add('social-media-links');
    
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const img4 = document.createElement('img');

    img1.src = facebook;
    img2.src = instagram;
    img3.src = twitter;
    img4.src = github;

    img1.alt = 'facebook';
    img2.alt = 'instagram';
    img3.alt = 'twitter';
    img4.alt = 'github';
    
    img4.style.width = '20px';
    img4.style.height = '20px';
    

    socialMedia.appendChild(img1);
    socialMedia.appendChild(img2);
    socialMedia.appendChild(img3);
    socialMedia.appendChild(img4);

    footer.appendChild(socialMedia);

    const content = document.getElementById('content');
    content.appendChild(footer);
}