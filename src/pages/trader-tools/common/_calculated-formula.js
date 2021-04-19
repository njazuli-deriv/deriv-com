import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
    FormulaBottomWrapper,
    FormulaContainer,
    // FormulaContainerMobileOneLine,
    FormulaGreen,
    FormulaHighlight,
    FormulaHighlightSecondTemplate,
    FormulaResultGreen,
    FormulaResult,
    FormulaTopWrapper,
    FormulaValueMobile,
    // FormulaValueMobileOneLine,
    FormulaValueResultSwapSynthetic,
    FormulaValueSwapSynthetic,
    Legend,
    PointerContainer,
    PointerContainerTemplate2,
    PointerContainerResult,
    PointerContainerResultTemplate2,
    // PointerContainerMobile,
    PointerDot,
    PointerStick,
    PointerText,
    // PointerTextMobile,
} from './_formula-styling'
import { Flex } from 'components/containers'
import { isIndexEven } from 'common/utility'
import device from 'themes/device'

const DekstopWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled(Flex)`
    display: none;
    @media ${device.tabletL} {
        width: 100%;
        display: flex;
    }
`
const CalculatedFormula = ({ data }) => {
    const itemList = data.list
    return (
        <>
            <DekstopWrapper>
                {itemList.map((value, index) => {
                    const { formula, result } = value
                    return (
                        <FormulaContainer
                            key={'desktop' + index}
                            isUpsideDown={value.desktopUpsideDown}
                        >
                            <FormulaHighlight>
                                {formula.map((list, indexData) => (
                                    <>
                                        <FormulaValueSwapSynthetic key={indexData}>
                                            {list.item}
                                            {/* eslint-disable-line */}
                                            {list.description && (
                                                <PointerContainer is_top={list.isTop && list.isTop}>
                                                    <PointerDot />
                                                    <PointerStick />
                                                    <PointerText is_top={list.isTop && list.isTop}>
                                                        {list.description}
                                                        {list.legend && (
                                                            <Legend>{list.legend}</Legend>
                                                        )}
                                                    </PointerText>
                                                </PointerContainer>
                                            )}
                                        </FormulaValueSwapSynthetic>
                                        {list.next_operator && (
                                            <FormulaValueSwapSynthetic>
                                                <FormulaGreen
                                                    mr={list.margin_right}
                                                    ml={list.margin_left}
                                                >
                                                    {list.next_operator}
                                                </FormulaGreen>
                                            </FormulaValueSwapSynthetic>
                                        )}
                                    </>
                                ))}
                                <FormulaResult>
                                    <FormulaValueSwapSynthetic>
                                        <FormulaGreen
                                            mr={result.margin_right}
                                            ml={result.margin_left}
                                        >
                                            =
                                        </FormulaGreen>
                                    </FormulaValueSwapSynthetic>
                                    <FormulaValueResultSwapSynthetic>
                                        {result.total}
                                        {result.description && (
                                            <PointerContainerResult>
                                                <PointerDot />
                                                <PointerStick />
                                                <PointerText
                                                    mt={result.margin_top && result.margin_top}
                                                >
                                                    {result.description}
                                                    {result.legend && (
                                                        <Legend>{result.legend}</Legend>
                                                    )}
                                                </PointerText>
                                            </PointerContainerResult>
                                        )}
                                    </FormulaValueResultSwapSynthetic>
                                </FormulaResult>
                            </FormulaHighlight>
                        </FormulaContainer>
                    )
                })}
            </DekstopWrapper>
            <MobileWrapper>
                <>
                    {itemList.map((value, index) => {
                        const { formula, result, mobileTemplate } = value
                        const totalResult = value.result.total
                        const totalResultDesc = value.result.description
                        //console.log(totalNumberofOperation) // eslint-disable-line no-console
                        return mobileTemplate === 2 ? (
                            <FormulaContainer key={'mobile-template-2-' + index}>
                                <FormulaHighlightSecondTemplate>
                                    <FormulaTopWrapper>
                                        {formula.map((list, indexData) => {
                                            const { item, description } = list
                                            const nextOperator = list.next_operator
                                            let is_even = isIndexEven(indexData)

                                            return (
                                                <>
                                                    {!list.mobileBottom && (
                                                        <FormulaValueMobile key={indexData}>
                                                            {item}
                                                            {list.description && (
                                                                <PointerContainerTemplate2
                                                                    is_top={list.isMobileTop}
                                                                    move_left={!is_even}
                                                                    move_right={is_even}
                                                                >
                                                                    <PointerDot />
                                                                    <PointerStick
                                                                        isLongStick={
                                                                            list.long_stick
                                                                        }
                                                                    />
                                                                    <PointerText
                                                                        is_top={list.isMobileTop}
                                                                    >
                                                                        {description}
                                                                        {list.legend && (
                                                                            <Legend>
                                                                                {list.legend}
                                                                            </Legend>
                                                                        )}
                                                                    </PointerText>
                                                                </PointerContainerTemplate2>
                                                            )}
                                                        </FormulaValueMobile>
                                                    )}
                                                    {nextOperator && !list.mobileBottom && (
                                                        <FormulaValueMobile>
                                                            <FormulaGreen>
                                                                {nextOperator}
                                                            </FormulaGreen>
                                                        </FormulaValueMobile>
                                                    )}
                                                </>
                                            )
                                        })}
                                    </FormulaTopWrapper>
                                    {/* eslint-disable-line */}
                                    <FormulaBottomWrapper>
                                        {formula.map((list, indexData) => {
                                            const { item, description } = list
                                            const nextOperator = list.next_operator

                                            return (
                                                <>
                                                    {list.mobileBottom && (
                                                        <FormulaValueMobile key={indexData}>
                                                            {item}
                                                            {list.description && (
                                                                <PointerContainerTemplate2
                                                                    is_top={list.isMobileTop}
                                                                >
                                                                    <PointerDot />
                                                                    <PointerStick
                                                                        isLongStick={
                                                                            list.long_stick
                                                                        }
                                                                    />
                                                                    <PointerText
                                                                        is_top={list.isMobileTop}
                                                                    >
                                                                        {description}
                                                                        {list.legend && (
                                                                            <Legend>
                                                                                {list.legend}
                                                                            </Legend>
                                                                        )}
                                                                    </PointerText>
                                                                </PointerContainerTemplate2>
                                                            )}
                                                        </FormulaValueMobile>
                                                    )}
                                                    {nextOperator && list.mobileBottom && (
                                                        <FormulaValueMobile>
                                                            <FormulaGreen>
                                                                {nextOperator}
                                                            </FormulaGreen>
                                                        </FormulaValueMobile>
                                                    )}
                                                </>
                                            )
                                        })}
                                        <FormulaResult>
                                            <FormulaValueResultSwapSynthetic>
                                                <FormulaResultGreen>=</FormulaResultGreen>
                                                {totalResult}
                                                {totalResultDesc && (
                                                    <PointerContainerResultTemplate2 is_last>
                                                        <PointerDot />
                                                        <PointerStick />
                                                        <PointerText
                                                            mt={
                                                                result.margin_top &&
                                                                result.margin_top
                                                            }
                                                            is_last
                                                        >
                                                            {totalResultDesc}
                                                            {result.legend && (
                                                                <Legend>{result.legend}</Legend>
                                                            )}
                                                        </PointerText>
                                                    </PointerContainerResultTemplate2>
                                                )}
                                            </FormulaValueResultSwapSynthetic>
                                        </FormulaResult>
                                    </FormulaBottomWrapper>
                                </FormulaHighlightSecondTemplate>
                            </FormulaContainer>
                        ) : (
                            <FormulaContainer
                                key={'mobile-template-1-' + index}
                                isUpsideDown={value.desktopUpsideDown}
                            >
                                <FormulaHighlight>
                                    {formula.map((list, indexData) => (
                                        <>
                                            <FormulaValueSwapSynthetic
                                                key={'mobile-template-2-' + indexData}
                                            >
                                                {list.item}
                                                {/* eslint-disable-line */}
                                                {list.description && (
                                                    <PointerContainer is_top={indexData % 2 != 0}>
                                                        <PointerDot />
                                                        <PointerStick />
                                                        <PointerText
                                                            is_top={indexData % 2 != 0}
                                                            is_first={indexData == 0}
                                                        >
                                                            {list.description}
                                                            {list.legend && (
                                                                <Legend>{list.legend}</Legend>
                                                            )}
                                                        </PointerText>
                                                    </PointerContainer>
                                                )}
                                            </FormulaValueSwapSynthetic>
                                            {list.next_operator && (
                                                <FormulaValueSwapSynthetic>
                                                    <FormulaGreen
                                                        mr={list.margin_right}
                                                        ml={list.margin_left}
                                                    >
                                                        {list.next_operator}
                                                    </FormulaGreen>
                                                </FormulaValueSwapSynthetic>
                                            )}
                                        </>
                                    ))}
                                    <FormulaResult>
                                        <FormulaValueSwapSynthetic>
                                            <FormulaGreen
                                                mr={result.margin_right}
                                                ml={result.margin_left}
                                            >
                                                =
                                            </FormulaGreen>
                                        </FormulaValueSwapSynthetic>
                                        <FormulaValueResultSwapSynthetic>
                                            {result.total}
                                            {result.description && (
                                                <PointerContainerResult is_last>
                                                    <PointerDot />
                                                    <PointerStick />
                                                    <PointerText
                                                        mt={result.margin_top && result.margin_top}
                                                        is_last
                                                    >
                                                        {result.description}
                                                        {result.legend && (
                                                            <Legend>{result.legend}</Legend>
                                                        )}
                                                    </PointerText>
                                                </PointerContainerResult>
                                            )}
                                        </FormulaValueResultSwapSynthetic>
                                    </FormulaResult>
                                </FormulaHighlight>
                            </FormulaContainer>
                        )
                    })}
                </>
            </MobileWrapper>
        </>
    )
}

CalculatedFormula.propTypes = {
    data: PropTypes.object,
}

export default CalculatedFormula
