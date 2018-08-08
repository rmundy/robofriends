import * as React from 'react';
import Card from '../../components/Card/Card';
import { ICardProps } from '../../components/Card/CardProps';

export interface ICardListProps {
  robots: ICardProps[];
}

export interface ICardListState {
  created: boolean;
}

export class CardList extends React.PureComponent<
  ICardListProps,
  ICardListState
> {
  public render() {
    const cardsArray = this.props.robots.map((robot) => {
      return <Card key={robot.id} {...robot} />;
    });
    return <div>{cardsArray}</div>;
  }
}

export default CardList;
