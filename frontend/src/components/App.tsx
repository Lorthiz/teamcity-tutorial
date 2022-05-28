import React from "react";
import {NavigationBar} from "./NavigationBar";
import {Navigate, Route, Routes} from "react-router-dom";
import {TagsPage} from "./pages/TagsPage";
import {Container} from "react-bootstrap";
import {AboutPage} from "./pages/AboutPage";
import {EnvironmentPage} from "./pages/EnvironmentPage";
import {ChangelogPage} from "./pages/changelog/ChangelogPage";

export const App = () => {
    const paths = [
        {path: `/tags`, text: "Tags"},
        {path: `/env`, text: "Environment"},
        {path: `/changelog`, text: "Changelog"},
    ]

    return <>
        <NavigationBar pathsWithNames={paths}/>
        <Container>
            <Routes>
                <Route path='/tags' element={<TagsPage/>}/>
                <Route path='/env' element={<EnvironmentPage/>}/>
                <Route path='/changelog' element={<ChangelogPage/>}/>
                <Route path='/' element={<AboutPage/>}/>
                <Route path="*" element={<Navigate to={'/'} replace/>}/>
            </Routes>
        </Container>

    </>
}



