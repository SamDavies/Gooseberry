import React from 'react'
import styled from 'styled-components'

import { Heading, Button, GlobalStyles, Panel, sizes } from '@gradehub/gooseberry'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${sizes.tablet} {
        margin: 40px;
    }
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${sizes.tablet} {
        margin-right: 20px;
    }
    
    & > *:not(:last-child) {
        margin-bottom: 10px;
    }
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-right: 20px;
`

const StyledGroup = styled.div`
    display: flex;
    flex-direction: column;
    
    @media ${sizes.tablet} {
        flex-direction: row;
    }
`

const App = () =>
    <StyledContainer>
        <GlobalStyles/>
        <Heading level={3}>
            Buttons
        </Heading>
        <Panel responsive={false}>
            <StyledGroup>
                <StyledSpacing>
                    <Button kind='primary'>
                        Primary
                    </Button>
                    <Button kind='secondary'>
                        Secondary
                    </Button>
                    <Button kind='ghost'>
                        Ghost
                    </Button>
                </StyledSpacing>
                <StyledSpacing>
                    <Button colour='black'>
                        Black
                    </Button>
                    <Button colour='blue'>
                        Blue
                    </Button>
                    <Button colour='white'>
                        White
                    </Button>
                </StyledSpacing>
                <StyledSpacing>
                    <Button size='large'>
                        Large
                    </Button>
                    <Button size='medium'>
                        Medium
                    </Button>
                    <Button size='small'>
                        Small
                    </Button>
                </StyledSpacing>
            </StyledGroup>
        </Panel>

        <Heading level={3}>
            Headings
        </Heading>
        <Panel responsive={false}>
            <StyledGroup>
                <StyledColumn>
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
                </StyledColumn>
            </StyledGroup>
        </Panel>
    </StyledContainer>

export default App
