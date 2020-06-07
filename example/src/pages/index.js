import { Button, sizes, Heading, Panel, Text, Input } from '@gradehub/gooseberry'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    
    @media ${sizes.tablet} {
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

const Page = () =>
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
                            size='large'
                            placeholder='Large input'
                        />
                        <Input
                            size='medium'
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
