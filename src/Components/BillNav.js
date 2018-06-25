import React from 'react';
import createReactClass from 'create-react-class';
import { Navbar } from 'react-bootstrap';
import Link  from 'next/link';
import Head from 'next/head';

const BillNav = createReactClass({
  render: function() {
    return (
        <Navbar collapseOnSelect>
          <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#f1f1f1"/>
            <link rel="shortcut icon" href="/static/img/usbilltrack-icon.png"/>
            <link rel="stylesheet" href="/static/css/bootstrap3-3-7.min.css"/>
            <link rel="stylesheet" href="/static/css/font-awesome-4.7.0/css/font-awesome.min.css"/>
            <title>US Bill Track</title>
          </Head>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                <img className="logo-item" src="/static/img/usbilltrack-icon.png"/>
                US Bill Track
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text pullRight>
              <Link href="/about"><a className = "navbar-link" href="/about">About</a></Link>
            </Navbar.Text>
          </Navbar.Collapse>
          <style jsx>{`
            nav.navbar.navbar-default{
              margin: 0;
              -moz-box-shadow:    1px 1px 1px 1px #ccc;
              -webkit-box-shadow: 1px 1px 1px 1px #ccc;
              box-shadow:         1px 1px 1px 1px #ccc;
              border-radius: 0;
          }

          .navbar-brand {
              display: flex;
              align-items: center;
          }
          .navbar-brand>img {
              margin-right: 5px;
          }

          .navbar-link{
              text-decoration: none;
          }

          .logo-item{
              width: 30px;
              height: 30px;
          }
          `}
          </style>
        </Navbar>
    );
  }
});

export default BillNav;