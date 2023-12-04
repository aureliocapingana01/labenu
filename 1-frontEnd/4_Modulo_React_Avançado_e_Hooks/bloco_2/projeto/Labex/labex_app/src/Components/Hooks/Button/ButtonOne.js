import Button from '@mui/material/Button';


export const ButtonOne = props => {
    return(
        <Button variant="outlined">
            {props.text}
        </Button>
    )
}