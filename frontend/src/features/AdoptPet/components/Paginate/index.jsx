import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import AdoptContent from '../AdoptContent';
import './Paginate.scss'
import { Container, Flex, Button } from '@chakra-ui/react';
import petAPI from '../../../../api/petApi';
import AdoptCart from '../../../../components/AdoptCart';

PaginateAdopt.propTypes = {
    itemsPerPage: PropTypes.number,

};
const items = [];

function PaginateAdopt(props) {
    const { itemsPerPage } = props
    const [page, setPage] = useState(0)
    console.log(itemsPerPage);

    for (let i = 0; i < page; i++) {
        items[i] = i + 1
    }
    // console.log(items);

    const [currentItems, setCurrentItems] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (event) => {
        setCurrentPage(event.selected)
    };
    console.log(`current page: ${currentPage}`);

    useEffect(() => {
        const getPet = async () => {
            const params = {
                page: currentPage,
                size: itemsPerPage,
            }

            const response = await petAPI.getAll(params)
            const { data, pagination } = response.data
            console.log(data);
            console.log(pagination);
            setPage(pagination._totalPage)
            setCurrentItems(data.pets)
        }
        getPet()
    }, [currentPage])
    console.log(currentItems);

    return (
        <Container
            maxWidth='100%'
            width='auto'
            padding='0 16px'
            marginTop='48px'
        >
            <AdoptContent currentItems={currentItems} />

            <Flex
                alignItems='center'
                justifyContent='center'
            >
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    disabledClassName='paginate__disabled'
                    activeClassName='paginate__active'
                />
            </Flex>
        </Container>
    );
}

export default PaginateAdopt;