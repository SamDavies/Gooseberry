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

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: row;
    & > * {
        margin: 10px;
    }
`

const App = () =>
    <StyledContainer>
        <GlobalTypography/>
        <Heading level={3}>
            Buttons
        </Heading>
        <Panel responsive={false}>
            <StyledSpacing>
                <Button kind='primary' colour='black'>
                    Primary black
                </Button>
                <Button kind='primary' colour='blue'>
                    Primary blue
                </Button>
                <Button kind='primary' colour='white'>
                    Primary white
                </Button>
            </StyledSpacing>
            <StyledSpacing>
                <Button kind='ghost' colour='black'>
                    Ghost black
                </Button>
                <Button kind='ghost' colour='blue'>
                    Ghost blue
                </Button>
            </StyledSpacing>
            <StyledSpacing>
                <Button kind='primary' size='large'>
                    Large primary
                </Button>
                <Button kind='frost' size='large'>
                    Large frost
                </Button>
                <Button kind='secondary' size='large'>
                    Large secondary
                </Button>
                <Button kind='ghost' size='large'>
                    Large ghost
                </Button>
            </StyledSpacing>
            <StyledSpacing>
                <Button kind='primary' size='medium'>
                    Medium primary
                </Button>
                <Button kind='frost' size='medium'>
                    Medium frost
                </Button>
                <Button kind='secondary' size='medium'>
                    Medium secondary
                </Button>
                <Button kind='ghost' size='medium'>
                    Medium ghost
                </Button>
            </StyledSpacing>
            <StyledSpacing>
                <Button kind='primary' size='small'>
                    Small primary
                </Button>
                <Button kind='frost' size='small'>
                    Small frost
                </Button>
                <Button kind='secondary' size='small'>
                    Small secondary
                </Button>
                <Button kind='ghost' size='small'>
                    Small ghost
                </Button>
            </StyledSpacing>
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
