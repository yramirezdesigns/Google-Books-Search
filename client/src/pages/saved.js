import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../utils/API';
import Header from '../components/Header';
import BookList from '../components/BookList';


class SavedPage extends React.Component {
  constructor(props) {
    super(props);

    this.loadBooks = this.loadBooks.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      pageTag: 'Your Saved Books of Interest',
      action: 'delete',
      books: []
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    API.getSavedBooks()
      .then((res) => {
        const bookList = res.data;

        this.setState({ books: bookList });
      })
      .catch((error) => console.log(error));
  }

  handleBookAction(id) {
    API.deleteBook(id)
      .then(() => this.loadBooks())
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Header pageTag={this.state.pageTag} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-primary text-white">
                <h3>
                  <strong>
                    <FontAwesomeIcon icon="download" /> Saved Books
                  </strong>
                </h3>
              </Card.Header>
              <Card.Body>
                {!this.state.books.length ? (
                  <h2 className="text-center">No Saved Books</h2>
                ) : (
                  <BookList
                    books={this.state.books}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedPage;
