import React from 'react'
import styled from 'styled-components';

import tensorflow from '../../../../image/technologyImgs/article/tensorflow.png';
import keras from '../../../../image/technologyImgs/article/keras.png';
import pytorch from '../../../../image/technologyImgs/article/pytorch.png';
import caffe2 from '../../../../image/technologyImgs/article/caffe2.png';
import theano from '../../../../image/technologyImgs/article/theano.png';

const StyledArticleContent = styled.div`
    padding: 30px;
`;

const StyledTitle = styled.h2`
    border-top: 3px solid white;
    padding-top: 20px;
`;

const StyledAppWrap = styled.div`
    border-bottom: 3px solid white;
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
    border: 1px solid #666;
    border-radius: 10px;
    margin: 0 auto;
    display: table;
`;

const StyledSmAppDiv = styled.div`
    width: 110px;
    height: 110px;
    border: 1px solid #666;
    border-radius: 10px;
    margin: 0 auto;
    display: table;
`;

const StyledImgWrap = styled.div`
    margin: 20px auto;
    display: table;
`;


const StyledTxt = styled.div`
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
  return (
    <article className="articleDarkBlueGray articleClass">
      <StyledArticleContent>
        <StyledTitle>AI Architecture</StyledTitle>
        <StyledAppOs>OS: Linux</StyledAppOs>
        <StyledAppWrap>
          <StyledAppTitle>Machine Learning Applications</StyledAppTitle>
          <StyledAppContent className="techContent1">
            <StyledAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Recognition of Damages
                </span>
              </StyledTxt>
            </StyledAppDiv>
            <StyledAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Classification of Brand&Model
                </span>
              </StyledTxt>
            </StyledAppDiv>
            <StyledAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Idenntification of Car&Car Parts
                </span>
              </StyledTxt>
            </StyledAppDiv>
            <StyledAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Recognition of NP, VIN, Hand Write
                </span>
              </StyledTxt>
            </StyledAppDiv>
            <StyledAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Prediction
                </span>
              </StyledTxt>
            </StyledAppDiv>
          </StyledAppContent>
        </StyledAppWrap>
        <StyledAppWrap>
          <StyledAppTitle>Computer Vision Technology</StyledAppTitle>
          <StyledAppContent className="techContent2">
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Image
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Classification
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Object
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Detection
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  Segmentation
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  OCR
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
            <StyledSmAppDiv>
              <StyledTxt className="txtDiv">
                <span className="txtSpan">
                  추론기술
                </span>
              </StyledTxt>
            </StyledSmAppDiv>
          </StyledAppContent>
        </StyledAppWrap>
        <StyledAppWrap>
          <StyledAppTitle>Machine Learning Framework</StyledAppTitle>
          <StyledAppContent>
            <StyledImgWrap className="imgWrap">
              <StyledAppImgDiv className="imgDiv"><StyledAppImg src={tensorflow} alt="tensorflow" /></StyledAppImgDiv>
              <StyledAppImgDiv className="imgDiv"><StyledAppImg src={keras} alt="keras" /></StyledAppImgDiv>
              <StyledAppImgDiv className="imgDiv"><StyledAppImg src={pytorch} alt="pytorch" /></StyledAppImgDiv>
              <StyledAppImgDiv className="imgDiv"><StyledAppImg src={caffe2} alt="caffe2" /></StyledAppImgDiv>
              <StyledAppImgDiv className="imgDiv"><StyledAppImg src={theano} alt="theano" /></StyledAppImgDiv>
            </StyledImgWrap>
          </StyledAppContent>
        </StyledAppWrap>
      </StyledArticleContent>
    </article>
  )
}