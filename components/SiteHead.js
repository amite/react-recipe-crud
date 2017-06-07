import React, { Component } from 'react'
import Head from 'next/head'


class SiteHead extends Component {
  render() {
    return (
      <Head>
        <title>{this.props.title || 'Default'}</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
        <style global>{`
          body {
            background: url('/static/img/recipe-bkg.jpg') no-repeat;
            background-size: cover;
            font-family: 'Lora','Helvetica Neue', Helvetica,Arial, sans-serif;
            font-size: 18px;
            color: #3c3b3b;
            width: 100vw;
            height: 100vh;                
          }

          body::before {
            content: "";
            background-color: #666;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            opacity: 0.6;
          }

          h1, h2, h3 { 
            font-family: 'Open Sans','Helvetica Neue', Helvetica,Arial, sans-serif;
            font-size: 65px;
            letter-spacing: -0.02em;
            line-height: 1.1;
            font-weight: 800;
            margin-bottom: 44px;
            text-shadow: 0 1px 1px #fff;
          }

          h2 {
            font-size: 45px;
            margin-bottom: 20px;
          }

          h3 {
            font-size: 35px;
            font-weight: 300;
            margin-bottom: 25px;
            line-height: 1.2;
            color: #6d6d6d;
          }

          .recipe-item {
            margin-bottom: 15px;
            min-height: 30px;
            background: rgb(255, 193, 7);
            color: white;
            border-radius: 5px;
          }

          .glyphicon-pencil {
            float: right;
          }
        `}</style>
      </Head>
    )
  }
}

export default SiteHead