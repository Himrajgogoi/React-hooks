import React,{useContext} from 'react'
import ContextComponentF from './ContextComponentF'
import {userContext, channelContext} from "../App";

function ContextComponentE() {

    const user = useContext(userContext)
    const channel = useContext(channelContext)
    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ContextComponentE
