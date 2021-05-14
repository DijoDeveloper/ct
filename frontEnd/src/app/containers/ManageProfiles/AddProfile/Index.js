import { Link, useHistory } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet-async';
import InputLabel from '@material-ui/core/InputLabel';
import MaterialTable from "material-table";
import MenuItem from '@material-ui/core/MenuItem';
import PlanCard from '../../../components/PlanCard'
import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';
import Styles from './Styles'
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export default function AddProfile(props) {
    const classes = Styles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        console.log(newValue, "Adadd")
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    return (
        <>
            <Helmet>
                <title>Add Profile</title>
                <meta name="description" content="Description of Login" />
            </Helmet>
            <>
                <h2>Add Profile</h2>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Basic Details" {...a11yProps(0)} />
                            <Tab label="Plan Details" {...a11yProps(1)} />
                            <Tab label="Other Details" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <BasicDetails setValue={setValue} theme={theme} classes={classes} props={props} />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <PlanDetails setValue={setValue} theme={theme} classes={classes} props={props} />
                        </TabPanel >
                        <TabPanel value={value} index={2} dir={theme.direction}>
                            <HoroscopeDetails setValue={setValue} theme={theme} classes={classes} props={props} />
                        </TabPanel>
                    </SwipeableViews>
                </div>
            </>
        </>
    );
}
const BasicDetails = ({ setValue, theme, classes, props }) => {
    const [lookFor, setLookingFor] = React.useState('');
    const [showList, setShowList] = React.useState(false);
    const [searchFor, setSearchFor] = React.useState('');
    const [lookingForOpen, setLookingForOpen] = React.useState(false);
    const [searchByOpen, setSearchByOpen] = React.useState(false);
    const lookingFor = ["Myself", "Son", "Daughter", "Sister", "Brother", "Relativies", "Friends"]
    const searchBy = ["Community", "Profession", "City", "Caste", "Language"]
    console.log(props)
    const getDetails = () => {
        setShowList(true)
    }
    return (
        <>
            {
                !showList &&
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="lookingFOr">Looking match for</InputLabel>
                        <Select
                            style={{ width: 200 }}
                            className={classes.selectBox}
                            labelId="lookingFOr"
                            id="lookingFOr"
                            open={lookingForOpen}
                            onClose={() => setLookingForOpen(false)}
                            onOpen={() => setLookingForOpen(true)}
                            value={lookFor}
                            onChange={(event) => {
                                setLookingFor(event.target.value);
                            }}
                        >
                            {
                                lookingFor.map((val, index) => {
                                    return (
                                        <MenuItem key={index} value={val}>{val}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="searchBy">Search by</InputLabel>
                        <Select
                            style={{ width: 200 }}
                            className={classes.selectBox}
                            labelId="searchBy"
                            id="searchBy"
                            open={searchByOpen}
                            onClose={() => setSearchByOpen(false)}
                            onOpen={() => setSearchByOpen(true)}
                            value={searchFor}
                            onChange={(event) => {
                                setSearchFor(event.target.value);
                            }}
                        >
                            {
                                searchBy.map((val, index) => {
                                    return (
                                        <MenuItem key={index} value={val}>{val}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <Button
                        onClick={getDetails}
                        style={{ marginTop: 15, marginLeft: 20 }} variant="contained" color="primary">
                        Get Details
            </Button>
                </div>
            }
            {
                showList &&
                <MaterialTable
                    title="Matched Agencies"
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Address', field: 'address' },
                        { title: 'Matched Profiles', field: 'matchedProfile' },
                        { title: 'Plan starts from', field: 'planAmount' }
                    ]}
                    data={[
                        { name: 'Abc agency', address: 'NO:20,3rd cross street anna nagar, channai - 600 211', matchedProfile: 15, planAmount: "₹ 10000" },
                        { name: 'Test agency', address: 'NO:10,3rd cross street anna nagar, channai - 600 211', matchedProfile: 25, planAmount: "₹ 2030" },
                        { name: 'Nadar agency', address: 'NO:90,3rd cross street anna nagar, channai - 600 211', matchedProfile: 35, planAmount: "₹ 1000" },
                    ]}
                    actions={[
                        {
                            icon: () => {
                                return (
                                    <Button
                                        onClick={getDetails}
                                        style={{}} variant="contained" color="primary">
                                        Register
                                    </Button>
                                )
                            },
                            tooltip: 'Register',
                            onClick: (event, rowData) => { setValue(1) }
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                    }}
                />
            }
        </>
    )
}
const PlanDetails = ({ setValue, theme, classes, props }) => {
    const onSelect = (props) => {
        setValue(2)
    }
    return (
        <>
            <Grid style={{ marginTop: 10 }} container>
                <Grid item xs={4}>
                    <PlanCard title={'silver'} onSubmit={onSelect} />
                </Grid>
                <Grid item xs={4}>
                    <PlanCard title={'gold'} onSubmit={onSelect} />
                </Grid>
                <Grid item xs={4}>
                    <PlanCard title={'platinum'} onSubmit={onSelect} />
                </Grid>
            </Grid>
        </>
    )
}
const HoroscopeDetails = ({ theme, classes, props }) => {


    const history = useHistory();

    const handleNext = () => {
        // props.history.push('/profileList', {})
        // console.log(props.history, "propsss")
        // history.push('/ManaprofileList')
        return(<Link to="/ManaprofileList" />)
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Profile Detalis
                </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="familyName"
                        name="familyName"
                        label="Family Name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="dob"
                        name="dob"
                        label="Date of birth"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="religion"
                        name="religoin"
                        label="Religion"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="age"
                        name="age"
                        label="Age"
                        fullWidth
                        autoComplete="family-name"
                        type="numeric"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="education"
                        name="education"
                        label="Education"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button
                        style={{ marginTop: 12, marginLeft: 30 }}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    // className={classes.button}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
