import Pagination from '@mui/material/Pagination';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Paginations = ( {numberOfPages, totalProducts} ) => {

    const [searchParams] = useSearchParams();
    const pathname = useLocation().pathname;
    const params = new URLSearchParams(searchParams);
    const navigate = useNavigate();
    const paramValue = searchParams.get("page")
            ? Number(searchParams.get("page")) : 1 ;
    const onChangeHandler = (event, value) =>{
        params.set("page", value.toString());
        navigate(`${pathname}?${params}`);
    }
    return (        
        //  count={numberOfPages} page={paramValue}
            <Pagination
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}  count={numberOfPages} page={paramValue} onChange={onChangeHandler}
            />
    );
};
export default Paginations;
