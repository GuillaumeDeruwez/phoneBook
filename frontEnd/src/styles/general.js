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
    },
    h4 : {
        marginTop  : theme.spacing(5)
    }
}));

export default useStyles;