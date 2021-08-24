
import axios from "axios"

export default function Authentication() {
        axios.get("https://jacobsportfolio1234.herokuapp.com/adminAccessAuthorized", {
            headers: { authorization: "Bearer: " + localStorage.getItem("Token") },
        }).then(res => {

        }).catch(err => {
            window.location.href = "/error"
            
        })
}
