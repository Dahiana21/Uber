import React from 'react'
import Autentication from '.'

const register = () => {
    return (
        <>
        <div>
            Seleccione el rol
        </div>

        <div>
            Ahora introduzca sus datos
        </div>

        <div>
            <input type="text" placeholder='Introduzca su nombre' />
        </div>

        <div>
        <input type="text" placeholder='Introduzca sus apellidos' />
        </div>

        <div>
        <input type="text" placeholder='Introduzca su email' />
        </div>

        <div>
        <input type="text" placeholder='Introduzca su contraseña' />
        </div>

        <div>
        <input type="text" placeholder='Registrarse' />
        </div>
        </>
    )
}

export default register