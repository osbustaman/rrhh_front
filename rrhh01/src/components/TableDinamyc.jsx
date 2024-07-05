
import React, { useState } from 'react';
import { Table, Pagination, Form, Button, InputGroup } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

export const TableDinamyc = ({ data, itemsPerPage = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const filteredData = data.filter(item =>
        item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedData = filteredData.slice(10);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <>
            <div className="d-flex justify-content-end mb-3 align-items-center">
                <InputGroup style={{ width: '300px' }}>
                <Form.Control
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Button variant="primary" className="ms-2">
                    <FaPlus /> Añadir cliente
                </Button>
                </InputGroup>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                {paginatedData.map((item, index) => (
                    <tr key={index}>
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.username}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Pagination>
                {[...Array(totalPages).keys()].map(pageNumber => (
                <Pagination.Item
                    key={pageNumber + 1}
                    active={pageNumber + 1 === currentPage}
                    onClick={() => handlePageChange(pageNumber + 1)}
                >
                    {pageNumber + 1}
                </Pagination.Item>
                ))}
            </Pagination>
        </>
    );
}