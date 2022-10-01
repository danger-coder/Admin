import React from 'react'

const Update = () => {
    return (
        <>
            <Container  >

                <Row>
                    <Col sm={12} md={{ offset: 3, span: 6, }} >
                        <h1 className='mt-5 mb-4 text-center'>Registration</h1>
                        <hr className='mb-3'></hr>

                        <Form className='px-5' onSubmit={Formik.handleSubmit} encType="multipart/form-data">
                            <Form.Group className='row '>
                                <Col className='col-sm-6'>
                                    <Form.Label className='col-sm-12 '>Name:</Form.Label>
                                    <Col className='col-sm-12'>
                                        <Form.Control
                                            type="name"
                                            name='name'
                                            placeholder='name'
                                            required
                                            onChange={Formik.handleChange}
                                            value={Formik.values.name}
                                        />
                                        {/* {Formik.errors.name ? <em className='text-danger'>{Formik.errors.name}</em> : null} */}
                                    </Col>

                                </Col>
                                <Col className='col-sm-6 pb-0'>
                                    <Form.Label className='col-sm-1'>gender:</Form.Label>
                                    {/* <Col className='col-sm-12'>
                        <Form.Control
                            type="text"
                            name='gender'
                            placeholder='gender'
                            required
                            onChange={Formik.handleChange}
                            value={Formik.values.gender}

                        />
                     
                    </Col> */}
                                    {/* <Select options={options} /> */}
                                    <Form.Select name="gender" required onChange={Formik.handleChange} value={Formik.values.gender}>
                                        <option>select any one</option>
                                        <option>male</option>
                                        <option>female</option>
                                    </Form.Select>

                                </Col>

                            </Form.Group>
                            <Form.Group className='row mt-3'>
                                <Col className='col-sm-6'>
                                    <Form.Label className='col-sm-12 '>dateOfBirth:</Form.Label>
                                    <Col className='col-sm-12'>
                                        <Form.Control
                                            type="date"
                                            name='dob'
                                            placeholder='date of birth'
                                            required
                                            onChange={Formik.handleChange}
                                            value={Formik.values.dob}

                                        />
                                        {/* {Formik.errors.dob ? <em className='text-danger'>{Formik.errors.dob}</em> : null} */}
                                    </Col>


                                </Col>
                                <Col className='col-sm-6'>
                                    <Form.Label className='col-sm-1'>mobile:</Form.Label>
                                    <Col className='col-sm-12'>
                                        <Form.Control
                                            type="number"
                                            name='mobile'
                                            placeholder='mobile'
                                            required
                                            onChange={Formik.handleChange}
                                            value={Formik.values.mobile}

                                        />
                                        {/* {Formik.errors.mobile ? <em className='text-danger'>{Formik.errors.mobile}</em> : null} */}
                                    </Col>

                                </Col>

                            </Form.Group>

                            <Form.Group className='row mt-4 flex' >
                                <Form.Label className='col-sm-3 m-0'>
                                    Phone Number:
                                </Form.Label>
                                <Col className='col-sm-9 pe-5'>
                                    <Form.Control type="number"
                                        name="phone"
                                        placeholder='phone'
                                        onChange={Formik.handleChange}
                                        value={Formik.values.phone}
                                        required

                                    />


                                    {/* {Formik.errors.number ? <em className='text-danger'>{Formik.errors.number}</em> : null} */}
                                </Col>
                            </Form.Group>


                            <Button type="submit" className='bg-dark mt-3'>update</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Update