export async function generateMetadata ({params, searchParams}, parent) {
    return {
        title: `Productos - ${params.categoria}` 
    }
    
}
  
const Productos = ({ params }) => {
    console.log(params)
    return (
        <div>
            Estas viendo: {params.categoria}
        </div>
    )
}

export default Productos;