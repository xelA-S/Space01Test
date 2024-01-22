import { Paper, styled } from '@mui/material';

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const Item = styled(Paper)(({ theme, item }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: "center",
    spacing: 0,
    minWidth: 75,
    minHeight: 75,
    width: Math.abs(item.price / 3),
    height: Math.abs(item.price / 2),
    backgroundColor: `#${randomColor()}`,
    marginBottom: 0
}));

export default Item;