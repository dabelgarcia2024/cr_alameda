import React from "react";
import { Motion, spring } from "react-motion";
import styles from "../styles/estudioDeLos12Pasos.module.css";

const WIDTH = 400;
const DATA_PER_PAGE = 6;

const Content = ({ text, imageSrc, altText }) => (
  <div className={styles.contentWrapper}>
    <h1>{text}</h1>
    <img src={imageSrc} alt={altText} className={styles.icon} />
  </div>
);

class CarouselSection extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      currentPage: 1,
      timerId: null,
      totalPages: Math.ceil(CAROUSEL_CONTENT.length / DATA_PER_PAGE),
      cycles: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCarouselTurn = this.handleCarouselTurn.bind(this);
    this.getChangeOfPages = this.getChangeOfPages.bind(this);
    this.getPointIndexes = this.getPointIndexes.bind(this);
  }

  componentDidMount() {
    const timerId = setInterval(() => this.handleCarouselTurn(timerId), 5000);
    this.setState({ timerId });
  }

  componentWillUnmount() {
    const { timerId } = this.state;
    clearInterval(timerId);
  }

  handleClick(to) {
    this.setState((prevState) => ({
      currentSlide: to,
      currentPage: this.getChangeOfPages(to, prevState.currentPage),
    }));
  }

  handleCarouselTurn(timerId) {
    const newState = { ...this.state };

    if (newState.cycles === 10) {
      clearInterval(timerId);
      return;
    }

    if (newState.currentSlide + 1 >= CAROUSEL_CONTENT.length) {
      newState.cycles += 1;
      newState.currentSlide = 0;
    } else {
      newState.currentSlide += 1;
    }

    newState.currentPage = this.getChangeOfPages(
      newState.currentSlide,
      newState.currentPage
    );

    this.setState({ ...newState });
  }

  getChangeOfPages(currentSlide, currentPage) {
    const { totalPages } = this.state;

    if (currentSlide === 0) return 1;

    if (currentSlide === (DATA_PER_PAGE - 1) * currentPage) {
      if (currentPage === totalPages) return 1;
      return currentPage + 1;
    }

    if (
      currentSlide === (DATA_PER_PAGE - 1) * (currentPage - 1) &&
      currentSlide !== 0
    )
      return currentPage - 1;

    return currentPage;
  }

  getPointIndexes() {
    const { currentPage } = this.state;

    return [...Array(DATA_PER_PAGE).keys()].map(
      (x) => x + (DATA_PER_PAGE - 1) * (currentPage - 1)
    );
  }

  render() {
    const { currentSlide, currentPage, totalPages } = this.state;
    const { slides } = this.props;
    const indexArray = this.getPointIndexes();

    const leftStartCoord = -1 * currentSlide * WIDTH;

    let configs = [];
    slides.reduce((prevLeft, _, i) => {
      configs.push({
        left: spring(prevLeft, { stiffness: 170, damping: 26 }),
      });
      return prevLeft + WIDTH;
    }, leftStartCoord);

    return (
      <div className={styles.App}>
        <div className={styles.MotionContainer}>
          {configs.map((style, i) => (
            <Motion key={i} style={style}>
              {(style) => (
                <div className={styles.MotionInner} style={style}>
                  <Content
                    text={slides[i].questionParts.join(" ")}
                    imageSrc={slides[i].imageSrc}
                    altText={slides[i].altText}
                  />
                </div>
              )}
            </Motion>
          ))}
        </div>

        <div className={styles.dots}>
          {indexArray.map((index) => {
            if (currentPage === totalPages && index >= slides.length)
              return null;

            return (
              <span
                key={`dot-${index}`}
                onClick={() => this.handleClick(index)}
                style={{
                  marginLeft: "5px",
                  cursor: "pointer",
                  fontSize:
                    index === (DATA_PER_PAGE - 1) * currentPage ||
                    (index === (DATA_PER_PAGE - 1) * (currentPage - 1) &&
                      index !== 0)
                      ? "20px"
                      : "25px",
                  color: currentSlide === index ? "salmon" : "teal",
                  textShadow: "0 3px 3px mistyrose",
                }}
              >
                &#9679;
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CarouselSection;
