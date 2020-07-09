import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        width: 80,
        height: 48,
        padding: 8,
    },
    switchBase: {
        padding: 11,
        color: theme.palette.text.secondary,
    },
    thumb: {
        width: 26,
        height: 26,
        backgroundColor: '#fff',
    },
    track: {
        background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        opacity: '1 !important',
        borderRadius: 20,
        position: 'relative',
        '&:before, &:after': {
            display: 'inline-block',
            position: 'absolute',
            top: '50%',
            width: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
            textAlign: 'center',
        },
        '&:before': {
            content: '"\xB0F"',
            left: 4,
            opacity: 0,
        },
        '&:after': {
            content: '"\xB0C"',
            right: 4,
        },
    },
    checked: {
        '&$switchBase': {
            color: '#185a9d',
            transform: 'translateX(32px)',
            '&:hover': {
                backgroundColor: 'rgba(24,90,257,0.08)',
            },
        },
        '& $thumb': {
            backgroundColor: '#fff',
        },
        '& + $track': {
            background: 'linear-gradient(to right, #43cea2, #185a9d)',
            '&:before': {
                opacity: 1,
            },
            '&:after': {
                opacity: 0,
            }
        },
    },
}));