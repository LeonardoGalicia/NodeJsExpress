
/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    insert(id: number, name: string): Promise<any>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    modify(id: number, name: string): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    remove(id: number): Promise<number>;

     /**
     * @returns {Promise<any[]>}
     * @memberof IUserFacade
     */
    findById(id: number): Promise<any[]>;


    
}