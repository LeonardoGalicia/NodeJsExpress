
/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findAll(): Promise<any[]>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    insert(ID: number, NAME: string): Promise<any>;

    /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    modify(ID: number, NAME: string): Promise<any[]>;

      /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    remove(ID: number): Promise<number>;

      /**
     * @returns {Promise<any[]>}
     * @memberof IUserService
     */
    findById(ID: number): Promise<any[]>;
}