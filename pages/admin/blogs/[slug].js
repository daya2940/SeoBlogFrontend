import Head from 'next/head';
import Link from 'next/link'
import {singleBlog } from '../../../actions/blog';
import Layout from '../../../component/layout';
import { API, DOMAIN, APP_NAME } from '../../../config';
import { withRouter } from 'next/router';
import { Fragment, useState } from 'react';


const SingleBlog = ({ blog, router }) => {
  return <Fragment>
    <Layout>
      <main>
        <article>
          <div className="container-fluid">
            <section>
              {JSON.stringify(blog)}
            </section>
          </div>
        </article>
      </main>
    </Layout>
  </Fragment>

}

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data }
    }
  });
}

export default withRouter(SingleBlog);