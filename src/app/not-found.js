'use client'
import Boton from "@/Components/Boton";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()
    return (
        <>
            <main className="container m-auto">
                <h1 className="text-4xl text-red-600 my-4">Ups! Error 404, página no encontrada</h1>
                <hr />
                <p className="text-base mt-4">La ruta a la que intentas acceder no existe.</p>
                <br />
                <Boton onClick={() => router.back()}>
                    Volver
                </Boton>
            </main>
        </>
    )
}