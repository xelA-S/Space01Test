import { useState } from 'react';
import "./App.css"
import Test from './components/Test';
import { Container, Button, ButtonGroup, Paper,TextField,Stack } from '@mui/material';
import { ReactComponent as Logo } from "./images/space01.svg"

function App() {

    const [order, setOrder] = useState("ascending");
    const [search, setSearch] = useState("")




    const sortData = (data,sortOrder) => {
        if (data !== [] ) {
            if (sortOrder == "ascending") {
                return data.sort((a,b) => a.price - b.price).slice(0,5)
            }
            if (sortOrder == "descending") {
                return data.sort((a, b) => b.price - a.price).slice(0, 5)
            }
        }
        return data

    }
    let inputHandler = (e) => {
        // convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    };
    const filterData = (data,search) => {
        return data.filter((item) => {
            if (search === '') {
                return data;
            }
            else {
                // return the item which contains the user input
                return item.name.toLowerCase().includes(search)
            }
            
        })
    }

    return (
        <div >
            <Container class="header">
                <h1 className="font-weight-light"><Logo class="logo"/> Test Solution</h1>
            </Container>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="flex-end"
            >
                <ButtonGroup variant="contained" aria-label="outlined primary button group" class="buttonGroup" >
                    <Button onClick={() => { setOrder("") } }>View All</Button>
                    <Button onClick={() => { setOrder("ascending") }}>Ascending</Button>
                    <Button onClick={() => { setOrder("descending") }}>Descending</Button>
                </ButtonGroup>
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="filled"
                    label="Search Items"
                    color="primary"
                />
            </Stack>
            <Container class="center">
                <Paper class="paper" elevation={3}>
                    <Test sortData={sortData} order={order} search={search} filterData={filterData} />
                </Paper>
            </Container>
        </div>
  );
}

export default App;
