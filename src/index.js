// import css from './index.css'
import css from './css/index.less'
import pic from './images/dixiashi.png'
import axios from 'axios'
const img = new Image()
img.src = pic
const root = document.getElementById('app')
root.appendChild(img)
console.log("webpack index");

axios.get('localhost:9092/xyx/info').then(res=> {
  console.log(res)
})

// 图片 file-loader url-loader(基于file-loader的加强版 增加了limit)
// 改变图片存储位置