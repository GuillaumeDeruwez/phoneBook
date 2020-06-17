import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50vw',
        },
    },
    contained: {
        width: "25ch"
    }
}));

export default useStyles;