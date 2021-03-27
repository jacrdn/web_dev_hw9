import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { create_post, fetch_posts } from '../api';
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import { Component } from "react";

export default function PostsNew() {
  let history = useHistory();
  let [post, setPost] = useState({});

  function submit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(post);
    create_post(post).then((resp) => {
      if (resp["errors"]) {
        console.log("errors", resp.errors);
      }
      else {
        history.push("/");
        fetch_posts();
      }
    });
  }

  function updateBody(ev) {
    let p1 = Object.assign({}, post);
    p1["body"] = ev.target.value;
    setPost(p1);
  }

  function updateDate(ev) {
    let p1 = Object.assign({}, post);
    p1["date"] = ev.target.value;
    setPost(p1);
  }

  function updateTitle(ev) {
    let p1 = Object.assign({}, post);
    p1["title"] = ev.target.value;
    setPost(p1);
  }

  return (
    <Row>
      <Col>
        <h2>New Post</h2>
        <Form onSubmit={submit}>
        <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control as="textarea"
                          rows={1}
                          onChange={updateTitle}
                          value={post.title} />
          </Form.Group>
          <Form.Group>
            <Form.Label>date</Form.Label>
            <Form.Control as="textarea"
                      value={post.date}
                      onChange={updateDate}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>body</Form.Label>
            <Form.Control as="textarea"
                          rows={4}
                          onChange={updateBody}
                          value={post.body} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post!
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
