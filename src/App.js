import './App.css';
import React, {useState} from 'react';


function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [disableEnter, setDisableEnter] = useState(true);
  const [status, setStatus] = useState('080から始まる11桁 または 0から始まる10桁で入力してください')
  function toggleDisableEnter(){
    if(phoneNumber[0] === '0' && phoneNumber[2] === '0' && phoneNumber.length === 11){
      // 0x0から始まって11桁のときはok
      setDisableEnter(false)
      setStatus('')
    }else if(phoneNumber[0] === '0' && phoneNumber.length === 10){
      // 0から始まって10桁のときはok
      setDisableEnter(false)
      setStatus('')
    }else{
      // それ以外ならenterキーはdisabledにする
      setDisableEnter(true)
      setStatus('080から始まる11桁 または 0から始まる10桁で入力してください');
    }
  }
  
  function handleNumberButton(type) {
    if(type==='d'){//delete key
      setPhoneNumber(phoneNumber.slice(0,-1))
    }else if(type==='e'){//enter key
      console.log('エンターキーが押されました')
    }
    else{
      // 文字がいっぱいの時
      if(phoneNumber.length >= 11){
        console.log('番号がいっぱいです')
      }else{
        // 番号追加
        setPhoneNumber(phoneNumber+type)
      }
    }
    // エンターキーの状態を更新
    toggleDisableEnter();
  }
  return (
    
    <div className="App">
      <div className=".o-input--num-display">
        <h2>電話番号を入力してください</h2>
        <h4>please enter your phone number</h4>
        <div className='phone-number'>
          <div className='number1'><p className='=number1'>{phoneNumber[0]}</p></div>
          <div className='number2'><p className='=number2'>{phoneNumber[1]}</p></div>
          <div className='number3'><p className='=number3'>{phoneNumber[2]}</p></div>
          <div className='number4'><p className='=number4'>{phoneNumber[3]}</p></div>
          <div className='number5'><p className='=number5'>{phoneNumber[4]}</p></div>
          <div className='number6'><p className='=number6'>{phoneNumber[5]}</p></div>
          <div className='number7'><p className='=number7'>{phoneNumber[6]}</p></div>
          <div className='number8'><p className='=number8'>{phoneNumber[7]}</p></div>
          <div className='number9'><p className='=number9'>{phoneNumber[8]}</p></div>
          <div className='number10'><p className='=number10'>{phoneNumber[9]}</p></div>
          <div className='number11'><p className='=number11'>{phoneNumber[10]}</p></div>
          
        </div>
      </div>
      <div className='number-buttons'>
        <button className='key-button' id='keypad-1' onClick={() => handleNumberButton(1)}>1</button>
        <button className='key-button' id='keypad-2' onClick={() => handleNumberButton(2)}>2</button>
        <button className='key-button' id='keypad-3' onClick={() => handleNumberButton(3)}>3</button>
        <button className='key-button' id='keypad-4' onClick={() => handleNumberButton(4)}>4</button>
        <button className='key-button' id='keypad-5' onClick={() => handleNumberButton(5)}>5</button>
        <button className='key-button' id='keypad-6' onClick={() => handleNumberButton(6)}>6</button>
        <button className='key-button' id='keypad-7' onClick={() => handleNumberButton(7)}>7</button>
        <button className='key-button' id='keypad-8' onClick={() => handleNumberButton(8)}>8</button>
        <button className='key-button' id='keypad-9' onClick={() => handleNumberButton(9)}>9</button>
        <button className='key-button' id='keypad-delete' onClick={() => handleNumberButton('d')}>delete</button>
        <button className='key-button' id='keypad-0' onClick={() => handleNumberButton(0)}>0</button>
        <button disabled={disableEnter} className='key-button' id='keypad-enter' onClick={() => handleNumberButton('e')}>enter</button>
      </div>
      <p className='status-message'>{status}</p>
    </div>
  );
}

export default App;
