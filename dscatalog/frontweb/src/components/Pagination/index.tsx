import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import './styles.css';
import ReactPaginate from 'react-paginate';

type Props = {
  forgePage?: number
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
}

const Pagination = ({ forgePage, pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      forcePage={forgePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName='pagination-container'
      pageLinkClassName='pagination-item'
      breakClassName='pagination-item'
      previousClassName='arrow-previous'
      nextClassName='arrow-next'
      activeLinkClassName='pagination-link-active'
      previousLabel={<div className='pagination-arrow-container' data-testid='arrow-previous'><ArrowIcon /></div>}
      nextLabel={<div className='pagination-arrow-container' data-testid='arrow-next'><ArrowIcon /></div>}
      disabledClassName='arrow-inactive'
      onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
    />
  );
};

export default Pagination;
