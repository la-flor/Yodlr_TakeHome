import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class YodlrApi {
    static async request(endpoint, data = {}, method = "get") {

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};

        try {
            return (await axios({ url, method, data, params })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Individual API routes

    // Get all users from api
    static async getUsers(title) {
        let res = await this.request("users", { title });
        return res;
    }

    static async getUser(id) {
        let res = await this.request(`users/${id}`, { id });
        return res;
    }

    static async updateUser(id, userInfo) {
        let res = await this.request(`users/${id}`, userInfo, "put");
        return res;
    }

    static async deleteUser(id) {
        let res = await this.request(`users/${id}`, { id }, "delete");
        return res;
    }

    static async signUp(email) {
        let res = await this.request("users", { email }, "post");
        return res;
    }

}

export default YodlrApi;