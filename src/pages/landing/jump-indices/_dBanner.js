import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const SectionWrapper = styled(SectionContainer)`
    background: white;
    padding: 80px 120px;
    @media ${device.tabletL} {
        padding: 0 0 98px;
    }
`
const StyledHeader = styled(Header)`
    text-align: center;
    max-width: 1200px;
    @media ${device.tabletL} {
        max-width: 328px;
    }
`

const DBanner = () => {
    return (
        <SectionWrapper>
            <Flex>
                <StyledHeader type="section-title" weight="normal">
                    {localize(
                        'Trade synthetics with our new jump indices and take advantage of the constant volatility with a twist — price jumps.',
                    )}
                </StyledHeader>
            </Flex>
        </SectionWrapper>
    )
}

export default DBanner
