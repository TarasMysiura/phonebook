import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import Layout from './Loyaut/Loyaut';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  return (
    <div className={css.container}>
      <Layout></Layout>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer />
      </main>
      <footer></footer>
    </div>
  );
};
