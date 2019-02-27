import { ExportableToSchema } from "./schema.interface";
import Mongooserepository from "./mongoose.abstract";
import { Pageable } from '../apdter/pageable';
import { ErrorModel } from "src/utils/error.model";

abstract class PageRepository<T extends ExportableToSchema> extends Mongooserepository< T > {
    findAllPaginated(): Promise< Pageable<T> |  ErrorModel> {
        return ;
    }
}
export default PageRepository;