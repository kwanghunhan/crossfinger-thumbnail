import React from "react";
import styled, { css } from "styled-components";

const ContentWrapper = styled.div`
  position: absolute;
  background-color: #000;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 130px;
  bottom: -350px;
  transition: 0.5s;
  padding: 20px;
  padding-top: 30px;
  box-sizing: border-box;

  .sns {
    padding: 10px;

    a {
      color: #333;
    }
  }

  /* &:before {
    content: "";
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 50px;
    left: 0;
    top: -5px;
    transform-origin: left bottom;
    transform: rotate(-5deg) scale(1.3);
  } */
`;

const GalleryItem = styled.li`
  position: relative;
  flex: 1;
  border-right: 5px solid #000;
  transition: 0.5s;
  overflow: hidden;

  &:last-child {
    border-right: none;
  }

  ${(props) =>
    props.imageName &&
    css`
      &:nth-child(${props.number}) {
        background: url(${require(`../images/${props.imageName}`)}) no-repeat
          center center;
        background-size: cover;
      }
    `}
`;

const Gallery = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;

  &:hover ${GalleryItem} {
    flex: 1;
  }

  ${GalleryItem}:hover {
    flex: 3;
    filter: grayscale(1);

    ${ContentWrapper} {
      bottom: 0;
      transition-delay: 0.5s;
    }
  }
`;

const AccordianNavBlock = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  /* border: 1px solid dodgerblue; */
`;

const ContentBlock = styled.div`
  p {
    text-decoration: none;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
  }

  a .fa {
    margin-right: 10px;
  }

  a:last-child fa {
    margin-right: 0;
  }

  @media screen and (max-width: 950px) {
    p {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }

  @media screen and (max-width: 700px) {
    p {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }

  @media screen and (max-width: 550px) {
    p {
      font-size: 1rem;
      line-height: 1rem;
    }
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 0.8rem;
      line-height: 1.3rem;
    }
  }
`;

const Content = ({ title, contents }) => {
  return (
    <ContentBlock>
      <p>{title}</p>
      <p>{contents}</p>
      <div className="sns">
        <a href="#none">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="#none">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#none">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="#none">
          <i className="fa fa-google-plus-square"></i>
        </a>
      </div>
    </ContentBlock>
  );
};

const MainTitleBlock = styled.div`
  background-color: #0000008f;
  color: #fff;
  font-size: 1.7rem;
  font-weight: 500;
  /* font-style: italic; */
  line-height: 3rem;
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  text-align: center;
  /* padding: 30px 100px; */
  /* border-radius: 50px; */
  width: 100%;
  margin: 0 auto;
  padding: 30px;

  .title {
    span {
      font-size: 8rem;
      line-height: 8rem;
      font-weight: 700;
      text-align: center;
    }
  }

  .contents {
    font-size: 2rem;
    line-height: 2.5rem;

    b {
      color: dodgerblue;
    }
  }

  .main-content {
    b {
      color: crimson;
    }
    padding-bottom: 20px;
  }

  @media screen and (max-width: 950px) {
    .title {
      span {
        font-size: 6rem;
        line-height: 6rem;
      }
    }
    .contents {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  @media screen and (max-width: 700px) {
    .title {
      span {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
    .contents {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      span {
        font-size: 3rem;
        line-height: 3rem;
      }
    }
    .contents {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

const AccordianNav = () => {
  return (
    <AccordianNavBlock>
      <MainTitleBlock>
        <div className="title">
          <span>NOVALUX</span>
        </div>
        <div className="contents">
          <br></br>
          <p className="main-content">
            <b>비전</b>을 현실로 만드는 기술 파트너
          </p>
          <p>
            최첨단 <b>머신비전 솔루션</b>으로
          </p>
          <p>비즈니스의 경쟁력을 높이세요.</p>
          <p>coming soon...</p>
          {/* <p>
            현실의 두려움에 <b>도전</b>합니다.
          </p>
          <p>
            세계를 <b>연결</b>해 나갑니다.
          </p>
          <p>
            새로운 해외 <b>제조혁신</b>을 이루겠습니다.
          </p>
          <p>coming soon...</p> */}
        </div>
        {/* <p>
          <span>CROSSFINGER</span>
        </p>
        <p>
          믿을 수 있는 <b>해외 제조</b> 플랫폼으로 곧 찾아 뵙겠습니다.
        </p> */}
        {/* <p>
          <span>CROSSFINGER</span> 는 당신의 든든한 <b>해외 파트너</b>가
          되겠습니다.
        </p>
        <p>
          고객님들의 해외제조를 위해 편리한 제조 플랫폼으로 곧 찾아뵙겠습니다.
        </p> */}
        {/* <p>
          <span>CROSSFINGER</span> 는 현실의 두려움에 도전합니다.
        </p>
        <p>
          <span>CROSSFINGER</span> 는 세계를 연결해 나갑니다.
        </p>
        <p>
          그래서 새로운 <b>제조혁신</b>을 써 나가고 있습니다.
        </p>
        <p>
          그 결과 최고의 <b>B2M</b> 플랫폼을 만들었습니다.
        </p>
        <p>
          자! <span>CROSSFINGER</span> 와 함께 하시겠습니까?
        </p> */}
        {/* <p>
          <sapn>
            이제부터 <b>해외 제조</b>는 <span>CROSSFINGER</span>입니다.
          </sapn>
        </p> */}
      </MainTitleBlock>
      <Gallery>
        <GalleryItem imageName={"image1.jpg"} number={1}>
          <ContentWrapper>
            <Content title="저렴한 개발 견적" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image2.jpg"} number={2}>
          <ContentWrapper>
            <Content title="다양한 비전 솔루션" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image3.jpg"} number={3}>
          <ContentWrapper>
            <Content title="신속한 사용자 요구분석" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image4.jpg"} number={4}>
          <ContentWrapper>
            <Content title="투명한 개발 스케쥴" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image5.jpg"} number={5}>
          <ContentWrapper>
            <Content title="책임지는 시스템 품질" contents="" />
          </ContentWrapper>
        </GalleryItem>
      </Gallery>
    </AccordianNavBlock>
  );
};

export default AccordianNav;
