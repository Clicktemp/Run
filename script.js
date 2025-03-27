let countdown = 45;
let timerInterval;

function startIframes() {
    clearInterval(timerInterval);
    countdown = 45;
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
    
    const url = document.getElementById('urlInput').value;
    const container = document.getElementById('container');
    container.innerHTML = '';
    
    for (let i = 0; i < 4; i++) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.onload = () => automateIframe(iframe);
        container.appendChild(iframe);
    }
    
    setTimeout(startIframes, 45000);
}

function updateTimer() {
    document.getElementById('timer').textContent = `Timer: ${countdown}s`;
    countdown--;
}

function automateIframe(iframe) {
    setInterval(() => {
        iframe.contentWindow.scrollBy(0, 50);
    }, 1000);
    
    setInterval(() => {
        const elements = iframe.contentWindow.document.querySelectorAll('body *');
        elements.forEach(el => {
            if (el.textContent.includes('2025')) {
                const event = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                });
                el.dispatchEvent(event);
            }
        });
    }, 2000);
}

function startVideoEmbed() {
    clearTimeout(videoTimer);
    const videoUrl = document.getElementById('videoInput').value;
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';
    
    for (let i = 0; i < 2; i++) {
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.width = "560";
        iframe.height = "315";
        iframe.frameBorder = "0";
        iframe.allow = "autoplay; encrypted-media";
        videoContainer.appendChild(iframe);
    }
    
    videoTimer = setTimeout(startVideoEmbed, 45000);
}
