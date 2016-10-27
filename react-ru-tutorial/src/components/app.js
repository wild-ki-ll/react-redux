import React    from 'react'
import News     from './news'
import Comments from './comment'

let App = () => (
    <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News />
        <Comments />
    </div>
)

export default App;