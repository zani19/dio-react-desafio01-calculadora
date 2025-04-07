import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, Icon } from "./styles";
import { MdBackspace } from "react-icons/md";
import { FaDivide } from "react-icons/fa";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleClearEntry = () => {
    setCurrentNumber("0");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleAddDecimal = () => {
    if (!currentNumber.includes(".")) {
      setCurrentNumber((prev) => `${prev}.`);
    }
  };

  const handlePercentage = () => {
    setCurrentNumber((prev) => String(Number(prev) / 100));
  };

  const handleOperation = (operation) => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation(operation);
    } else {
      const num1 = Number(firstNumber);
      const num2 = Number(currentNumber);
      let result;

      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Erro";
          break;      
        default:
          break;
      }
      setCurrentNumber(String(result));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (operation && firstNumber !== "0") {
      const num1 = Number(firstNumber);
      const num2 = Number(currentNumber);
      let result;

      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Erro";
          break;       
        default:
          break;
      }

      setCurrentNumber(String(result));
      setFirstNumber("0");
      setOperation(null);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={<Icon>C</Icon>} onClick={handleOnClear} />
          <Button
            label={
              <Icon>
                <MdBackspace />
              </Icon>
            }
            onClick={handleClearEntry}
          />
          <Button label={<Icon>%</Icon>} onClick={handlePercentage}/>
          <Button
            label={
              <Icon>
                <FaDivide />
              </Icon>
            }
            onClick={() => handleOperation("/")}
          />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label={<Icon>X</Icon>} onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label={<Icon>-</Icon>} onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label={<Icon>+</Icon>} onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={handleAddDecimal} />
          <Button label={<Icon>=</Icon>} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
