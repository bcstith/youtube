import { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';


function SearchBar({onSubmit}){
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => setSearchTerm(e.target.value);

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            onSubmit(searchTerm);
        }
    }

    return(
        <Paper elevation={6} styling={{ padding: '25px' }}>
            <TextField
                fullWidth
                label = "Search..."
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={onKeyPress}
            />
        </Paper>
    )
}

export default SearchBar;