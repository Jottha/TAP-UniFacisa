import AcessorioController from '../../controller/Sistema/acessorioController';
import { Rest } from '../../interfaces/rest.interface';
import { Route } from '../../interfaces/route.interface';

class AcessorioPublicoRest implements Rest {
    
    urn: string = 'acessorio';
    routes: Array<Route> = [
        {
            method: 'get', path: '/',
            action: AcessorioController.getAllAcessorios
        },
        {
            method: 'get', path: '/:id',
            action: AcessorioController.getAcessorioById
        }
    ];
};

export default new AcessorioPublicoRest();