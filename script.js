const quoteElement = document.getElementById('quote');
        const authorElement = document.getElementById('author');
        const newQuoteBtn = document.getElementById('new-quote-btn');
        
        newQuoteBtn.addEventListener('click', getQuote);
        
        function getQuote() {
            // Make an API request to fetch a random quote
            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    quoteElement.textContent = data.content;
                    authorElement.textContent = data.author;
                })
                .catch(error => {
                    quoteElement.textContent = 'Failed to fetch a quote';
                    authorElement.textContent = '';
                });
        }
        
        // Initial quote on page load
        getQuote();