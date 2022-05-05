import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './PaginateService.scss'
import { Container, Flex, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import serviceApi from '../../../../../api/serviceApi';
import TableService from '../TableService';

PaginatService.propTypes = {
    itemsPerPage: PropTypes.number,
};
const items = [];

function PaginatService(props) {
    const { itemsPerPage, isReRender } = props
    const [page, setPage] = useState(0)
    const [isRender, setIsRender] = useState(false)
    const auth = useSelector((state) => state.auth)
    const location = useLocation()
    const [serialNum, setSerialNum] = useState(0)
    const hanldeRender = () => {
        setIsRender(!isRender)
    }
    for (let i = 0; i < page; i++) {
        items[i] = i + 1
    }

    const [currentItems, setCurrentItems] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
        setSerialNum((event.selected) * itemsPerPage)
    };
    useEffect(() => {
        const getServices = async () => {
            const params = {
                page: currentPage,
                size: itemsPerPage,
                sort: 'id',
            }

            const response = await serviceApi.getServices(params)
            const { data, pagination } = response.data
            // console.log('data.services', data.services);
            setPage(pagination._totalPage)
            setCurrentItems(data.services)
        }
        getServices()
    }, [currentPage, isRender, itemsPerPage, isReRender])
    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            marginTop='48px'
        >
            <TableService currentItems={currentItems} serialNum={serialNum} hanldeRender={hanldeRender} />

            <Flex
                alignItems='center'
                justifyContent='end'
            >
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel=">"
                    forcePage={0}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    disabledClassName='paginate__disabled'
                    activeClassName='paginate__active'
                />
            </Flex>
        </Container>
    );
}

export default PaginatService;