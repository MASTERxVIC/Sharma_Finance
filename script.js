//News Update 
const url = "https://newsdata.io/api/1/latest?apikey=pub_47568e9a564c59103be8ac22bab19873988e9&q=pizza";
const options ={ 
    method:"GET",
};

async function refreshNews() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // Select the target container to display the news articles
        const jsonDataContainer = document.getElementsByClassName("news")[0];
        jsonDataContainer.innerHTML = ""; // Clear previous content

        // Assume result contains an array of articles in 'result.results'
        const articles = result.results;
        articles.forEach(article => {
            // Create article elements
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article");

            // Add article title
            const title = document.createElement("h3");
            title.textContent = article.title;
            articleDiv.appendChild(title);

            // Add article description
            const description = document.createElement("p");
            description.textContent = article.description;
            articleDiv.appendChild(description);

            // Add article link (if available)
            if (article.link) {
                const link = document.createElement("a");
                link.href = article.link;
                link.textContent = "Read More";
                articleDiv.appendChild(link);
            }

            // Append the article div to the container
            jsonDataContainer.appendChild(articleDiv);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


