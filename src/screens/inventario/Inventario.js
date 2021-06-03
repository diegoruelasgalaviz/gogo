import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import {Fade} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Subheader from "../../components/basic/Subheader";
import CustomTable from "../../components/basic/CustomTable";
import { fetchUsers, deleteUser } from "../../actions";
import ListSkeleton from "../../components/skeleton/ListSkeleton";
import ErrorFetch from "../../components/warning/ErrorFetch";
import ListMenu from "../../components/ListMenu";
import DescriptionIcon from '@material-ui/icons/Description';
import ROLE from "../../constants/role";
import CustomChip from "../../components/custom/CustomChip";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import DetailInventario from "./DetailInventario";
import CustomTextField from "../../components/custom/CustomTextField";
import CustomSelectField from "../../components/custom/CustomSelectField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import Grid from "@material-ui/core/Grid";
import colors from "../../constants/colors";
import {UserSort} from "../../constants/sort";
import {formattedDate} from "../../common/datetime";
import Chip from "@material-ui/core/Chip";
import Loading from "../../components/skeleton/Loading";

const styles = {
    root: {
        textAlign: 'center'
    },
    filter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 10,
        '& .MuiOutlinedInput-root': {
            background: colors.white
        }
    },
    role: {
        width: 100,
    }
}

class Inventario extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAdmin: false,
            roles: {
                [ROLE.Admin]: <CustomChip role={ROLE.Admin} color="fanta"/>,
                [ROLE.Cashier]: <CustomChip role={ROLE.Cashier} color="blue"/>,
            },
            role: 'all',
            keyword: '',
            sort: UserSort.NEWEST,
            page: 0,
            limit: 20,
            detailModal: ''
        }
    }

    
    render() {
        
        return (
            <Fade in={true}>
                <div >
                    <Subheader title="Inventarios">
                    <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                            startIcon={<DescriptionIcon/>}
                            >
                           import Excel
                        </Button>
                    </Subheader>

                   

                    <Box >
                        <Grid container spacing={2} justify="flex-end">
                            <Grid item sm={4} lg={3}>
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
                            </Grid>
                            <Grid item sm={4} lg={2}>
                                <CustomSelectField
                                    fullWidth
                                    size="small"
                                    label="Role"
                                    name="role"
                                    
                                >
                                    <MenuItem value='all'>All Role</MenuItem>
                                   
                                </CustomSelectField>
                            </Grid>
                            
                        </Grid>
                    </Box>

                    <CustomTable>
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Categoria</TableCell>
                                <TableCell>Existencias</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                                
                           
                            
                                <TableRow key={1}>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="right">
                                        <ListMenu
                                            
                                        />
                                    </TableCell>
                                </TableRow>
                        
                        </TableBody>
                    </CustomTable>

                    
                

                </div>
            </Fade>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        loading: user.all.loading,
        users: user.all.users,
        pagination: user.all.pagination,
        error: user.all.error,
        success: user.delete.success
    }
}

const mapDispatchToProps = {
    fetchUsers,
    deleteUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Inventario))