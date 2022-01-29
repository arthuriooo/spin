import { useState } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Triangle from "./Triangle.svg";
import WhiteTriangle from "./WhiteTriangle.svg";

// const spin = keyframes`
// from {transform: rotate(0deg)}
// to {transform: rotate(360deg)}
// `;

const spin2 = keyframes`
from {transform: rotate(0deg)}
to {transform: rotate(1440deg)}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background: linear-gradient(#da22ff, #9733ee); */
  background: white;
`;

const Title = styled.p`
  color: black;
  font-size: 40px;
  padding: 0 20px;
  font-weight: bold;
  text-align: center;

  margin: -140px 0 20px;
`;

const Circle = styled(motion.div)`
  min-width: 300px;
  min-height: 300px;
  min-width: 300px;
  min-height: 300px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  margin-top: -70px;

  z-index: 40;

  overflow: hidden;

  /* animation: ${spin2} ${({ isSpinnable, spins }) =>
    isSpinnable && `${spins}s`}
    infinite; */
`;

// const CircleText = styled.p``;

const CircleHalf = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  z-index: 50;

  overflow: hidden;

  border-top-left-radius: 1000px;
  border-top-right-radius: 1000px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin: 1px 0;

  border: 6px solid black;

  /* background: white; */
  /* background: linear-gradient(#a8ff78, #78ffd6); */

  /* > div { */
  /* background: linear-gradient(#11998e, #38ef7d); */
  /* background: white; */
  /* border-radius: 50%; */
  /* overflow: hidden; */

  /* z-index: 80; */
  /* } */

  box-shadow: 0px 0px 400px 10px rgba(255, 255, 255, 0.5);

  > p {
    z-index: 100;

    font-size: 30px;
    font-weight: bold;
    color: black;
  }

  &:last-child {
    transform: rotate(180deg);
    /* background: linear-gradient(#ff416c, #ff4b2b); */

    /* > div { */
    /* background: linear-gradient(#ed213a, #93291e); */
    /* } */
  }
`;

// const Back = styled.div`
//   position: absolute;
//   width: 300%;
//   height: 300%;

//   animation: ${spin} 2s infinite;

//   border: 4px solid blue;
//   box-sizing: border-box;
// `;

const Arrow = styled.img`
  width: 80px;
  margin: 0;

  z-index: 200;
`;

const Button = styled.div`
  /* border: 4px solid black; */
  font-size: 30px;
  font-weight: bold;
  color: white;
  background: black;
  width: 70%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* margin-top: 60px; */
  position: fixed;
  bottom: 0;
  right: 0;
  /* border-radius: 20px; */
`;

const BackButton = styled(Button)`
  left: 0;
  width: calc(30% - 10px);

  > img {
    width: 40px;
    transform: rotate(90deg);
  }
`;

const ChooseButton = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: black;
  margin: 10px 0;
  height: 60px;
  color: white;
  box-sizing: border-box;
`;

const Input = styled.input`
  width: 80%;
  padding: 20px;
  font-size: 30px;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  border: 2px solid black;
  margin: 10px 0;
`;

const ChoseTitle = styled.p`
  font-size: 34px;
  font-weight: bold;
  margin: 20px 0;

  &:first-child {
    margin-top: -140px;
  }
