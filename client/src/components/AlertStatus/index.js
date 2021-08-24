import React from 'react'
import { Alert} from '@material-ui/lab';

export default function AlertStatus(props) {
    return (
        <div>
            {props.Success ? 
            <Alert style={{width: "100%"}} severity="success">{props.Success}</Alert>: props.Error ?
            <Alert style={{width: "100%"}} severity="error">{props.Error}</Alert> : <></>}
            
        </div>
    )
}
