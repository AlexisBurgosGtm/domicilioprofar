let root = document.getElementById('root');

let GlobalToken = 'FARMARURAL';
let GlobalUsuario = 'DOMICILIO';
let GlobalNivelUser = 0;
let GlobalEmpnit = 'FARMARURAL001';
let GlobalEmpNombre = 'PROVEEDORA FARMACEUTICA RURAL';
let GlobalSelectedForm = '';
let GlobalSelectedSucursal = document.getElementById('cmbSucursalSeleccionada');


let GlobalLogged = 'NO';

let GlobalCoddoc = 'PD999';
let GlobalTotalDocumento = 0;
let GlobalTotalCostoDocumento = 0;
let GlobalCodBodega = 'B001';

let GlobalSelectedApp = '';

let GlobalSistema = 'ISC';

let GlobalLoader = `<div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-danger" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-warning" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>`;
