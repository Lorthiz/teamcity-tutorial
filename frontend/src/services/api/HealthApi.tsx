import Endpoint from "./BaseUrl";
import {BackendAppInfo} from "../../interfaces/BackendAppInfo";

export default class HealthApi {

    static fetchHealth(): Promise<BackendAppInfo> {

        return fetch(`${Endpoint}/health`, {headers: {"Content-Type": "application/json"}})
            .then((result) => result.json())
    }

}
