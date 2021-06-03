import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import CustomTextField from "../../components/custom/CustomTextField";
import CustomSelectField from "../../components/custom/CustomSelectField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';

class SearchBox extends React.Component {

    render(){
        return(
        <div>
             <CustomTextField
                                    fullWidth
                                    size="small"
                                    placeholder="Keyword"
                                    label="Search"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                   >
                                                    <SearchIcon fontSize="small"/>
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
            <Grid container spacing={1}>
           
            </Grid>
        </div>
        )
    }
}

export default SearchBox;