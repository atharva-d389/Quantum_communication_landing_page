document.addEventListener("DOMContentLoaded", function() {
    const progressDiv = document.querySelector('.Progress');
    const infoDiv = document.querySelector('.info');
    let isProgressVisible = true;

    function toggleVisibility() {
        if (isProgressVisible) {
            progressDiv.classList.add('fade-out');
            infoDiv.classList.remove('fade-out');
            infoDiv.classList.add('fade-in');
        } else {
            progressDiv.classList.remove('fade-out');
            progressDiv.classList.add('fade-in');
            infoDiv.classList.add('fade-out');
            infoDiv.classList.remove('fade-in');
        }
        isProgressVisible = !isProgressVisible;
    }

    // Start the loop
    setInterval(toggleVisibility, 5000); // 5 seconds
});

const rssFeedUrl = 'https://news.google.com/rss/search?q=quantum+communication&hl=en-IN&gl=IN&ceid=IN:en';

document.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeedUrl)}`)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            const maxArticles = 5;
            data.items.slice(0, maxArticles).forEach(item => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('news-article');
                
                const articleTitle = document.createElement('h3');
                articleTitle.textContent = item.title;
                
                const articleDescription = document.createElement('p');
                articleDescription.textContent = item.description || 'No description available.';
                
                const articleLink = document.createElement('a');
                articleLink.href = item.link;
                articleLink.textContent = 'Read more';
                articleLink.target = '_blank';
                
                articleDiv.appendChild(articleTitle);
                articleDiv.appendChild(articleDescription);
                articleDiv.appendChild(articleLink);
                
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});
