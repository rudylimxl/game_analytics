import axios from "axios";
import { useEffect , useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DataHubCards from "./DataHubCards";

const DataHubTiles  = () => {

    const [listings, setListings] = useState([])
    let cards = ""
    let temp = []

    useEffect(() => {

        axios.get("http://localhost:8000/plays/list")
        .then(function(response) {
            console.log(response)
            cards = response.data.msg.map((ele,index) => {
                return (
                    <DataHubCards displayName={ele.displayName} description={ele.description} primaryContact={ele.primaryContact} source={ele.source} categories={ele.categories} name={ele.name}/>
                )
            })

            setListings(cards)
        }) 
        .catch(function(error) {
            console.log(error)
        })
    },[])



    return ( 
        <div>
        {listings}
        </div>
     )
}
 
export default DataHubTiles;