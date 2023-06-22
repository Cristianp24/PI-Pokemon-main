import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, setPage } from "../../redux/actions";
import style from "./Pagination.module.css";

const Paginate = ({ cantPages }) => {
    const { numPage } = useSelector((state) => state);
    const dispatch = useDispatch();
    const next = () => {
        dispatch(nextPage());
    };
    const prev = () => {
        dispatch(prevPage());
    };
    const number = (n) => {
        dispatch(setPage(n));
    };
    return (
        <div className={style.pagination}>
            {numPage > 1 ? <button className={style.btnx} onClick={prev}>PREV</button> : null}

            <div className={style["current-page"]}>
                {[...Array(cantPages)].map((_, index) => (
                    <button 
                        key={index}
                        className={`${style.btnx} ${
                            numPage === index + 1 ? style["active"] : ""
                        }`}
                        onClick={() => number(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {numPage < cantPages ? <button className={style.btnx} onClick={next}>NEXT</button> : null}
        </div>
    );
};

export default Paginate;