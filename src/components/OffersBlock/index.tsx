import { Container } from "@mui/material";
import { FC, memo, useState } from "react";
import Title from "../Title";
import CardOffersSwiper from "../CardOffersSwiper";
import TagButton from "../TagButton";
import { button } from "../../сonstants/TagButtons";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

const OffersBlock: FC = () => {
  const [state, setState] = useState<string>("Top");

  const onChangeCards = (event: HTMLElementEvent<HTMLButtonElement>): void => {
    event.target.dataset.btn && setState(event.target.dataset.btn);
  };

  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "5rem" }}>
        <Title textTitle="Лучшие предложения для тебя" />
        {button.map(({ id, name, data }) => {
          return (
            <TagButton
              key={id}
              id={id}
              text={name}
              data={data}
              onChangeCards={onChangeCards}
            />
          );
        })}
        <CardOffersSwiper dataType={state} />
      </div>
    </Container>
  );
};

export default memo(OffersBlock);
