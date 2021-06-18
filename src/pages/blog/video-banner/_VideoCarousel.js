import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoPlayer from './_video-player'
import { Flex } from 'components/containers'
import { CustomCarousel, Header, QueryImage } from 'components/elements'
import device from 'themes/device'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const query = graphql`
    query {
        video_banner_1: file(relativePath: { eq: "blog/video/img-thumbnail-1.png" }) {
            ...fadeIn
        }
        video_banner_2: file(relativePath: { eq: "blog/video/img-thumbnail-2.png" }) {
            ...fadeIn
        }
        video_banner_3: file(relativePath: { eq: "blog/video/img-thumbnail-3.png" }) {
            ...fadeIn
        }
        video_banner_4: file(relativePath: { eq: "blog/video/img-thumbnail.png" }) {
            ...fadeIn
        }
        video_banner_5: file(relativePath: { eq: "blog/video/img-thumbnail-1.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
`
const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
    width: 180px;
`
const StyledHeader = styled(Header)`
    margin-bottom: 4px;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 40px;
    }
`
const CarouselWrapper = styled(Flex)`
    height: auto;
`
const SmallDetailsWrapper = styled(Flex)`
    padding-top: 8px;
    height: 24px;
    font-weight: normal;
    justify-content: flex-start;
    align-items: center;
`
const StyledPublishedDate = styled(Header)`
    color: var(--color-grey-17);
    font-weight: normal;
    width: auto;
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px;
`
const StyledDuration = styled(Header)`
    color: var(--color-grey-17);
    width: auto;
    font-weight: normal;
`
const ItemsMainWrapper = styled(Flex)`
    min-width: 327px;
    cursor: pointer;
`
const ImgWrapper = styled(Flex)`
    width: 145px;
    position: relative;
`
const PlayerIconWrapper = styled(Flex)`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    margin-bottom: 25px;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const PlayerIcon = styled.img`
    width: 20px;
    height: 16px;
`

const VideoCarousel = ({ carousel_items }) => {
    const [show, setShow] = useState(false)

    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = (event) => {
        if (event.defaultPrevented) return
        setShow(true)
    }
    const data = useStaticQuery(query)

    const settings = {
        options: {
            align: 'start',
            draggable: 'false',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            maxWidth: '327px',
            height: 'auto',
            marginRight: '23px',
            position: 'relative',
        },
        custom_blog_video_nav_style: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bottom: 'unset',
            right: 'unset',
            custom_chevron_color: 'custom',
            custom_is_displayed_on_mobile: true,
        },
    }

    return (
        <>
            <MainWrapper>
                <CarouselWrapper>
                    <CustomCarousel {...settings} custom_blog_video_nav>
                        {carousel_items.map((item, index) => {
                            return (
                                <ItemsMainWrapper key={index} onClick={handleOpenVideo}>
                                    <ImgWrapper>
                                        <QueryImage data={data[item['image']]} />
                                        <PlayerIconWrapper>
                                            <PlayerIcon src={PlayIcon} />
                                        </PlayerIconWrapper>
                                    </ImgWrapper>
                                    <DetailsWrapper>
                                        <StyledHeader type="main-paragraph">
                                            {item.title}
                                        </StyledHeader>
                                        <SmallDetailsWrapper>
                                            <StyledPublishedDate type="main-paragraph">
                                                {item.date}
                                            </StyledPublishedDate>
                                            <StyledDot />
                                            <StyledDuration type="main-paragraph">
                                                {item.duration}
                                            </StyledDuration>
                                        </SmallDetailsWrapper>
                                    </DetailsWrapper>
                                </ItemsMainWrapper>
                            )
                        })}
                    </CustomCarousel>
                </CarouselWrapper>
            </MainWrapper>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={handleCloseVideo} />}
        </>
    )
}

VideoCarousel.propTypes = {
    carousel_items: PropTypes.array,
}
export default VideoCarousel
