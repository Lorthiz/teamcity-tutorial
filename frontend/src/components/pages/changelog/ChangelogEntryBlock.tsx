import React from "react";
import {ListGroup, ListGroupItem} from "react-bootstrap";

interface ChangelogEntry {
    version: string;
    changes: string[];
}

export const ChangelogEntryBlock = (entry: ChangelogEntry) => {

    return <>
        <ListGroup>
            <ListGroupItem className={'mt-3'} active>{entry.version}</ListGroupItem>
            {entry.changes.map(change => <ListGroupItem>{change}</ListGroupItem>)}
        </ListGroup>
    </>
}
