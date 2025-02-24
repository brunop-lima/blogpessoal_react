import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import FormTemas from './components/temas/formTemas/FormTemas';
import ListaPostagens from './components/postagens/listaPostagens/ListraPostagens';
import FormPostagem from './components/postagens/formPostagem/FormPostagem';
import DeletarPostagem from './components/postagens/deletarPostagens/DeletarPostagens';
import Perfil from './pages/perfil/Perfil';
import DeletarTemas from './components/temas/deletarTemas/DeletarTemas';


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTemas />} />
              <Route path="/editartema/:id" element={<FormTemas />} />
              <Route path="/DeletarTemas/:id" element={<DeletarTemas />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastrarpostagem" element={<FormPostagem />} />
              <Route path="/editarpostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter></AuthProvider>
    </>
  )
}

export default App