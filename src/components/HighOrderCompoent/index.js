import React, { Component } from 'react';
function connectPromise({ promiseLoader, mapResultToProps }) {
  return Comp => {
    return class AsyncComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          result: undefined
        };
      }
      componentDidMount() {
        promiseLoader()
          .this(result => this.setState({ result }));
      }
      render() {
        return (
          <Comp {...mapResultToProps(props)} {...this.props} />
        );
      }
    };
  };
}

const UserList = connectPromise({
  promiseLoader: loadUsers,
  mapResultToProps: result => ({ list: result.UserList })
})(List);

const BookList = connectPromise({
  promiseLoader: loadBooks,
  mapResultToProps: result => ({ list: result.bookList })
})(List);
