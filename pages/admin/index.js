import Layout from '../../component/layout';
import Admin from '../../component/auth/admin';
import Link from 'next/link';

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 py-5">
              <h1>Admin dashboard</h1>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>create category</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  )
}

export default AdminIndex;