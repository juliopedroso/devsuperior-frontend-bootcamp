import jwtDecode from "jwt-decode";
import { getAuthData } from "./storage";
import { Role } from "types/role";

export type TokenData = {
    exp: number,
    user_name: string,
    authorities: Role
}

export const getTokenData = (): TokenData | undefined => {
    try {
        return jwtDecode(getAuthData().access_token);
    } catch (error) {
        return undefined;
    }
};