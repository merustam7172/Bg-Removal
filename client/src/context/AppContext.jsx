import { createContext, useState } from "react";
import {useAuth, useClerk, useUser} from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    
    const [credits, setCredits] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [image, setImage] = useState(false);
    const [resultImage, setResultImage] = useState(false);

    const {getToken} = useAuth();
    const {isSignedIn} = useUser();
    const {openSignIn} = useClerk();
    const navigate = useNavigate();


    const loadCreditsData = async() => {
        try {
            const token = await getToken();
            const {data} = await axios.get(backendUrl+'/api/user/credits', {headers : {token}});

            if(data.success){
                setCredits(data.credits);
                console.log("Updated Credits : ")
                console.log(data.credits);
            }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
    }

    const removeBg = async(image) => {
        try {
            
            if(!isSignedIn){
                return openSignIn();
            }

            setImage(image);
            setResultImage(false);

            navigate('/result');

            const token = await getToken()
            const formData = new FormData()
            image && formData.append('image', image);

            const {data} = await axios.post(backendUrl+'/api/image/remove-bg', formData, {headers: {token}});

            if(data.success) {
                setResultImage(data.resultImage);
                data.creditBalance && setCredits(data.creditBalance);
            }
            else{
                toast.error(data.message);
                data.creditBalance && setCredits(data.creditBalance);
                if(data.creditBalance === 0){
                    navigate('/buy');
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    
    const value = {
        credits, setCredits,
        loadCreditsData,
        backendUrl, 
        image, setImage,
        removeBg,
        resultImage, setResultImage
    }



    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider