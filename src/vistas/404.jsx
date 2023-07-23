export const NotFound = () => {
    return (
        <div className='container-fluid'>
            <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                <img src='/404.png' alt='Página no encontrada' style={{ width: '500px' }} />
                <p>La página que buscas no existe</p>
            </div>
        </div>
    );
}