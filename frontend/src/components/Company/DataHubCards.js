import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

const DataHubCards = (props) => {
    return ( 
        <>
                    <Card variant="outlined" sx={{ minWidth: 275 , margin: '10px'}}>
                    <CardContent>
                    <h4>Dataset Name: {props.displayName}</h4> 
                    <Rating value={4.2} precision={0.2}/>
                    <p>Description: {props.description}</p>
                    <p>PrimaryContact: {props.primaryContact}</p>
                    <p>Source: {props.source}</p>
                    <p>Categories: {props.categories}</p>
                    {/* <img src={listings.icon.data.toString('base64')}></img> */}
                    </CardContent>
                    <Button href={`https://console.cloud.google.com/bigquery/analytics-hub/exchanges/${props.name}`} target="_blank" variant="contained" sx={{marginBottom:"20px", marginLeft:"20px"}}>Add Dataset</Button>
                    </Card>
                    </>
     );
}
 
export default DataHubCards;