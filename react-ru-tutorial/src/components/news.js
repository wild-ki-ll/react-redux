import React from 'react'
import './news.css'

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

export const empty_news = [];

const News = (newsList) => {
    let tmp = newsList.data.map(
        ({author, text}, index) => 
            <div key={index}>
                <p className="news_author">{author}: {text}</p>
            </div> 
    )

    return (
        <div className="news_list"> 
            {tmp}
            <strong className={newsList.data.length > 0 ? '':'none'}>Всего новостей: {newsList.data.length}</strong>
        </div>
    )  
}

export default News