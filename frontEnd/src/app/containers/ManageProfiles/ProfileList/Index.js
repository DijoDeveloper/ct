import React, { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import MaterialTable from "material-table";
import Styles from './Styles'

export default function ProfileList(props) {
    const classes = Styles();
    return (
        <>
            <Helmet>
                <title>ProfileList</title>
                <meta name="description" content="Description of Login" />
            </Helmet>
            <div>
            <h2>My Profiles</h2>
                <MaterialTable
                    title=""
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Family Name', field: 'familyName' },
                        { title: 'Date of birth', field: 'dob' },
                        { title: 'Age', field: 'age' },
                        { title: 'Agency Name', field: 'agencyName' },
                        { title: 'Plan', field: 'plan' },
                    ]}
                    data={[
                        { name: 'Anand Ramachandar', familyName: 'Ayuru', dob: "23-09-1998", age: "23", plan: 'Gold', agencyName: 'Guruvayur Agency' },
                        { name: 'Satheesh Kumar', familyName: 'Katu', dob: "12-03-1998", age: "28", plan: 'Silver', agencyName: 'Telugu Agency' },
                        { name: 'Senthil Kumar', familyName: 'Chetta', dob: "23-09-1986", age: "45", plan: 'Platinum', agencyName: 'Malayala Agency' },
                    ]}
                    actions={[
                        // {
                        //     icon: () => {
                        //         return (
                        //             <Button
                        //                 onClick={getDetails}
                        //                 style={{}} variant="contained" color="primary">
                        //                 Register
                        //             </Button>
                        //         )
                        //     },
                        //     tooltip: 'Register',
                        //     onClick: (event, rowData) => { setValue(1) }
                        // }
                    ]}

                />
            </div>
        </>
    );
}
