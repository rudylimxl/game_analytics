import axios from 'axios';
import { useEffect , useState} from 'react';
import Iframe from './DashboardIframe';
import Lookeriframe from './DashboardIframe';

let url = ""

const DashboardLooker = () => {

    const [url, setUrl] = useState("")

    useEffect(() => {

        // const getData = async () => {
        //     const response = await axios.get(
        //         `http://localhost:8002/looker_auth?src=/embed/dashboards/1`
        //     );
        //     await console.log(response.data.url);
        // };
        // getData();

        axios.get("http://localhost:8002/looker_auth?src=/embed/dashboards/1iMkLHn2UxIg0YbBQ4p7Ve")
        .then(function(response) {
            setUrl(response.data.url)
        }) 
        .then(()=>{
            document.getElementById("iframe").contentDocument.location.reload(true);
        })
        .catch(function(error) {
            console.log(error)
        })
    },[])

    return ( 
        
        <iframe className="iframe" src={`${url}`}></iframe>
        // <iframe src="https://06312405-94aa-4f79-bd40-2fb0f8adcd41.looker.app/login/embed/%2Fembed%2Fdashboards%2F1?external_user_id=%22Pat%20Embed%22&session_length=3600&force_logout_login=true&permissions=%5B%22access_data%22%2C%22see_looks%22%2C%22see_user_dashboards%22%2C%22explore%22%2C%22save_content%22%2C%22embed_browse_spaces%22%2C%22see_lookml_dashboards%22%2C%22see_drill_overlay%22%2C%22schedule_look_emails%22%2C%22schedule_external_look_emails%22%5D&models=%5B%22thelook%22%2C%22GASEIF14%22%2C%22demo%22%2C%22rental%22%2C%22rudylim%22%2C%22basic_ecomm%22%2C%22intermediate_ecomm%22%2C%22advanced_ecomm%22%5D&user_attributes=%7B%22locale%22%3A%22en%22%7D&access_filters=%7B%7D&nonce=%22MXdHdwHiCiohEEYu%22&time=1698820926&signature=rRM2O0h4L6dbkp5WmfjNmZatTCs%3D"></iframe>
        
     );
}
 
export default DashboardLooker;