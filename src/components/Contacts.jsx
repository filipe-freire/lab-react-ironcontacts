import React from 'react';
import contacts from './../contacts.json';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contactsLimit: contacts.slice(0, 5),
    };
  }

  sortByName = () => {
    const list = [...this.state.contactsLimit];
    list.sort((firstPerson, secondPerson) => {
      return firstPerson.name > secondPerson.name ? 1 : -1;
    });
    this.setState({
      contactsLimit: list,
    });
  };

  sortByPopularity = () => {
    const list = [...this.state.contactsLimit];
    list.sort((firstPerson, secondPerson) => {
      return firstPerson.popularity < secondPerson.popularity ? 1 : -1;
    });
    this.setState({
      contactsLimit: list,
    });
  };

  AddRandomContact = () => {
    const list = [...this.state.contactsLimit];
    const randomContact =
      contacts[Math.floor(Math.random() * contacts.length - 1)];
    if (!list.includes(randomContact)) {
      list.unshift(randomContact);
    }

    this.setState({
      contactsLimit: list,
    });
  };

  deleteEntry = (personId) => {
    console.log(personId);
    const list = [...this.state.contactsLimit];
    const filteredList = list.filter((actor) => actor.id !== personId);
    this.setState({
      contactsLimit: filteredList,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.AddRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsLimit.map((person) => {
              return (
                <tr key={person.id}>
                  <td>
                    {' '}
                    <img
                      src={person.pictureUrl}
                      alt="person profile"
                      style={{ maxWidth: '100px' }}
                    />{' '}
                  </td>
                  <td>{person.name}</td>
                  <td>{person.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteEntry(person.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;