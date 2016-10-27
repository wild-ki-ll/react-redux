import React            from 'react'
import News, {my_news}  from './news'
import Comments         from './comment'

let App = () => (
    <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News data={my_news} />
        <Comments />
    </div>
)

export default App;