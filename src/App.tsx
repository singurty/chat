import './App.css'

const App = (): JSX.Element => {
  return (
    <>
      <div className="chat-interface">
        <h1>Chat</h1>
        <div className="channel-list">
          <ul>
            <li>#general</li>
            <li>#random</li>
            <li>#help</li>
          </ul>
        </div>
        <div className="chat-window">
          <ul>
            <li>
              John: Hello!
            </li>
            <li>
              Jane: Hi!
            </li>
          </ul>
        </div>
        <form className='chat-input'>
          <input id='chat-input' type="text" />
          <button type='submit'>Send</button>
        </form>
      </div>
    </>
  )
}

export default App;