import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const FormulaBottomWrapper = styled(Flex)`
    flex-direction: row;
    margin-top: 16px;
    height: auto;
    background-color: blue;
`
export const FormulaContainer = styled(Flex)`
    width: 100%;
    margin: 16px 0 0;
    border-radius: 4px;
    background: var(--color-grey-39);
    padding: ${(props) => (props.isUpsideDown ? '58px 16px' : '24px 16px 49px')};

    @media ${device.tabletL} {
        padding: 49px 16px;
    }
`
export const FormulaContainerMobileOneLine = styled(Flex)`
    margin: 8px 0 0;
    border-radius: 8px;
    border: 1.5px solid var(--color-grey-21);
    padding: 1.6rem;
`
export const FormulaGreen = styled.span`
    display: inline-block;
    color: var(--color-green);
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-right: ${(props) => props.mr || '18px'};
    margin-left: ${(props) => props.ml || '18px'};

    @media ${device.tabletL} {
        margin-right: 6px;
        margin-left: 6px;
        font-size: 14px;
        line-height: 21px;
    }
`
export const FormulaHighlight = styled(Flex)`
    align-items: center;
    background: var(--color-white);
    padding: 30px 0;
    border-radius: 4px;
    border: 1px solid var(--color-green);
    justify-content: center;

    @media ${device.tabletL} {
        padding: 25px 0;
        flex-direction: row;
    }
`
export const FormulaHighlightSecondTemplate = styled(Flex)`
    align-items: center;
    background: var(--color-white);
    padding: 30px 0;
    border-radius: 4px;
    border: 1px solid var(--color-green);
    justify-content: center;

    @media ${device.tabletL} {
        padding: 25px 0;
        flex-direction: column;
    }
`
export const FormulaResultGreen = styled.span`
    display: inline-block;
    color: var(--color-blue-5);
    margin-right: 2.8rem;

    @media ${device.tabletL} {
        margin-right: 0;
    }
`
export const FormulaResult = styled.div`
    display: flex;
    border-radius: 4px;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    color: var(--color-green);

    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 21px;
        flex-direction: row;
    }
`
export const FormulaTopWrapper = styled(Flex)`
    flex-direction: row;
    height: auto;
    margin-top: 0;
    align-items: flex-start;
    background-color: red;
`
export const FormulaValueMobile = styled.div`
    display: inline-block;
    text-align: center;
    position: relative;
    font-size: 14px;
    font-weight: normal;
    color: var(--color-black-3);
`
export const FormulaValueMobileOneLine = styled.div`
    display: inline-block;
    text-align: center;
    position: relative;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    color: var(--color-black-3);
    min-width: 10px;
`
export const FormulaValueResultSwapSynthetic = styled(Flex)`
    flex-direction: row;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: normal;
    position: relative;
`
export const FormulaValueSwapSynthetic = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    color: var(--color-black-3);
    position: relative;

    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 21px;
    }

    @media (max-width: 350px) {
        font-size: 12px;
    }
`
export const PointerContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1rem;
    ${(props) => props.is_top && 'display:flex;flex-direction: column-reverse;top: -50px;'};

    @media ${device.tabletL} {
        margin-top: 10px;
    }
`
export const PointerContainerResult = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 33px;

    @media ${device.tabletL} {
        ${(props) => props.is_last && 'top: 30px;'};
    }
`
export const PointerContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${(props) => props.ml || '0'};
`
export const PointerDot = styled.div`
    height: 8px;
    width: 8px;
    background: var(--color-grey-21);
    border: 1px solid var(--color-grey-21);
    border-radius: 50%;
`
export const PointerStick = styled.div`
    position: relative;
    height: 32px;
    width: 1px;
    background-color: black;
    opacity: 0.1;
    margin-left: 3px;

    @media ${device.tabletL} {
        height: 25px;
    }
`
export const PointerText = styled.div`
    font-size: 16px;
    line-height: 24px;
    width: 125px;
    font-weight: bold;
    color: var(--color-green);
    position: absolute;
    left: 57%;
    transform: translateX(-57%);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    ${(props) => props.is_top && 'top: -25px;'};
    margin-top: ${(props) => props.mt || '0'};

    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 21px;
        ${(props) => props.is_top && 'top: -20px;left: 50%;transform: translateX(-50%);'};
        ${(props) =>
            props.is_last &&
            'left: 68%;transform: translateX(-68%);width: 105px;margin-top: 1px;justify-content: flex-end;'};
        ${(props) =>
            props.is_first &&
            'justify-content: flex-start;left: 17%;transform: translateX(-17%);width: auto;'};
    }

    @media (max-width: 350px) {
        font-size: 12px;
    }
`
export const PointerTextMobile = styled.div`
    font-size: 14px;
    font-weight: normal;
    color: var(--color-grey-5);
    line-height: 21px;
    text-align: center;

    @media (max-width: 350px) {
        font-size: 12px;
    }
`
export const ResultStrong = styled.span`
    font-weight: bold;
    margin-right: 0.4rem;
    color: var(--color-green);
    font-size: 16px;
    line-height: 24px;
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 21px;
    }

    @media (max-width: 350px) {
        font-size: 12px;
    }
`

export const Legend = styled.span`
    font-size: 10px;
    color: var(--color-black-3);
    line-height: 10px;
    margin-left: 4px;
`
