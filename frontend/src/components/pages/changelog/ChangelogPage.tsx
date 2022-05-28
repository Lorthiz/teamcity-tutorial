import React, {useMemo} from "react";
import {ChangelogEntryBlock} from "./ChangelogEntryBlock";

export const ChangelogPage = () => {

    const changelog = useMemo(() => [
        {
            version: "0.1.2 - hotfix",
            changes: [
                "Fixed broken test",
            ]
        },
        {
            version: "0.1.2",
            changes: [
                "Added changelog page",
                "Added test that will break the build"
            ]
        },
        {
            version: "0.1.1",
            changes: [
                "Removed unused console.log"
            ]
        },
        {
            version: "0.1.0",
            changes: [
                "Created this simple app with to manage tags, using Spring Boot, M2 in memory database and React"
            ]
        }
    ], [])

    return <big>
        {changelog.map(versionEntry =>
            <ChangelogEntryBlock version={versionEntry.version} changes={versionEntry.changes}/>
        )}
    </big>
}
