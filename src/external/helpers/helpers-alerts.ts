import Swal from "sweetalert2";

export function sucessalert(text:string){
      return Swal.fire({
        title: "Proceso exitoso",
        text,
        icon: "success"
      });
}
export function erroralert(text:string){
      return Swal.fire({
        title: "Ocurrió un error",
        text,
        icon: "error"
      });
}
export async function questionalert(title:string){
      return await Swal.fire({
          title,
          text: "Una vez eliminado no se podrá recuperar el registro",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirmar"
          })
  }