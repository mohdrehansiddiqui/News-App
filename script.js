let getweather = () => {
    let search = document.getElementById('searchInput').value;
    axios
      .get(`https://newsapi.org/v2/everything?q=${search}&from=2023-04-25&sortBy=publishedAt&apiKey=5c3829fd492e419eb9c8967a3acd12ff`)
      .then((res) => {
        console.log(res)
        const articles = res.data.articles;
  
        const mainContainer = document.querySelector('main');
        mainContainer.innerHTML = ''; // Clear previous content
  
        articles.forEach((article, index) => {
          const mediaImage = article.urlToImage;
          const title = article.title;
          const desc = article.description;
          const publishedAt = article.publishedAt;
          const url = article.url;
          const card = document.createElement('div');
          card.classList.add('card');
          
          card.addEventListener('click',()=>{
            card.setAttribute("target","_blank")
            window.location.href = url;
          })
  
          const image = document.createElement('img');
          image.src = mediaImage;
          image.alt = 'Article Image';
          card.appendChild(image);
  
          const cardContent = document.createElement('div');
          cardContent.classList.add('card-content');
  
          const titleElement = document.createElement('h2');
          titleElement.textContent = title;
          cardContent.appendChild(titleElement);
  
          const descElement = document.createElement('p');
          descElement.textContent = desc;
          cardContent.appendChild(descElement);
  
          const publishedElement = document.createElement('p');
          publishedElement.textContent = `Published At: ${publishedAt}`;
          cardContent.appendChild(publishedElement);
  
          card.appendChild(cardContent);
          mainContainer.appendChild(card);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   let psl = document.getElementById('psl').value

//   psl.addEventListener(()=>{
//     window.location.href = 'https://wisden.com/stories/global-t20-leagues/pakistan-super-league-2023/psl-2023-schedule-full-fixtures-match-timings-pakistan-super-league#:~:text=PSL%202023%20schedule%3A%20Full%20list%20of%20fixtures%20and,timings%20%7C%20Pakistan%20Super%20League%202023&text=PSL%202023%2C%20the%20eighth%20edition,times%20for%20the%20T20%20tournament.'
//   })