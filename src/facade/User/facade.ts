import { UserService } from "../../services";
import { IUserFacade } from "./interface";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let users = await UserService.findAll();
        return users;
    },

    async insert(ID,NAME): Promise<any> {

        let users = await UserService.insert(ID,NAME);
        return users;
    },

    async modify(ID,NAME): Promise<any[]> {

        let users = await UserService.modify(ID,NAME);
        return users;
    },

    async remove(ID): Promise<number> {

        let users = await UserService.remove(ID);
        return users;
    },
    async findById(ID): Promise<any[]> {

        let users = await UserService.findById(ID);
        return users;
    }



    

}

export default UserFacade;