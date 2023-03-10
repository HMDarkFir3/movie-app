import { FC } from "react";
import { useTheme } from "styled-components/native";
import { FileX } from "phosphor-react-native";

import { apiImageUrl } from "@services/api";

import { CreditsDTO } from "@dtos/Movie/CreditsDTO";

import {
  Container,
  Poster,
  EmptyPoster,
  Name,
  How,
  Character,
  ActorCardWrapper,
  ActorCardTitle,
  ActorCardSeparator,
} from "./styles";

interface Props {
  data: CreditsDTO.Cast;
}

export const ActorCard: FC<Props> = (props) => {
  const { profile_path, name, character } = props.data;

  const { colors } = useTheme();

  return (
    <Container>
      {profile_path ? (
        <Poster
          source={{ uri: `${apiImageUrl}${profile_path}` }}
          resizeMode="cover"
        />
      ) : (
        <EmptyPoster>
          <FileX
            size={28}
            color={colors.screens.details.components.actorCard.icon}
          />
        </EmptyPoster>
      )}

      <Name>
        {name} <How>how</How> <Character>{character}</Character>
      </Name>
    </Container>
  );
};

export { ActorCardWrapper, ActorCardTitle, ActorCardSeparator };
