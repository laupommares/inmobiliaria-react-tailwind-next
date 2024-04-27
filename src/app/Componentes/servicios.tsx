import { MdOutlineMapsHomeWork } from "react-icons/md";

export const Servicios = () => {
   return(
    <div className="grid grid-cols-4 gap-8 p-10">
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div style={{display:'flex', justifyContent: 'center'}}> <MdOutlineMapsHomeWork/> </div>
                    <h2 className="text-center font-bold text-gray-600">Alquileres</h2>
                    <p className="text-sm text-center text-gray-400">Alquiler de inmuebles</p>
                </div>
            </div>
        </div>
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div style={{display:'flex', justifyContent: 'center'}}> <MdOutlineMapsHomeWork/> </div>
                    <h2 className="text-center font-bold text-gray-600">Ventas</h2>
                    <p className="text-sm text-center text-gray-400">Venta de inmuebles</p>
                </div>
            </div>
        </div>
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div style={{display:'flex', justifyContent: 'center'}}> <MdOutlineMapsHomeWork/> </div>
                    <h2 className="text-center font-bold text-gray-600">Permutas</h2>
                    <p className="text-sm text-center text-gray-400">Venta de inmuebles</p>
                </div>
            </div>
        </div>
        <div>
         <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div style={{display:'flex', justifyContent: 'center'}}> <MdOutlineMapsHomeWork/> </div>
                    <h2 className="text-center font-bold text-gray-600">Tasaciones</h2>
                    <p className="text-sm text-center text-gray-400">Venta de inmuebles</p>
                </div>
            </div>
        </div>
    </div>
    )
}