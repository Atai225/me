import './App.css';
import img1 from './images/photo_2022-04-29_13-23-01.jpg'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <h3 className="name">Atai <br/> Zhana - <br/> Bilov</h3>

        <div className="skrip__block">
            <img src={img1} alt="" className="scrip__img-1" />
            <span className="text-skrip">
                atai <br/>
                - <br/>
                atai
            </span>
            <img src={img1} alt='' className="scrip__img-2" />
        </div>
        <div className="photos">
            <h3 className="photos-title">Photos</h3>
            <div className="photos__images">
                <img src={img1} alt="" />
                <img src={img1} alt="" />
                <img src={img1} alt="" />
                <img src={img1} alt="" />
            </div>
        </div>

        <div className="char">
            <h3 className="char3">Характерстики</h3>
            <ul className="ch__list">
                <li className="ch__item">
                    <p className="ch__name">Харизма</p>
                    <p className="ch__name">Ебал харизму</p>
                </li>
                <li className="ch__item">
                    <p className="ch__name">Внешность</p>
                    <p className="ch__name">Гига Чад</p>
                </li>
                <li className="ch__item">
                    <p className="ch__name">Тело</p>
                    <p className="ch__name">
                         Шварцнеггер в ахуе<br/>
                    </p>
                </li>
                <li className="ch__item">
                    <p className="ch__name">Мозги</p>
                    <p className="ch__name">Работают</p>
                </li>
                <li className="ch__item">
                    <p className="ch__name">Доброта</p>
                    <p className="ch__name">Э не нахуй</p>
                </li>
                <li className="ch__item">
                    <p className="ch__name">Милота</p>
                    <p className="ch__name">100%</p>
                </li>
                <li className="ch__item">
                    <p className="ch__name">Защита</p>
                    <p className="ch__name">Топ дифендер</p>
                </li>
            </ul>
        </div>

        <div className="pj">
            <h3 className="pj__title">Пожелание от разработчика</h3>
            <h3 className="pj__title2">НЕ СДО-<br/>ХНИ РАНЬ-<br/>ШЕ ВРЕ-<br/>МЕНИ</h3>
            <img src={img1} alt=""/>
        </div>
    </div>
    </div>
  );
}

export default App;
