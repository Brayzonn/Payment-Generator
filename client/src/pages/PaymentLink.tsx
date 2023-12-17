import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"

const PaymentLink = () => {

    const storedData: string | null = sessionStorage.getItem('tradingViewWidget');
    const [cachedLinkData, setCachedLinkData] = useState<object | null>(null); 

    const navigate = useNavigate()

    useEffect(()=>{
        getLinkData()
        console.log(cachedLinkData)
    }, []);

    const getLinkData = async () => {
        try {
            //check if data is already in local storage
            if(storedData){
                const parsedData : object = JSON.parse(storedData);
                setCachedLinkData(parsedData)
            }else{
                setTimeout(() => {
                    navigate('/')
                }, 4000);
            }      
        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <div>PaymentLink</div>
  )
}

export default PaymentLink