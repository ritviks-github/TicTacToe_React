import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [infoStyle,setInfoStyle] = useState({
    color: "red",
  }); 
  const [info,setInfo] = useState("Player1");
  const [t1,sett1] = useState("-1");
  const [t2,sett2] = useState("-1");
  const [t3,sett3] = useState("-1");
  const [t4,sett4] = useState("-1");
  const [t5,sett5] = useState("-1");
  const [t6,sett6] = useState("-1");
  const [t7,sett7] = useState("-1");
  const [t8,sett8] = useState("-1");
  const [t9,sett9] = useState("-1");
  const clickt1 = ()=>{
    if(infoStyle.color == "red" && t1 == -1){
      sett1("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t1 == -1){
      sett1("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt2 = ()=>{
    if(infoStyle.color == "red" && t2 == -1){
      sett2("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t2 == -1){
      sett2("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt3 = ()=>{
    if(infoStyle.color == "red" && t3 == -1){
      sett3("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t3 == -1){
      sett3("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt4 = ()=>{
    if(infoStyle.color == "red" && t4 == -1){
      sett4("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t4 == -1){
      sett4("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt5 = ()=>{
    if(infoStyle.color == "red" && t5 == -1){
      sett5("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t5 == -1){
      sett5("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt6 = ()=>{
    if(infoStyle.color == "red" && t6 == -1){
      sett6("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t6 == -1){
      sett6("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt7 = ()=>{
    if(infoStyle.color == "red" && t7 == -1){
      sett7("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t7 == -1){
      sett7("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt8 = ()=>{
    if(infoStyle.color == "red" && t8 == -1){
      sett8("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t8 == -1){
      sett8("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const clickt9 = ()=>{
    if(infoStyle.color == "red" && t9 == -1){
      sett9("1");
      setInfoStyle({
        color:"blue"
      });
      setInfo("Player2");
    }
    else if(t9 == -1){
      sett9("0");
      setInfoStyle({color:"red"});
      setInfo("Player1");
    }
  }
  const check = ()=>{
    let arr = [];
    let twoD = [];
    arr.push(t1);
    arr.push(t2);
    arr.push(t3);
    twoD.push(arr);
    let arr2 = [];
    arr2.push(t4);
    arr2.push(t5);
    arr2.push(t6);
    twoD.push(arr2);
    let arr3 = [];
    arr3.push(t7);
    arr3.push(t8);
    arr3.push(t9);
    twoD.push(arr3);
    console.log(twoD);
    let flag = 0;
    if(twoD[0][0] == '1' && twoD[0][1] == '1' && twoD[0][2] == '1'){
      flag = 1; 
    }
    else if(twoD[1][0] == '1' && twoD[1][1] == '1' && twoD[1][2] == '1'){
      flag = 1;
    }
    else if(twoD[2][0] == '1' && twoD[2][1] == '1' && twoD[2][2] == '1'){
      flag = 1;
    }
    else if(twoD[0][0] == '1' && twoD[1][0] == '1' && twoD[2][0] == '1'){
      flag = 1;
    }
    else if(twoD[0][1] == '1' && twoD[1][1] == '1' && twoD[2][1] == '1'){
      flag = 1;
    }
    else if(twoD[0][2] == '1' && twoD[1][2] == '1' && twoD[2][2] == '1'){
      flag = 1;
    }
    else if(twoD[0][0] == '1' && twoD[1][1] == '1' && twoD[2][2] == '1'){
      flag = 1;
    }
    else if(twoD[0][2] == '1' && twoD[1][1] == '1' && twoD[2][0] == '1'){
      flag = 1;
    }
    
    if(twoD[0][0] == '0' && twoD[0][1] == '0' && twoD[0][2] == '0'){
      flag = 2; 
    }
    else if(twoD[1][0] == '0' && twoD[1][1] == '0' && twoD[1][2] == '0'){
      flag = 2;
    }
    else if(twoD[2][0] == '0' && twoD[2][1] == '0' && twoD[2][2] == '0'){
      flag = 2;
    }
    else if(twoD[0][0] == '0' && twoD[1][0] == '0' && twoD[2][0] == '0'){
      flag = 2;
    }
    else if(twoD[0][1] == '0' && twoD[1][1] == '0' && twoD[2][1] == '0'){
      flag = 2;
    }
    else if(twoD[0][2] == '0' && twoD[1][2] == '0' && twoD[2][2] == '0'){
      flag = 2;
    }
    else if(twoD[0][0] == '0' && twoD[1][1] == '0' && twoD[2][2] == '0'){
      flag = 2;
    }
    else if(twoD[0][2] == '1' && twoD[1][1] == '1' && twoD[2][0] == '1'){
      flag = 2;
    }
    if(flag == 1){
      alert("Player 1 Won");
    }
    if(flag == 2){
      alert("Player 2 Won");
    }
  }
  return (
    <>
      <div id="main">
        <div id="col1">
          <table border = "1">
            <tr>
              <td onClick={clickt1}>{t1}</td>
              <td onClick={clickt2}>{t2}</td>
              <td onClick={clickt3}>{t3}</td>
            </tr>
            <tr>
              <td onClick={clickt4}>{t4}</td>
              <td onClick={clickt5}>{t5}</td>
              <td onClick={clickt6}>{t6}</td>
            </tr>
            <tr>
              <td onClick={clickt7}>{t7}</td>
              <td onClick={clickt8}>{t8}</td>
              <td onClick={clickt9}>{t9}</td>
            </tr>
          </table>
        </div>
        <div id="col2">
          <span id="player" style={infoStyle}>{info}</span>
          <button onClick={check}>Validate Winner</button>
        </div>
      </div>
    </>
  );
}
export default App;