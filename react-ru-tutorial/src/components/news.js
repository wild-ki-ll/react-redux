import React from 'react'

export const my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
  }
];

const News = (newsList) => {
    let tmp = newsList.data.map(
        ({author, text}, index) => 
            <div key={index}>
                <p className="news_author">{author}:</p>
                <p className="news_text">  {text}</p>
            </div> 
    )

    return (
        <div className="news_list"> 
            {tmp}
        </div>
    )  
}

export default News