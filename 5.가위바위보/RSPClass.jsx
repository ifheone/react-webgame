import React, { Component } from "react";

const rspCoords = {
  바위: "0",
  가위: "162px",
  보: "310px",
};

class RSP extends Component {
  state = {
    result: "",
    imgCoord: "0",
    score: 0,
  };
  interval;
  componentDidMount() {
    //컴포넌트가 첫 렌더링 된 후

    this.interval = setInterval(() => {
      const { imgCoord } = this.state;
      console.log("hello", this.state.imgCoord);
      if (imgCoord === rspCoords.바위) {
        this.setState({
          imgCoord: rspCoords.가위,
        });
      } else if (imgCoord === rspCoords.가위) {
        this.setState({
          imgCoord: rspCoords.보,
        });
      } else if (imgCoord === rspCoords.보) {
        this.setState({
          imgCoord: rspCoords.바위,
        });
      }
    }, 1000);
  }
  componentWillUnmount() {
    //컴포넌트가 제거되기 직전
    clearInterval(this.interval);
  }
  onClickBtn = (choice) => {};
  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;
