import ReactAudioPlayer from "react-audio-player";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://image.flaticon.com/icons/png/512/86/86508.png' className="App-logo" alt="logo"/>

        <ReactAudioPlayer
          src="/Марко Поло - Звёздные капитаны.mp3"
          controls
        />

        <p className='greeting'>
          Вы вошли на земли клана United Underground
        </p>
        <p className='description'>
          <span> Гости и бойцы рангом ниже Офицеров ниспособны пока осознать все великолепие увиденного.</span>
          <br/>
          <span> В ближайшее время заручившись поддержкой наших союзников Мы расширим свое влияние и в тот момент даже нижшим
          простолюдинам будет дарована возможность узреть величие Клана.
          </span>
        </p>
        <p>
          <span className='help'>
            нужно что-то придусать, а то мне в лом((
          </span>
        </p>
      </header>
    </div>
  )
}

export default Home;
