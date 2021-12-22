import "./whether.css"
import moment from "moment"
const City = ({city}) => {
    console.log(city)
    return (

    <div className="widget">
            
            <div className="left-panel panel">
                <div className="date">
                    {moment().format('dddd')}
                </div>
                <div className="city">
                    {city.name}
                </div>
                <div className="temp">
                   <img src="https://s5.postimg.cc/yzcm7htyb/image.png" alt="" width="60" />
                   {Math.round(city.temp)}&deg;
                </div>
            </div>
            <div className="right-panel panel">
                <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt="" width="160" />
            </div>

        </div>
        )
}

export default City