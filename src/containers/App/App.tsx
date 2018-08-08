import * as React from 'react';
import { ICardProps } from '../../components/Card/CardProps';
import { Scroll } from '../../components/Scroll/Scroll';
import SearchBox from '../../components/SearchBox/SearchBox';
import CardList from '../CardList/CardList';
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
      robots: [],
      searchField: ''
    };
  }

  public componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  public onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, searchField: event.currentTarget.value });
  };

  public render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
