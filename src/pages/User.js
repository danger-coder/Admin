import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { getRequest } from '../service/axios.service';
import Action from '../actionButtons/action-buttons';

import DataTable from 'react-data-table-component';


const User = () => {




    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(8);

    const fetchData = async (page) => {
        try {
            setLoading(true)
            const result = await getRequest(`/api/users?order=desc&pagination=${perPage}&page=${page}&order_by=email`)

            // console.log(result)
            setData(result.data.data)
            setTotalRows(result.data.total)
            setLoading(false)

        } catch (err) {

        }
    }
    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        const response = await getRequest.get(`/api/users?order=desc&pagination=${newPerPage}&page=${page}&order_by=email`);

        setData(response.data);
        setPerPage(newPerPage);
        setLoading(false);
    };

    const handlePageChange = (page) => {
        fetchData(page);
    };

    useEffect(() => {
        fetchData(1)

    }, [])

    const paginationComponentOptions = {
        rowsPerPageText: "Form per page",
        rangeSeparatorText: "of",
        selectAllRowsItem: true,
        selectAllRowsItemText: "All",
    };
    const columns = [
        {
            name: 'id',
            selector: data => data.id,
        },
        {
            name: 'name',
            selector: data => data.name,
        },
        {
            name: 'email',
            selector: data => data.email,
        },
        {
            name: 'dob',
            selector: data => data.dob,
        }, {
            name: 'gender',
            selector: data => data.gender,
        },
        {
            name: 'mobile',
            selector: data => data.mobile,
        },
        {
            name: 'phone',
            selector: data => data.phone,
        },
        {
            name: 'role',
            selector: data => data.role,
        },
        {
            name: 'status',
            selector: data => data.status,
        },
        {
            name: 'action',
            selector: data => <Action />
        },

    ];
    console.log(data)

    return (
        <>

            <Container  >

                {/* <h4 className='py-3'>USER/LISTING</h4>
                <hr /> */}

                <DataTable
                    title="User/Listing"
                    columns={columns}
                    data={data}
                    pagination
                    paginationServer
                    fixedHeader
                    responsive
                    highlightOnHover
                    pointerOnHover
                    selectableRows
                    progressPending={loading}
                    paginationTotalRows={totalRows}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handlePerRowsChange}
                    paginationPerPage={perPage}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
                    paginationComponentOptions={paginationComponentOptions}
                    subHeader
                    subHeaderComponent={
                        <input type="text" placeholder='search' />
                    }
                />
            </Container >
        </>
    )
}

export default User