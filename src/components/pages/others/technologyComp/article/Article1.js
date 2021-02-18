import React from 'react'
import styled from 'styled-components';

import tensorflow from '../../../../../image/technologyImgs/article/tensorflow.png';
import keras from '../../../../../image/technologyImgs/article/keras.png';
import pytorch from '../../../../../image/technologyImgs/article/pytorch.png';
import caffe2 from '../../../../../image/technologyImgs/article/caffe2.png';
import theano from '../../../../../image/technologyImgs/article/theano.png';

const StyledArticleWrap = styled.article`
    margin: 0 20% 0 20%;

`;

const StyledTitle = styled.h2`
    
`;

const StyledAppWrap = styled.div`
`;

export default function Article1() {
    return(
        <StyledArticleWrap>
            <StyledTitle>AI Architecture</StyledTitle>
            <StyledAppWrap>
                <span>Machine Learning Applications</span>
                <div>
                    <span>
                        Recognition of Damages
                    </span>
                    <span>
                        Classification of Brand&Model
                    </span>
                    <span>
                        Idenntification of Car&Car Parts
                    </span>
                    <span>
                        Recognition of NP, VIN, Hand Write
                    </span>
                    <span>
                        Prediction
                    </span>
                </div>
            </StyledAppWrap>
            <div>
                <span>Computer Vision Technology</span>
                <div>
                    <span>Image</span>
                    <span>Classification</span>
                    <span>Object</span>
                    <span>Detection</span>
                    <span>Segmentation</span>
                    <span>OCR</span>
                    <span>추론기술</span>
                </div>
            </div>
            <div>
                <span>Machine Learning Framework</span>
                <div>
                    <span><img src={tensorflow} alt="tensorflow" /></span>
                    <span><img src={keras} alt="keras" /></span>
                    <span><img src={pytorch} alt="pytorch" /></span> 
                    <span><img src={caffe2} alt="caffe2" /></span>
                    <span><img src={theano} alt="theano" /></span>
                </div>
            </div>
            <div>
                <span>OS: Linux</span>
            </div>
        </StyledArticleWrap>
    )
}