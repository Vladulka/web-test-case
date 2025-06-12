import React from 'react'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import {BrowserRouter as Router} from 'react-router-dom';

library.add(fas);

const THEME_COLOR = 'light';

const Body = styled.div`
  height: calc(100vh - 16px);
  padding: 8px;
  background: ${({color}) =>
          color === 'dark' ?
                  'var(--color-background-dark-default)' :
                  'var(--color-background-light-default)'};
`;

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Body color={THEME_COLOR}>
                    <Sidebar color={THEME_COLOR} />
                </Body>
            </Router>
        )
    }
}
