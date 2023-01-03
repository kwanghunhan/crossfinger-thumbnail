import React from "react";
import styled, { css } from "styled-components";

const ContentWrapper = styled.div`
  position: absolute;
  background-color: #000;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 300px;
  bottom: -350px;
  transition: 0.5s;
  padding: 20px;
  padding-top: 50px;
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
    font-size: 3rem;
  }

  a .fa {
    margin-right: 10px;
  }

  a:last-child fa {
    margin-right: 0;
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
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
  line-height: 3rem;
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 30px 100px;
  /* border-radius: 50px; */
  width: 100%;

  p {
    margin-bottom: 20px;

    span {
      font-size: 2.5rem;
      font-weight: 700;
      color: crimson;
    }

    b {
      font-size: 2.5rem;
      font-weight: 700;
      color: dodgerblue;
    }
  }
`;

const AccordianNav = () => {
  return (
    <AccordianNavBlock>
      <MainTitleBlock>
        <p>
          <span>CROSSFINGER</span> 는 당신의 든든한 <b>해외 파트너</b>가
          되겠습니다.
        </p>
        <p>
          고객님들의 해외제조를 위해 편리한 제조 플랫폼으로 곧 찾아뵙겠습니다.
        </p>
      </MainTitleBlock>
      <Gallery>
        <GalleryItem imageName={"image1.jpg"} number={1}>
          <ContentWrapper>
            <Content title="저렴한 견적 가격" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image2.jpg"} number={2}>
          <ContentWrapper>
            <Content title="간편한 주문 프로세스" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image3.jpg"} number={3}>
          <ContentWrapper>
            <Content title="안전한 결제 시스템" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image4.jpg"} number={4}>
          <ContentWrapper>
            <Content title="투명한 생산 스케쥴" contents="" />
          </ContentWrapper>
        </GalleryItem>
        <GalleryItem imageName={"image5.jpg"} number={5}>
          <ContentWrapper>
            <Content title="책임지는 제조 품질" contents="" />
          </ContentWrapper>
        </GalleryItem>
      </Gallery>
    </AccordianNavBlock>
  );
};

export default AccordianNav;
