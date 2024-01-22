import React from 'react';
import "../App.css"
import { Stack,Typography } from '@mui/material'
import Item from './Item';


const data = [
    { name: 'Item A', price: 125 },
    { name: 'Item B', price: 230 },
    { name: 'Item C', price: 295 },
    { name: 'Item D', price: 245 },
    { name: 'Item E', price: 900 },
    { name: 'Item F', price: 875 },
    { name: 'Item G', price: 235 },
    { name: 'Item H', price: 400 },
];



const Test = ({ sortData, order , search, filterData }) => {
    const sortedData = sortData(data, order)
    const filteredData = filterData(data,search)

    return (
        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            {(search ? filteredData : sortedData)?.map((item, index) =>
                <Item key={index} item={item}>
                    <Typography class="itemText">
                        {item.name}<br />
                        Price: {item.price}
                    </Typography>
                </Item>)}
        </Stack>
    )
}

export default Test;