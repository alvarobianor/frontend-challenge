import grey from "@material-ui/core/colors/grey";
import MaterialInput from "@material-ui/core/Input";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* width: 100%; */
  margin-left: 30px;

  /* background-color: greenyellow; */
`;

const Label = styled.p`
  color: white;
  margin-bottom: 5px;
`;

const TextFieldSC = styled(MaterialInput)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  height: 50px;
  width: 455px;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;
  border: 1px solid ${grey[300]};
  background-color: white;
  border-radius: 0.25rem;
`;

export default function SelectPlace() {
  const [place, setPlace] = useState("");
  const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
    setPlace(event.target.value);
  };
  return (
    <Container>
      <Label>Local</Label>
      <TextFieldSC
        placeholder="Digite o local que deseja conhecer"
        onChange={handleChange}
        value={place}
        disableUnderline
      />
    </Container>
  );
}