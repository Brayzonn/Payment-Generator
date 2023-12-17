import { Request, Response, NextFunction } from 'express'


//models
import userModel from '../models/usermodel'

//env variable
require('dotenv').config();

const getLinkData = async (req: Request, res: Response , next: NextFunction ) =>{

    const {linkID} = req.body;

    try {
        const fetchLink = await userModel.findOne({_id: linkID})

        if(!fetchLink){
           return res.status(200).json({success: false, message: 'Link unavailable, please generate new link.' });
        }else{
            return res.status(200).json({success: true, data: fetchLink });
        }
    } catch (error) {
        
    }

}

const generateLink = async (req: Request, res: Response , next: NextFunction) => {

    const {paymentChannel, paymentAddress,
    paymentAmount, payerName}         = req.body;
    
    try {

        if(!paymentChannel || !paymentAddress || !paymentAmount || !payerName){
           return res.status(200).json({success: false, message: 'Complete all fields' });
        }

        const UserRequest = new userModel({
            paymentChannel: paymentChannel,
            paymentAddress : paymentAddress,
            paymentAmount: paymentAmount,
            payerName: payerName,
        })

        await UserRequest.save()

        return res.status(200).json({success: true, 
                                    message: 'Crptocurrency Payment Channel Generated', 
                                    bodyData: UserRequest ? UserRequest : {}
                                    })
    } catch (error) {
        res.status(500).json({success: false, message: 'Internal server error' });
    }  
    
}


export { generateLink, getLinkData };