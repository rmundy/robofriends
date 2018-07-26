import * as React from 'react';
import { ICardProps } from '../Card/CardProps';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

interface IAppProps {
  robots: ICardProps[];
}

interface IAppState {
  robots: ICardProps[];
  searchField: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      robots: this.props.robots,
      searchField: ''
    };
  }

  public onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, searchField: event.currentTarget.value });
  };

  public render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
