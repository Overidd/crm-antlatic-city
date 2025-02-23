import './LogoText.css'
import TextImage from '/logo/TextLogo2.png'

export const LogoText = () => {
   return (
      <div className="logo">
         <img src={TextImage} alt="" />
      </div>
   )
}


{/* 
   <div className="logo">
   <img src={TextImage} alt="" />
   <div className="main-text">ATLANTIC CITY</div>
   <div className="sub-text">CASINO & SPORTS</div>
</div> 
*/}
