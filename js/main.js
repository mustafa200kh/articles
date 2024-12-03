// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');



// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Articles page functionality
if (document.getElementById('articlesList')) {
    const articlesList = document.getElementById('articlesList');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Load all articles
    function loadArticles(category = 'all') {
        articlesList.innerHTML = '';
        
        Object.values(articlesData).forEach(article => {
            if (category === 'all' || article.category.toLowerCase() === category) {
                const articleElement = document.createElement('article');
                articleElement.className = 'article-item';
                articleElement.setAttribute('data-category', article.category.toLowerCase());
                
                articleElement.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <div class="article-content">
                        <h3>${article.title}</h3>
                        <p class="article-meta">By ${article.author} | ${article.category} | ${article.readTime}</p>
                        <p class="article-excerpt">${article.content.split('</p>')[0].replace('<p>', '')}</p>
                        <a href="article.html?id=${article.id}" class="read-more">Read More</a>
                    </div>
                `;
                
                articlesList.appendChild(articleElement);
            }
        });
    }

    // Initialize articles
    loadArticles();

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            loadArticles(button.getAttribute('data-category'));
        });
    });
}

// Single article page functionality
if (document.getElementById('articleContent')) {
    const articleContent = document.getElementById('articleContent');
    const relatedArticles = document.getElementById('relatedArticles');
    
    // Get article ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId && articlesData[articleId]) {
        const article = articlesData[articleId];
        
        // Update page title
        document.title = `${article.title} - E-Magazine`;
        
        // Load article content
        articleContent.innerHTML = `
            <header class="article-header">
                <h1>${article.title}</h1>
                <div class="article-meta">
                    <span class="author">By ${article.author}</span>
                    <span class="date">${article.date}</span>
                    <span class="category">${article.category}</span>
                    <span class="read-time">${article.readTime}</span>
                </div>
                <img src="${article.image}" alt="${article.title}" class="article-main-image">
            </header>

            <div class="article-content">
                ${article.content}
            </div>

            <div class="article-tags">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>

            <div class="share-buttons">
                <h3>Share this article</h3>
                <button class="share-btn facebook"><i class="fab fa-facebook"></i> Share</button>
                <button class="share-btn twitter"><i class="fab fa-twitter"></i> Tweet</button>
                <button class="share-btn linkedin"><i class="fab fa-linkedin"></i> Share</button>
            </div>
        `;
        
        // Load related articles
        if (article.relatedArticles) {
            relatedArticles.innerHTML = article.relatedArticles.map(relatedId => {
                const related = articlesData[relatedId];
                return `
                    <article class="article-card">
                        <img src="${related.image}" alt="${related.title}">
                        <h3>${related.title}</h3>
                        <p>${related.content.split('</p>')[0].replace('<p>', '')}</p>
                        <a href="article.html?id=${related.id}" class="read-more">Read More</a>
                    </article>
                `;
            }).join('');
        }
    } else {
        articleContent.innerHTML = '<h1>Article not found</h1>';
    }
}

// Latest articles slider functionality
const slider = document.querySelector('.articles-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for article cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.article-card').forEach(card => {
    observer.observe(card);
});
