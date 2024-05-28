//Guardar en el cache dinámico
function actualizaCacheDinamico(dynamicCache, req, resp){

    console.log('llegue');
    
    if( resp.ok ){
        return caches.open( dynamicCache ).then(cache => {

            cache.put(req, resp.clone() );

            return resp.clone();
        });
    } else {
        return resp;
    }
}