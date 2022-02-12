import logo from './logo.svg';
import './App.css';

function App() {
  const token = 'BQB397QEccQpAEhlIIE-Cac8vKFexj1UACJbjsqONMnoCwLsNBHAqiDshRH3h61bv5VaN5ZTD-CsKCDp5w_nOT9Hpti7Zb0rXeo0ZU-6DRycZqN0tluA23TaVkW5iBIRbixtRWElyDdCWkKwnv5IP-ZWQ5ZKzhcNvsG8HQh0';
    fetch('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
        Authorization: `Bearer BQB397QEccQpAEhlIIE-Cac8vKFexj1UACJbjsqONMnoCwLsNBHAqiDshRH3h61bv5VaN5ZTD-CsKCDp5w_nOT9Hpti7Zb0rXeo0ZU-6DRycZqN0tluA23TaVkW5iBIRbixtRWElyDdCWkKwnv5IP-ZWQ5ZKzhcNvsG8HQh0`
        }
        })
    .then(res => res.json())
    .then(json => console.log(json));
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
