import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
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
          <Button label="x" onClick={() => handleOperation("*")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
