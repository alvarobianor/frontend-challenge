import Card from "components/Card";
import * as S from "./styles";
import { useDestination } from "hooks/useDestination";

interface Props {
  onOpenEditModalDestination: () => void;
}

export default function Dashboard({ onOpenEditModalDestination }: Props) {
  const { destinies } = useDestination();
  return (
    <S.Container>
      {destinies.map((destinie) => (
        <Card
          destinie={destinie}
          onOpenModalEditDestination={onOpenEditModalDestination}
        />
      ))}
    </S.Container>
  );
}
