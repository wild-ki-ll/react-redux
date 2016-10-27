import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <div className="news">
        К сожалению, новостей нет.
      </div>
    );
  }
}

class Comments extends Component {
  render() {
    return (
      <div className="comments">
        Нет новостей - комментировать нечего
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        Всем привет, я компонент App! Я умею отображать новости.
        <News />
        <Comments />
      </div>
    );
  }
}

export default App;
