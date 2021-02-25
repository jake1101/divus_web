import React from 'react'
import styled from 'styled-components';

import tensorflow from '../../../../../image/technologyImgs/article/tensorflow.png';
import keras from '../../../../../image/technologyImgs/article/keras.png';
import pytorch from '../../../../../image/technologyImgs/article/pytorch.png';
import caffe2 from '../../../../../image/technologyImgs/article/caffe2.png';
import theano from '../../../../../image/technologyImgs/article/theano.png';

const StyledArticleWrap = styled.article`
    padding: 30px 20% 30px 20%;
    
`;

const StyledArticleContent = styled.div`
    padding: 30px;
`;

const StyledTitle = styled.h2`
    border-top: 1px solid white;
    padding-top: 20px;
`;

const StyledSub = styled.h2`

`;

const StyledAppWrap = styled.div`
    border-bottom: 1px solid white;
    padding: 30px;
    margin: 10px;
`;

const StyledAppOs = styled.h2`
    padding-top: 20px;
`;

const StyledAppTitle = styled.h2`
    padding-bottom: 20px;
`;

const StyledAppContent = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledAppDiv = styled.div`
    width: 130px;
    height: 130px;
    border: 1px solid white;
    border-radius: 10px;
    margin: 0 auto;
    display: table;
`;

const StyledSmAppDiv = styled.div`
    width: 110px;
    height: 110px;
    border: 1px solid white;
    border-radius: 10px;
    margin: 0 auto;
    display: table;
`;

const StyledImgWrap = styled.div`
    width: 120px;
    height: 120px;
    margin: 0 auto;
    display: table;
`;


const StyledTxt = styled.p`
    display: table-cell;
    vertical-align: middle;
`;

const StyledAppImgDiv = styled.div`
    display: table-cell;
    vertical-align: middle;
    padding: 10px 30px;
`;

const StyledAppImg = styled.img`
    width: 100px;
`;

export default function Article1() {
    return(
        <StyledArticleWrap className="article1">
            <StyledArticleContent>
            <StyledTitle>AI Architecture</StyledTitle>
            <StyledAppOs>OS: Linux</StyledAppOs>
                <StyledAppWrap>
                    <StyledAppTitle>Machine Learning Applications</StyledAppTitle>
                    <StyledAppContent>
                        <StyledAppDiv>
                            <StyledTxt>
                                Recognition of Damages
                            </StyledTxt>
                        </StyledAppDiv>
                        <StyledAppDiv>
                            <StyledTxt>
                                Classification of Brand&Model
                            </StyledTxt>
                        </StyledAppDiv>
                        <StyledAppDiv>
                            <StyledTxt>
                                Idenntification of Car&Car Parts
                            </StyledTxt>
                        </StyledAppDiv>
                        <StyledAppDiv>
                            <StyledTxt>
                                Recognition of NP, VIN, Hand Write
                            </StyledTxt>
                        </StyledAppDiv>
                        <StyledAppDiv>
                            <StyledTxt>
                                Prediction
                            </StyledTxt>
                        </StyledAppDiv>
                    </StyledAppContent>
                </StyledAppWrap>
                <StyledAppWrap>
                    <StyledAppTitle>Computer Vision Technology</StyledAppTitle>
                    <StyledAppContent>
                        <StyledSmAppDiv>
                            <StyledTxt>Image</StyledTxt>
                        </StyledSmAppDiv>
                        <StyledSmAppDiv>
                            <StyledTxt>Classification</StyledTxt>
                        </StyledSmAppDiv>
                        <StyledSmAppDiv>
                            <StyledTxt>Object</StyledTxt>
                        </StyledSmAppDiv>
                        <StyledSmAppDiv>
                            <StyledTxt>Detection</StyledTxt>
                        </StyledSmAppDiv>
                        <StyledSmAppDiv>
                            <StyledTxt>Segmentation</StyledTxt>
                        </StyledSmAppDiv>
                        <StyledSmAppDiv>
                            <StyledTxt>OCR</StyledTxt>
                        </StyledSmAppDiv>
                        <StyledSmAppDiv>
                            <StyledTxt>추론기술</StyledTxt>
                        </StyledSmAppDiv>
                    </StyledAppContent>
                </StyledAppWrap>
                <StyledAppWrap>
                    <StyledAppTitle>Machine Learning Framework</StyledAppTitle>
                    <StyledAppContent>
                        <StyledImgWrap>
                            <StyledAppImgDiv><StyledAppImg src={tensorflow} alt="tensorflow" /></StyledAppImgDiv>
                            <StyledAppImgDiv><StyledAppImg src={keras} alt="keras" /></StyledAppImgDiv>
                            <StyledAppImgDiv><StyledAppImg src={pytorch} alt="pytorch" /></StyledAppImgDiv> 
                            <StyledAppImgDiv><StyledAppImg src={caffe2} alt="caffe2" /></StyledAppImgDiv>
                            <StyledAppImgDiv><StyledAppImg src={theano} alt="theano" /></StyledAppImgDiv>
                        </StyledImgWrap>
                    </StyledAppContent>
                </StyledAppWrap>
            </StyledArticleContent>
        </StyledArticleWrap>
    )
}