import mongoose, { Schema, Document } from 'mongoose';

interface schemaType extends Document {
    username: string;
    userIp: string;
    email: string;
    password: string;
    paymentChoice: string;
    paymentChannel: string;
    paymentAddress: string;
    paymentAmount: number;
    payerName: string;
    timeout: number;
    expDate: Date;
}

const userSchema: Schema<schemaType> = new Schema({
    username: String,
    userIp: String,
    email: String,
    password: String,
    paymentChoice: String,
    paymentChannel: String,
    paymentAddress: String,
    paymentAmount: Number,
    payerName: String,
    timeout: Number,
    expDate: { type: Date, default: Date.now}
});

const userModel = mongoose.model<schemaType>('userModel', userSchema);

// Access the raw MongoDB collection and create a TTL index to delete object 30 mins after creation
userModel.collection.createIndex({ expDate: 1 }, { expireAfterSeconds: 1800 })

export default userModel;
