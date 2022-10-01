import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

const Action = ({ id, onDeleteClick,updataPath }) => {
    const handleDelete = (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // onDeleteClick(id);
            }
        })
    }
    return (<>
        <NavLink to={updataPath} className="btn btn-primary rounded-circle btn-sm me-2">
            <i className="fas fa-pen"></i>
        </NavLink>
        <NavLink onClick={handleDelete} to="/delete" className="btn btn-danger rounded-circle btn-sm">
            <i className="fas fa-trash"></i>
        </NavLink>

    </>)
}
export default Action;