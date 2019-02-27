import AcessorioController from '../../controller/Sistema/acessorioController';
import { Rest } from './../../interfaces/rest.interface';
import { Route } from '../../interfaces/route.interface';

class AcessorioRest implements Rest {
    
    urn: string = 'acessorio';
    routes: Array<Route> = [
        {
            method: 'get', path: '/',
            action: AcessorioController.getAllAcessorios
        },
        {
            method: 'get', path: '/:id',
            action: AcessorioController.getAcessorioById
        },
        {
            method: 'post', path: '/',
            action: AcessorioController.createAcessorio
        },
        {
            method: 'put', path: '/:id',
            action: AcessorioController.updateAcessorio
        },
        {
            method: 'delete', path: '/:id',
            action: AcessorioController.deleteAcessorio
        }
    ];
};

export default new AcessorioRest();