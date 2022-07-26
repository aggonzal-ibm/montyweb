
import {
    Link
} from "react-router-dom"
export const Login = () => {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl">Inicia sesión en
                <span className="text-slate-700">  Admin Monty APP</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg px-10 py-10">

                <div className="my-5">
                    <label
                        className="uppercase text-grey-600 block text-xl font-bold"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeHolder="Email de Registro"
                        className="w-full mt-3 p-3 border  rounded-xl bg-gray-50" />

                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-grey-600 block text-xl font-bold"
                        htmlFor="password"
                    >Password</label>
                    <input
                        id="password"
                        type="password"
                        placeHolder="Password de Registro"
                        className="w-full mt-3 p-3 border  rounded-xl bg-gray-50" />

                </div>

                <input

                    type="submit"
                    value="Iniciar sesión"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover: transition-colors"

                />



            </form>

            <nav className="lg-flex lg:justify-between">
                <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="registrar">
                    ¿ No tienes una cuenta ? Regístrate
                </Link>
                <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="olvide-password">
                    Olvidé mi password
                </Link>


            </nav>





        </>
    )
}
