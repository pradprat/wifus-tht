import { CPagination, CPaginationItem } from "@coreui/react";
interface PaginationProps {
    total: number;
    current: number;
    onPrevious?: (prev: number) => void;
    onNext?: (next: number) => void;
    onJump?: (next: number) => void;
}
const Pagination = (props: PaginationProps) => {
    const arrayNumber = Array.from(Array(props.total).keys());
    arrayNumber.shift();
    return (
        <CPagination aria-label="Page navigation example" className="m-3">
            <CPaginationItem
                disabled={props.current === 1}
                onClick={() => props.onPrevious?.(props.current - 1)}
                className="hover:cursor-pointer"
            >
                Previous
            </CPaginationItem>
            {arrayNumber.map(num => {
                return (
                    <CPaginationItem
                        key={num}
                        className="hover:cursor-pointer"
                        active={props.current === num}
                        onClick={() => props.onJump?.(num)}
                    >
                        {num}
                    </CPaginationItem>
                );
            })}
            <CPaginationItem
                className="hover:cursor-pointer"
                disabled={props.current === props.total - 1}
                onClick={() => props.onNext?.(props.current + 1)}
            >
                Next
            </CPaginationItem>
        </CPagination>
    );
};
export default Pagination;
