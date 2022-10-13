import { useState } from "react"
import { Paper, TextField } from "@mui/material"

const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => setSearchTerm(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === "Enter"){
            onSubmit(searchTerm);
        }
    }

    return (
        <Paper elevationn={6} style={ { padding:"10px"}}>
            <TextField 
                fullWidth
                label="Search..."
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={onKeyPress}
                id="margin-normal" 
                margin="normal"
                >
            </TextField>
        </Paper>
    )
}

export default SearchBar;