
'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../actions/getToken";
import { setIsLoggedIn } from "../../store/features/user/userSlice";
import { RootState } from "../../store/store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function TokenChecker({ children }) {
    // const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)


    const [token, setToken] = useState('');
    const dispatch = useAppDispatch();

    useEffect(() => {

        async function isToken() {
            const token = await getToken();
            if (token) {
                setToken(token);
            }
            return;
        }
        isToken();
        console.log(token)

    }, []);
    useEffect(() => {
        if (token) {
            dispatch(setIsLoggedIn(true))

        }
        else { dispatch(setIsLoggedIn(false)) }
    }, [token])
    return <>{children}</>
}