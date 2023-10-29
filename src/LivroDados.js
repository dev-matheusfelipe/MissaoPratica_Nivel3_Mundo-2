import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';
import Menu from './Menu'; // Importe o componente de menu


function LivroDados() {
    function LivroDados() {
        const controleLivro = new ControleLivros();
        const controleEditora = new ControleEditora();

        const opcoes = controleEditora.getEditoras().map((editora) => ({
            value: editora.codEditora,
            text: editora.nome,
        }));

        const [titulo, setTitulo] = useState('');
        const [resumo, setResumo] = useState('');
        const [autores, setAutores] = useState('');
        const [codEditora, setCodEditora] = useState(0);

        const navigate = useNavigate();

        const tratarCombo = (e) => {
            setCodEditora(Number(e.target.value));
        };

        const incluir = (e) => {
            e.preventDefault();
            const autoresArray = autores.split('\n').map((autor) => autor.trim());
            const novoLivro = {
                codigo: 0, // Coloque o código apropriado aqui
                codEditora,
                titulo,
                resumo,
                autores: autoresArray,
            };
            controleLivro.incluir(novoLivro);
            navigate('/');
        };

        return (
            <main>
                <h1>Cadastro de Livro</h1>
                <form onSubmit={incluir}>
                    <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">
                            Título
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="resumo" className="form-label">
                            Resumo
                        </label>
                        <textarea
                            className="form-control"
                            id="resumo"
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="autores" className="form-label">
                            Autores (um por linha)
                        </label>
                        <textarea
                            className="form-control"
                            id="autores"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="codEditora" className="form-label">
                            Editora
                        </label>
                        <select
                            className="form-select"
                            id="codEditora"
                            value={codEditora}
                            onChange={tratarCombo}
                        >
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Cadastrar Livro
                    </button>
                </form>
            </main>
        );
    }

    return (
        <div>
            <Menu /> {/* Renderize o componente de menu aqui */}
            {/* Restante do conteúdo da página */}
        </div>
    );
}

export default LivroDados;
