import React, {useEffect, useState} from "react";
import HealthApi from "../../services/api/HealthApi";
import ReactJson from "react-json-view";
import {BackendAppInfo} from "../../interfaces/BackendAppInfo";

export const EnvironmentPage = () => {
    const [backendInfo, setBackendInfo] = useState<BackendAppInfo>();

    useEffect(() => {
        HealthApi.fetchHealth()
            .then(setBackendInfo);
    }, [])

    return <>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <br/>
        <ReactJson src={process.env} theme='ocean'/>
        <br/>
        <ReactJson src={backendInfo || {}} theme='ocean'/>
    </>
}
