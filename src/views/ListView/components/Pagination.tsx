import { Link } from 'react-router';
import { extractOffset } from '../utils/helpers';

interface Props {
  previous: string | null;
  next: string | null;
}

function Pagination({ previous, next }: Props) {
  return (
    <div className="pagination">
      {previous ? (
        <Link to={`/?offset=${extractOffset(previous)}`} tabIndex={-1}>
          <button className='button' type='button' title='Previous'>Previous</button>
        </Link>
      ) : <button className='button' type='button' title='Previous' disabled>Previous</button>}
      {next ? (
        <Link to={`/?offset=${extractOffset(next)}`} tabIndex={-1}>
          <button className='button' type='button' title='Next'>Next</button>
        </Link>
      ) : <button className='button' type='button' title='Next' disabled>Next</button>}
    </div>
  );
}

export default Pagination;
