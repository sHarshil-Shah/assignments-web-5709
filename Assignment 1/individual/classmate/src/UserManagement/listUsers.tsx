import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Input, Button, Th
} from '@chakra-ui/react';
import { FaTrashAlt } from "react-icons/fa";
import TitleBar from '../global/header';

const data = [
    { id: 1, email: 'johndoe@example.com', fname: 'f name 1', lname: 'l name 1', utype: 'student' },
    { id: 2, email: 'johndoe2@example.com', fname: 'f name 2', lname: 'l name 2', utype: 'professor' },
    { id: 3, email: 'johndoe3@example.com', fname: 'f name 3', lname: 'l name 3', utype: 'student' },
];

const TableWithFilters = () => {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFilter(event.target.value);
    };

    const filteredData = data.filter((item) =>
        item.email.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <><TitleBar></TitleBar>
            <Table variant="striped" mt={70}>
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Email</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                        <Th>User Type</Th>
                        <Th>Delete User</Th>
                    </Tr>
                    <Tr>
                        <Td></Td>
                        <Td>
                            <Input
                                placeholder="Filter Name"
                                value={filter}
                                onChange={handleFilterChange} />
                        </Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.email}</Td>
                            <Td>{item.fname}</Td>
                            <Td>{item.lname}</Td>
                            <Td>{item.utype}</Td>
                            <Td><Button colorScheme='red' leftIcon={<FaTrashAlt />}>
                                Delete
                            </Button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table></>
    );
};

export default TableWithFilters;
