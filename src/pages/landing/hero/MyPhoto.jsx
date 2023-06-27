import express from '../../../assets/img/express.png'
import javascript from '../../../assets/img/javascript.png'
import nodeJs from '../../../assets/img/node-js.png'
import react from '../../../assets/img/react.png'
import arpon from '/arpon.png'
const MyPhoto = () => {
  const technologyImages = [express, javascript, react, nodeJs]
  return (
    <div
      className="h-72 w-72 bg-no-repeat bg-cover rounded-full flex justify-between"
      style={{ backgroundImage: `url(${arpon})` }}
    >
      <img src={nodeJs} className="h-12 iconPhoto -m-16" />
      <img src={javascript} className="h-12 iconPhoto -m-8" />
      <img src={react} className="h-12 iconPhoto -m-10" />
      <img src={express} className="h-12 iconPhoto -m-10" />
    </div>
  )
}

export default MyPhoto
