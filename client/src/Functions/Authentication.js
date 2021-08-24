
import axios from "axios"

export default function Authentication() {
        axios.get("http://localhost:8080/adminAccessAuthorized", {
            headers: { authorization: "Bearer: " + localStorage.getItem("Token") },
        }).then(res => {

        }).catch(err => {
            window.location.href = "/error"
            
        })
}
