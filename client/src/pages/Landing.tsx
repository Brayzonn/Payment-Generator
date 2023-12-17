import {  useState } from "react"
import { useNavigate} from "react-router-dom"
import axios from 'axios'

const Landing = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [processing, updateLinkProcessing] = useState<boolean | null>(null)

  const navigate = useNavigate()

  const cachedLinkData = sessionStorage.getItem('tradingViewWidget');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const generateLink = async () => {

    try {

      updateLinkProcessing(true)

      //check if data is already in local storage
      if(cachedLinkData){
         return navigate('/paymentlink')
      }else{
        // Fetch link data 
        const userResponse = await axios.post(`http://localhost:2300/api/generatelink`);
        const userData = userResponse.data;

        //stringify data, save to session storage then navigate to payment page
        const serializedUserData = JSON.stringify(userData)
        
        sessionStorage.setItem('tradingViewWidget', serializedUserData);

        updateLinkProcessing(false)

        navigate('/paymentlink')
      }    
    } catch (error) {
        console.log('could not generate link, something went wrong', error)
    }

  } 

  return (
    <div></div>
  )
}

export default Landing