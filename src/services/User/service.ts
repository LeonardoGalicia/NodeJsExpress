import { IUserService } from "./interface";
import User from "../../models/user.model";
import { findAll } from "../../facade/User";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        return User.findAll();
    },
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async insert(ID,NAME): Promise<any> {
        return User.create({
           id:ID,
           name:NAME
        });
        
    },
    async modify(ID,NAME): Promise<any[]> {
        
        return User.update(
            {
                name:NAME
            },
            {
            where:{id:ID}
            }
        );
      
    },
    async remove(ID): Promise<number> {
        
       return User.destroy({
            where: {
            id: ID
            }
            });;
        //return User.findAll();
    },
    async findById(ID): Promise<any[]> {
        
        return User.findAll({
            where:{id:ID}
        });
    }

   
}

export default UserService;