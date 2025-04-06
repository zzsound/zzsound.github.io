// src/components/RevealEmail.js
export function initEmailReveal() {
    const button = document.getElementById('emailButton');
    const display = document.getElementById('emailDisplay');
    
    if (button && display) {
      button.addEventListener('click', () => {
        const local = button.dataset.emailLocal;
        const domain = button.dataset.emailDomain;
        const fullEmail = `${local}@${domain}`;
        
        display.innerHTML = `<a href="mailto:${fullEmail}">${fullEmail}</a>`;
        display.style.display = 'inline';
        button.style.display = 'none';
      });
    }
  }