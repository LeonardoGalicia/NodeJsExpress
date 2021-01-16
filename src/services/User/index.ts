import UserService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise < any[] > {
    return await UserService.findAll();
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function insert(ID: number, NAME: string): Promise < any> {
    return await UserService.insert(ID, NAME);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function modify(ID: number, NAME: string): Promise < any[] > {
    return await UserService.modify(ID, NAME);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function remove(ID: number): Promise < number > {
    return await UserService.remove(ID);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findById(ID: number): Promise < any[] > {
    return await UserService.findById(ID);
}
