import { Button, MediaQuery, Heading, Panel, Text, Input } from '@gradehub/gooseberry'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    
    @media ${MediaQuery.tablet} {
        margin: 40px;
    }
`

const StyledMaxWidth = styled.div`
    max-width: 300px;
`

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`

const StyledSpacing = styled.div`
    display: flex;
    flex-direction: column;
    @media ${MediaQuery.tablet} {
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
    
    @media ${MediaQuery.tablet} {
        flex-direction: row;
    }
`

const Page: React.FC = () =>
    <StyledContainer>
        <Heading level={1}>
            Gooseberry
        </Heading>
        <Heading level={4}>
            The GradeHub Style Guide
        </Heading>

        <StyledSection>
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
                        <Button color='black' kind='frost'>
                            Black
                        </Button>
                        <Button color='blue' kind='frost'>
                            Blue
                        </Button>
                        <Button color='white' kind='frost'>
                            White
                        </Button>
                    </StyledSpacing>
                    <StyledSpacing>
                        <Button size='large' kind='secondary'>
                            Large
                        </Button>
                        <Button size='medium' kind='secondary'>
                            Medium
                        </Button>
                        <Button size='small' kind='secondary'>
                            Small
                        </Button>
                    </StyledSpacing>
                </StyledGroup>
            </Panel>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Input
            </Heading>
            <Panel responsive={false}>
                <StyledMaxWidth>
                    <StyledSpacing>
                        <Input
                            inputSize='large'
                            placeholder='Large input'
                        />
                        <Input
                            inputSize='medium'
                            placeholder='Medium input'
                        />
                    </StyledSpacing>
                </StyledMaxWidth>
            </Panel>
        </StyledSection>

        <StyledSection>
            <Heading level={3}>
                Headings
            </Heading>
            <Panel responsive={false}>
                <StyledGroup>
                    <StyledColumn>
                        <Heading level={1}>
                            Heading 1
                        </Heading>
                        <Heading level={2}>
                            Heading 2
                        </Heading>
                        <Heading level={3}>
                            Heading 3
                        </Heading>
                        <Heading level={4}>
                            Heading 4
                        </Heading>
                        <Text>
                            Text
                        </Text>
                        <Text size='small'>
                            Text small
                        </Text>
                    </StyledColumn>
                </StyledGroup>
            </Panel>
        </StyledSection>
    </StyledContainer>

export default Page
