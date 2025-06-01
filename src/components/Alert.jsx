import Swal from "sweetalert2";

export default function Alert({title, type}){

    return (
      Swal.fire({
        title: title,        
        icon: type
})
    )
}