import React from 'react'
import styled from 'styled-components'

import { Heading, Button, GlobalTypography, Panel, sizes } from '@gradehub/gooseberry'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${sizes.tablet} {
        margin: 40px;
    }
`

const App = () =>
    <StyledContainer>
        <GlobalTypography/>
        <Heading level={3}>
            Buttons
        </Heading>
        <Panel responsive={false}>
            <Button
                type='shadow'
            >
                Hello
            </Button>
        </Panel>

        <Heading level={3}>
            Headings
        </Heading>
        <Panel responsive={false}>
            <Heading level={1}>
                Heading level 1
            </Heading>
            <Heading level={2}>
                Heading level 2
            </Heading>
            <Heading level={3}>
                Heading level 3
            </Heading>
            <Heading level={4}>
                Heading level 4
            </Heading>
            <Heading level={5}>
                Heading level 5
            </Heading>
        </Panel>
    </StyledContainer>

export default App