`;

function App() {
  const [isSpinnable, setIsSpinnable] = useState(false);
  const [spins, setSpins] = useState(0);
  const [prevSpins, setPrevSpins] = useState(0);
  const [chosen, setChosen] = useState(false);
  const [values, setValues] = useState(["", ""]);
  const [question, setQuestion] = useState("");
  const [isElinaHere, setIsElinaHere] = useState(false);
  const [yesIsFirst, setYesIsFirst] = useState(false);

  // useEffect(() => {
  //   if (isSpinnable) {
  //     setTimeout(() => {
  //       setIsSpinnable(false);
  //       // setSpins(0);
  //     }, spins * 800);
  //   }
  // }, [isSpinnable, spins]);

  // const getRandomSpins = () => {
  //   return Math.random() * 80;
  // };

  const checkFirstYes = () => {
    const firstValue = values.map((value) => value.toLowerCase())[0];
    const isFirstPositive =
      firstValue.includes("yes") ||
      firstValue.includes("sure") ||
      firstValue.includes("exactly") ||
      firstValue.includes("да") ||
      firstValue.includes("однозначно") ||
      firstValue.includes("именно") ||
      firstValue.includes("точно") ||
      firstValue.includes("вероятно") ||
      firstValue.includes("возможно") ||
      firstValue.includes("я") ||
      firstValue.includes("сто") ||
      firstValue.includes("сдам") ||
      firstValue.includes("закро") ||
      firstValue.includes("найду") ||
      firstValue.includes("люб") ||
      firstValue.includes("пройд") ||
      firstValue.includes("буд") ||
      firstValue.includes("хор") ||
      firstValue.includes("ок") ||
      firstValue.includes("отл") ||
      firstValue.includes("прим") ||
      firstValue.includes("повыс") ||
      firstValue.includes("заработа") ||
      firstValue.includes("леч") ||
      firstValue.includes("поправ") ||
      firstValue.includes("умн") ||
      firstValue.includes("молодец") ||
      firstValue.includes("рекрут") ||
      firstValue.includes("эйчар") ||
      firstValue.includes("hr") ||
      firstValue.includes("love") ||
      firstValue.includes("бтс") ||
      firstValue.includes("четко");

    setYesIsFirst(isFirstPositive);
  };

  const checkIsElina = () => {
    const words = question
      .split(" ")
      .map((word) => word.toLowerCase())
      .join(" ");

    const isElinaHereLocal =
      words.includes("испыталк") ||
      words.includes("испытат") ||
      words.includes("сдам") ||
      words.includes("закро") ||
      words.includes("сдаст") ||
      words.includes("найду") ||
      words.includes("кандидат") ||
      words.includes("люб") ||
      words.includes("пройд") ||
      words.includes("буд") ||
      words.includes("хор") ||
      words.includes("ок") ||
      words.includes("отл") ||
      words.includes("прим") ||
      words.includes("повыс") ||
      words.includes("деньги") ||
      words.includes("найду") ||
      words.includes("леч") ||
      words.includes("поправ") ||
      words.includes("умн") ||
      words.includes("молодец") ||
      words.includes("рекрут") ||
      words.includes("эйчар") ||
      words.includes("hr") ||
      words.includes("love") ||
      words.includes("бтс") ||
      words.includes("четко");

    setIsElinaHere(isElinaHereLocal);
  };

  const onClickButton = () => {
    setSpins(0);
    // setIsSpinnable(true);
    setIsSpinnable((prev) => !prev);

    const even = prevSpins % 2 === 0;

    /* const max = isSpinnable ? 5 : 55;
const min = isSpinnable ? 0 : 50; */
    console.log("bla");
    /* const turns = Math.floor(Math.random() * 3) */

    /* console.log("ELINA IS HERE", isElinaHere, words, words.includes('испыталку'), words.includes('испыталк')) */
    if (isElinaHere) {
      /* const turns = Math.floor(Math.random() * (20 - 18 + 1) + 18)
    const degrees = Math.random() * 360;
    const sign = Math.random() <= 0.5 ? -1 : 1; */
      const turns = Math.floor(Math.random() * 200);
      const degrees = Math.random() * 80;
      const sign = Math.random() <= 0.5 ? -1 : 1;

      // console.log("random 1", spinsAmount);
      const spinsAmount = 360 * turns + degrees * sign;

      if (even) {
        setSpins(spinsAmount);
      } else {
        setSpins(spinsAmount * -1);
      }
    } else {
      const turns = Math.floor(Math.random() * (20 - 18 + 1) + 18);
      const degrees = Math.random() * 360;
      const sign = Math.random() <= 0.5 ? -1 : 1;
      /* const turns = Math.floor(Math.random() * 200);
    const degrees = Math.random() * 80;
    const sign = Math.random() <= 0.5 ? -1 : 1; */

      // console.log("random 1", spinsAmount);
      const spinsAmount = 360 * turns + degrees * sign;

      if (even) {
        setSpins(spinsAmount);
      } else {
        setSpins(spinsAmount * -1);
      }
    }

    /* const turns = Math.floor(Math.random() * (20 - 18 + 1) + 18);
    const degrees = Math.random() * 360;
    const sign = Math.random() <= 0.5 ? -1 : 1; */
    /* const turns = Math.floor(Math.random() * 200);
    const degrees = Math.random() * 80;
    const sign = Math.random() <= 0.5 ? -1 : 1; */

    // console.log("random 1", spinsAmount);
    /* const spinsAmount = 360 * turns + degrees * sign; */

    /* if (even) {
      setSpins(spinsAmount);
    } else {
      setSpins(spinsAmount * -1);
    } */

    // const spinsAmount = prevSpins % 2 === 0 ? spinsAmount : spinsAmount * -1;
    console.log("random 1", spins);
    setPrevSpins((prev) => prev++);

    // setTimeout(() => {
    //   setIsSpinnable(false);
    // }, spins * 800);

    // setTimeout(() => {
    //   setIsSpinnable(false);
    //   // setSpins(0);
    // }, spins * 1000);
  };

  const onChangeValue = (evt, index) => {
    console.log("evt", evt.currentTarget.value, index);
    const newValues = [...values];
    newValues[index] = evt.currentTarget.value;
    setValues(newValues);
  };

  /* {values.length < 4 && (
            <ChooseButton onClick={() => setValues([...values, ""])}>
              Добавить вариант
            </ChooseButton>
          )} */

  return (
    <Wrapper>
      {!chosen ? (
        <>
          <ChoseTitle>Вопрос:</ChoseTitle>
          <Input
            value={question}
            onChange={(evt) => setQuestion(evt.currentTarget.value)}
          />
          <ChoseTitle>Варианты:</ChoseTitle>

          {values.map((value, index) => (
            <Input
              value={value}
              onChange={(evt) => onChangeValue(evt, index)}
            />
          ))}

          {question.length > 0 &&
            values.filter((value) => value.length > 0).length ===
              values.length && (
              <ChooseButton
                onClick={() => {
                  setChosen(true);
                  checkIsElina();
                  checkFirstYes();
                }}
              >
                Дальше
              </ChooseButton>
            )}
        </>
      ) : (
        <>
          <Title>{question}</Title>
          <Arrow alt="" src={Triangle} />
          <Circle
            isSpinnable={isSpinnable}
            spins={spins}
            animate={{
              rotate: isElinaHere
                ? yesIsFirst
                  ? spins
                  : spins + 180
                : isSpinnable
                ? spins
                : spins * -1,
              transition: {
                rotate: {
                  duration: isElinaHere ? spins / 8000 : spins / 5000,
                },
              },
            }}
          >
            {/* <motion.div
          animate={{
            rotate: isSpinnable ? 1440 : 0,
          }}
        > */}
            <CircleHalf>
              {/* <Back /> */}
              <p>{values[0]}</p>
            </CircleHalf>
            {/* </motion.div> */}
            <CircleHalf>
              {/* <Back /> */}
              <p>{values[1]}</p>
            </CircleHalf>
          </Circle>
          <BackButton onClick={() => setChosen(false)}>
            <img alt="" src={WhiteTriangle} />
          </BackButton>
          <Button onClick={onClickButton}>Крутить</Button>
        </>
      )}
    </Wrapper>
  );
}

export default App;
